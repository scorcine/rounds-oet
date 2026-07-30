# Rounds — OET Medicine

Web-first preparation app for the Occupational English Test (Medicine), structured so the same domain models and content can later power a mobile app (React Native / Expo).

## Run

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Phase 1 — Adaptive study

- **`/diagnose`** — 16-question mini-OET across 4 competencies
- **`/study`** — SM-2 spaced repetition with daily goals
- **`/competencies`** — mastery map + weak-area priorities

## Phase 2 — Exam mode & analytics

- **`/exam`** — timed full exam (45/60/45/20) with per-question pacing
- **`/analytics`** — score by subtest, errors by topic, pacing report

## Phase 3 — AI feedback

- Writing: rubric bands + estimated grade via `/api/feedback/writing`
- Speaking: Intelligibility / Fluency / Appropriateness / Resources + clarity flags
- Set `OPENAI_API_KEY` in `.env.local` for AI; otherwise local heuristic engine runs
- Optional “human review” credit queue (demo)

## Skills practice

- Listening, Reading, Writing, Speaking modules
- Vocabulary, Mock, Progress

## Disclaimer

Original practice materials only. Not affiliated with official OET.
