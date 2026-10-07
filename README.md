# Jathaka Shasthram

## Current build
- D1 Rashi chart
- D9 Navamsa chart and placements
- D1 + D9 combined comparison
- Vargottama detection only when supplied D1/D9 signs match exactly
- AI chat grounded with both D1 and D9 chart data
- Full Kundli PDF with D9 + D1/D9 comparison section

## Run locally
1. Keep your existing `.env` file in the project root. Do not replace it with `.env.example`.
2. Run `npm install` if dependencies are not already installed.
3. Run `npm start`.
4. Open `http://localhost:3000`.

## Vercel deployment
Vercel's Express runtime does not serve static assets through `express.static()`. The frontend files are therefore kept in `public/`:
- `public/index.html`
- `public/style.css`
- `public/script.js`

The Express server serves the same `public/` directory locally. The frontend uses same-origin API requests on Vercel and uses `http://localhost:3000` only when opened through a separate local VS Code Live Server port.

## Security
The API keys stay server-side in `.env` / Vercel Environment Variables. Do not commit `.env`.

## D1 + D9 AI behavior
The AI receives normalized D1 and D9 placements. It may identify a planet as vargottama only when its D1 and D9 signs are both present and exactly match. Astrology output is framed as traditional/cultural reflective guidance, not guaranteed prediction.


## V2.1 Premium UI update
- Refined D1/D9 chart layout and responsive spacing.
- Added D9 quick-highlight cards beside the Navamsa chart.
- Improved Kannada planet/house text wrapping and card consistency.
- Improved mobile floating controls and AI chat spacing.
- User-entered birth place is shown in the result instead of exposing the geocoder's full address string.
- Added the `tz-lookup` runtime dependency used by the location timezone calculation.


### V2.2 input polish
- Birth-time controls now use explicit 12-hour hour/minute selectors with a clear AM/PM selector for consistent cross-browser behavior.


## V3.0 Premium UI polish
- Rebalanced D1 chart hero layout and reduced excessive vertical spacing.
- Added birth date/time metadata beside the D1 chart.
- Added a compact D1 planet-abbreviation legend for the API SVG labels.
- Refined D9, D1+D9, reading, planet and house section rhythm.
- Improved floating AI/WhatsApp positioning and chat panel behavior.
- Added stronger mobile/tablet responsive rules for charts, tables, cards and controls.
- No API keys are included.
