/** Apostrophe look-alikes, including the acute accent from Brazilian ABNT2 keyboards. */
const APOSTROPHES = /[\u2018\u2019\u201B\u2032\u00B4\u0060\u02B9\u02BB\u02BC\u02BD\u02C8\u02CA\u0301]/g;

export function normalizeEnglishAnswer(s: string): string {
  return s
    .normalize("NFKC")
    .toLowerCase()
    .replace(APOSTROPHES, "'")
    .replace(/\s*'\s*/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.!?]+$/, "")
    .trim();
}

export function answersMatch(user: string, answer: string, accepted?: string[]): boolean {
  const u = normalizeEnglishAnswer(user);
  if (!u) return false;
  return [answer, ...(accepted ?? [])].some((a) => normalizeEnglishAnswer(a) === u);
}
