# Youtube Declutter

A tiny browser extension with small quality-of-life tweaks for YouTube - adjustable thumbnail saturation, sidebar declutter, and more to come.
No tracking, no external requests - just local storage to save your preferences.

<p align="center">
  <img src="./images/before-after.png" alt="Before and After Saturation Comparison" width="100%">
</p>

## Why

YouTube's default UI has oversaturated thumbnails and sidebar clutter promoting other Google/YouTube services. This extension tones things down and lets you hide what you don't need - without blocking or removing any actual content.

## Install (manual, unpacked)

This isn't on the Chrome Web Store yet - install it manually:

1. Download or clone this repository
2. Open `chrome://extensions` (or `brave://extensions` on Brave)
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select this folder
5. Done - open the extension icon to configure your preferences

## Features

### Thumbnail Desaturation

Click the extension icon to open a popup with a slider. Your chosen
saturation level is saved (`chrome.storage.local`) and applied instantly
to YouTube thumbnails via a small injected stylesheet - no page reload
needed, and it stays in sync across any open YouTube tabs.

### UI Declutter Toggle

Toggle a switch to instantly hide the "More from YouTube" sidebar section (YouTube Premium, YouTube Music, YouTube Kids links). Applied via injected CSS (`display: none !important`), so it vanishes without a page refresh. Your preference is saved and synced across all open YouTube tabs.

## Compatibility

Works on Chrome and Brave (Manifest V3). Should work on any Chromium-based
browser that supports content script CSS injection.

## Limitations

YouTube periodically changes internal class names, which may break
the selector - if thumbnails stop being affected, please open an issue

## License

MIT - see [LICENSE](LICENSE)

## Contributing

Issues and PRs welcome. This project intentionally stays minimal -
please keep additions simple and focused.