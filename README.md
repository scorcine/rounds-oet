# Rounds — OET Medicine

Web-first preparation app for the Occupational English Test (Medicine), structured so the same domain models and content can later power a mobile app (React Native / Expo).

## Run

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's included

- **Listening** — Parts A/B/C with TTS audio, gap + MCQ, scoring
- **Reading** — Parts A/B/C timed passages
- **Writing** — case notes → letter, word count, rubric, sample
- **Speaking** — role-play cards, mic recording, self-assessment
- **Vocabulary** — clinical deck with mastered flags
- **Mock** — ordered full-set pathway
- **Progress** — localStorage attempts, streak, readiness

## Mobile-ready layout

| Path | Role |
|------|------|
| `src/domain/` | Shared types & scoring (portable) |
| `src/data/` | Curriculum content (portable) |
| `src/lib/progress.ts` | Storage adapter (swap for API) |
| `src/components/` | Web UI |
| `src/app/` | Next.js routes |

## Disclaimer

Original practice materials only. Not affiliated with official OET.
