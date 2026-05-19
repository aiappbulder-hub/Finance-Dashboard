[README.md](https://github.com/user-attachments/files/27988653/README.md)
# Trent's Finance Dashboard

A personal finance PWA — property portfolio tracker, investment dashboard, super projections and retirement countdown. Installs directly to your phone from the browser.

## Deploy to GitHub Pages (5 minutes)

### First time setup

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **+** → **New repository**
3. Name it `finance-dashboard` (or anything you like)
4. Set it to **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Upload the files

6. On the new repo page, click **uploading an existing file**
7. Drag all 4 files into the window:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon.svg`
8. Click **Commit changes**

### Enable GitHub Pages

9. Go to **Settings** → **Pages** (left sidebar)
10. Under **Source**, select **Deploy from a branch**
11. Branch: **main** | Folder: **/ (root)**
12. Click **Save**

Your app will be live at:
`https://YOUR-USERNAME.github.io/finance-dashboard/`

(Takes ~2 minutes to go live after first deploy)

---

## Install on iPhone

1. Open Safari and go to your GitHub Pages URL
2. Tap the **Share** button (box with arrow)
3. Scroll down and tap **Add to Home Screen**
4. Tap **Add**

The app icon appears on your home screen. It runs full-screen with no browser chrome.

## Install on Android

1. Open Chrome and go to your GitHub Pages URL
2. Tap the **⋮** menu → **Add to Home screen**  
   OR tap the **Install** banner that appears automatically
3. Tap **Install**

---

## Updating your data

### Annual property snapshot (takes 2 min)
1. Open app → **Properties** tab
2. Tap any property
3. Tap **+ Update** (top right)
4. Enter current year's: value, rent, loan balance, expenses
5. Tap **Save Snapshot** — appears in charts and history table instantly

### Change assumptions
- Open **Forecast** tab → scroll to bottom → **Settings & Assumptions**
- Edit any figure — projections update live
- All data saves automatically to your phone's local storage

### Reset to defaults
- Forecast tab → Settings → **Reset All to Defaults**

---

## What's pre-loaded

**Properties** (seeded with realistic VIC growth from purchase year):
- Doveton 1 — 2003→2026, $138k→$475k
- Doveton 2 — 2011→2026, $210k→$475k  
- Pakenham — 2018→2026, $350k→$508k
- Reservoir (Trust) — 2014→2026, $188k→$330k

**Investments** (from your CSVs — 14 May 2026):
- US Stocks: TSLA, PLTR, GOOG, AAPL, AMZN
- ASX: RIO, MPL (Trust), REH, NDQ
- Crypto: BNB, BTC, ETH, SOL, XRP, DOT, AVAX, DOGE

**Expenses**: Estimated at 22% of gross rent
(Management ~8% + council rates + insurance + maintenance + water)

---

## Tabs

| Tab | What it shows |
|-----|---------------|
| **Overview** | Net worth, passive income vs target, retirement & debt-free countdowns, rental breakdown |
| **Portfolio** | Comparison chart (value/yield/equity), yield leaderboard vs 6% benchmark |
| **Properties** | Per-property drill-down: 4 chart views, year-by-year table, snapshot logging |
| **Invest** | Super, US stocks, ASX, crypto with real holdings |
| **Forecast** | Net worth / passive income / super projections, freedom roadmap, settings |
