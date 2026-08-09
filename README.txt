SPECTRA v2.0 — deploy + install
================================

WHAT'S IN THIS ZIP (upload all of these to the repo root, flat — no folders):
  index.html              the whole app
  sw.js                   service worker (offline + update handling)
  manifest.webmanifest    install metadata
  icon-180 / 192 / 512 / 512-maskable .png   app icons

DEPLOY (GitHub Pages)
  1. Go to the motbuchanan.github.io/spectra repo on github.com.
  2. Add files -> Upload files -> drag ALL files from this zip in at once.
  3. Commit. Live at https://motbuchanan.github.io/spectra/ in ~1 min.
  4. Already have it installed? It self-updates: the app checks its own
     build stamp on open and reloads once to the new version.

INSTALL ON PHONE (do this from the https URL, not a downloaded file)
  iPhone (Safari):  Share -> Add to Home Screen.
  Android (Chrome): menu -> Install app / Add to Home screen.

IMPORTANT
  Saving only works on the https://motbuchanan.github.io/spectra/ URL.
  A file opened from Downloads (file:// or content://) can't keep sessions —
  the app shows a banner and pushes an Export so nothing is lost.

WHAT'S NEW IN v2
  - Onboarding, storage-safety banner, build stamp, self-update check
  - Session-complete reveal moment
  - Note Detail: Latest / Overlay (all captures fused) / Timeline (vs first)
  - Calendar: Month spectrum grid + Ribbons (scan columns for drift)
  - Melody mode (your visuals fire in rhythm)
  - Friend Compare (export/import an envelope, compare spectrums side by side)
  - v2.1: deep "mind-space" capture + note stages — the space lights up with
    the note's color, drifting dust, a resonance ripple on each play

Your v1 sessions are untouched — the data format is unchanged.
Build: v2.1 · Aug 9
