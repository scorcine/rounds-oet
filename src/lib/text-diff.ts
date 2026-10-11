export type DiffSegment = { type: "same" | "del" | "add"; text: string };

function tokenize(text: string): string[] {
  return text.match(/\s+|[\p{L}\p{N}'’´`]+|[^\s\p{L}\p{N}]/gu) ?? [];
}

/** Word-level diff; changed runs are emitted as all deletions followed by all additions. */
export function diffWords(before: string, after: string): DiffSegment[] {
  const a = tokenize(before);
  const b = tokenize(after);
  const n = a.length;
  const m = b.length;

  const lcs: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
    }
  }

  const segments: DiffSegment[] = [];
  let del = "";
  let add = "";
  const flush = () => {
    if (del) segments.push({ type: "del", text: del });
    if (add) segments.push({ type: "add", text: add });
    del = "";
    add = "";
  };
  const pushSame = (text: string) => {
    flush();
    const last = segments[segments.length - 1];
    if (last?.type === "same") last.text += text;
    else segments.push({ type: "same", text });
  };

  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      pushSame(a[i]);
      i++;
      j++;
    } else if (lcs[i + 1][j] >= lcs[i][j + 1]) {
      del += a[i++];
    } else {
      add += b[j++];
    }
  }
  while (i < n) del += a[i++];
  while (j < m) add += b[j++];
  flush();

  return segments;
}

export function hasTextChange(before: string, after: string): boolean {
  return diffWords(before.trim(), after.trim()).some((s) => s.type !== "same" && s.text.trim());
}
