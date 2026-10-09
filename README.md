# Jathaka Shasthram

Premium Vedic astrology web experience with D1/D9 charts, traditional readings, compatibility preview, numerology, Kundli PDF, and Gemini-powered AI guidance.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env` and add your own API keys. Never commit `.env`.

## Final audit fixes (3.2.0)

- Birth-location timezone is resolved from latitude/longitude instead of assuming IST.
- Strict Gregorian birth-date validation prevents impossible dates.
- Compatibility wording now matches the actual traditional D1 chart-comparison implementation.
- AI chat panel uses viewport-safe height calculations so the header is not clipped on shorter desktop screens.
- D1/D9 and Vargottama logic preserved.
