# YouTube Thumbnail Desaturator

A tiny browser extension that reduces the oversaturated colors in YouTube
thumbnails, with an adjustable saturation level set from the toolbar popup.
No tracking, no external requests - just local storage to save your saturation preference.

<p align="center">
  <img src="./images/before-after.png" alt="Before and After Saturation Comparison" width="100%">
</p>

## Why

Many YouTube thumbnails are edited with extreme color saturation to grab
attention. This extension tones them down to something closer to natural,
without blocking or hiding any content.

## Install (manual, unpacked)

This isn't on the Chrome Web Store yet - install it manually:

1. Download or clone this repository
2. Open `chrome://extensions` (or `brave://extensions` on Brave)
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select this folder
5. Done — thumbnails on YouTube will now render less saturated

## How it works

Click the extension icon to open a popup with a slider. Your chosen
saturation level is saved (`chrome.storage.local`) and applied instantly
to YouTube thumbnails via a small injected stylesheet - no page reload
needed, and it stays in sync across any open YouTube tabs.

## Customizing the saturation level

Click the extension icon and drag the slider. Changes apply live.

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