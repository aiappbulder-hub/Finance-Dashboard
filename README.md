# Finance Dashboard

A personal finance PWA — property portfolio tracker, investment dashboard, super projections and retirement countdown. Installs directly to your phone from the browser.

The app ships with **sample data only**. Your own figures are entered on your device and stored in that browser's local storage. They are never uploaded, and they are never part of this repository.

---

## Privacy model — read this first

This is a static site. **Anything committed to this repo is public**, and no password
or login added on the page can change that — the browser has to download the whole
page before it can ask for a password, so the data would already be on the reader's
machine. Client-side gates hide things from the screen, not from *View Source*.

So the app is split in two:

| | Where it lives | Who can see it |
|---|---|---|
| **The app** (layout, charts, maths, sample numbers) | This repo, public | Anyone with the link — that's the point |
| **Your figures** (values, loans, balances, holdings, addresses) | `localStorage`, on your device only | Only someone using your unlocked device |

Practical consequences:

- **Never paste real figures into `index.html`.** Enter them in the app instead
  (**Forecast → Settings**), or import a backup file. Anything typed into the source
  becomes public the moment it's pushed.
- **Keep your backup file out of the repo.** Store it in your password manager,
  private cloud storage, or anywhere that isn't this project folder.
- The optional PIN is a **privacy screen, not encryption** — see below.

---

## Sharing it with friends and family

Just send them the link. They get the app loaded with sample numbers and a first-run
screen explaining what it is. Nothing of yours is in it. They can overwrite every
figure with their own under **Forecast → Settings**, and their data stays on their
device the same way yours stays on yours.

---

## Getting your own data in

**On your main device:** open the app, tap **Explore with sample data**, then go to
**Forecast → Settings** and replace the figures with your own. Everything saves as
you type.

**On a second device (or after clearing your browser):**

1. On the device that has your data: **Forecast → Settings → Privacy & Backup → Export my data**
   This downloads `findash-backup-YYYY-MM-DD.json`.
2. Move that file to the other device (AirDrop, private cloud folder, email to yourself).
3. On the new device, open the app and tap **Import my backup file** on the welcome
   screen — or **Forecast → Settings → Import a backup file** if you're past it.

Export again whenever your numbers change meaningfully. Clearing your browser data,
or "Reset All to Defaults", wipes local storage — the backup file is the only copy.

---

## Optional PIN lock

**Forecast → Settings → Privacy & Backup → Device Lock**

Sets a 4–8 digit PIN that's required to open the dashboard on that device.

What it's for: handing your unlocked phone to someone, or leaving the app open on a
shared tablet. What it is **not**: real security. It's a screen in front of the page,
and the data behind it sits unencrypted in local storage — anyone with browser
developer tools can read straight past it. It's per-device, so setting it on your
phone doesn't lock your laptop.

Forget the PIN and the only way back in is **Forgotten your PIN?**, which clears that
device's data. Restore from your backup file afterwards.

---

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
- This restores the sample data and erases yours — export a backup first

---

## Tabs

| Tab | What it shows |
|-----|---------------|
| **Overview** | Net worth, passive income vs target, retirement & debt-free countdowns, rental breakdown |
| **Portfolio** | Comparison chart (value/yield/equity), yield leaderboard vs 6% benchmark |
| **Properties** | Per-property drill-down: 4 chart views, year-by-year table, snapshot logging |
| **Invest** | Super, US stocks, ASX and crypto, with live prices where available |
| **Forecast** | Net worth / passive income / super projections, freedom roadmap, settings |

Live prices are fetched from public endpoints (CoinGecko, Yahoo Finance) using only
the ticker symbols — no quantities or balances are ever sent.
