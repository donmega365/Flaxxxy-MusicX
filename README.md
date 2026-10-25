# Flaxxy MusicX
Music app: Free / Pro ($4.99) / Ultimate ($9.99) plans, home suggestions, downloads, Spotify + YouTube import.
## Build
1. Create a GitHub repo, upload all these files, push. GitHub Actions builds the APK (Android + Android TV) and Windows/Linux apps. Download from the Actions tab > Artifacts.
2. Web/TV browser/iPhone: host `www/` on GitHub Pages/Netlify (it is a PWA, "Add to home screen").
## Before login works
Edit `CFG` in `www/index.html`:
- Spotify: create an app at developer.spotify.com, set the redirect URI to your hosted URL, paste Client ID.
- YouTube: Google Cloud Console > YouTube Data API v3 + OAuth Web client, paste Client ID. (YouTube Music has no public API; liked videos/playlists come via YouTube.)
- Android APK: OAuth needs a custom redirect scheme (or just use the hosted site URL in Capacitor `server.url`).
## Notes
- Songs are free SoundHelix demo tracks. Spotify/YT tracks cannot be legally streamed in your app: imported items are listed and matched to demo songs. For real music use licensed catalogs (Jamendo, Audius, your own licensed deals).
- Payments are a demo. Use Stripe or Google Play Billing for real.
- Ads are a simulated overlay; use AdMob for real ads.
- Backend (real accounts, server-side download limits) is needed before launch.
- Icon: `www/logo.svg`; for Android icons run `npx @capacitor/assets generate` with a PNG export.
- TV: arrow keys/space work; for Android TV add the LEANBACK_LAUNCHER intent filter in AndroidManifest.
## GitHub workflows
- `build.yml`: Android debug APK (with Android TV support), optional signed release APK, Windows/Linux/Mac desktop apps.
- `pages.yml`: publishes `www/` to GitHub Pages (enable Settings > Pages > Source: GitHub Actions). Use that URL as your OAuth redirect.
- Signed APK secrets: KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_ALIAS, KEY_PASSWORD.
