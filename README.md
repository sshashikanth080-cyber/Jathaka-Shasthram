# Jathaka Shasthram — AI Fixed Release

This release keeps the Jathaka Shasthram UI and chart features intact and hardens the Gemini AI chat backend.

## AI fix
- Uses current Gemini 3.8 Flash by default.
- Falls back to Gemini 3.7 Flash and 3.6 Flash when a configured model is unavailable.
- Does not retry non-model-related 4xx request errors against unrelated models.
- Returns clearer authentication/quota/busy messages without exposing the API key.
- Keeps the chart-context safeguards for D1/D9 and vargottama interpretation.

## Local run
```bash
npm install
npm start
```

Keep your real `.env` in the project root. Never commit it to GitHub.
