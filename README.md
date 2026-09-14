# YouTube Thumbnail Desaturator

A tiny browser extension that reduces the oversaturated colors in YouTube
thumbnails, using a single CSS filter. No tracking, no permissions beyond
YouTube, no bloat.

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

A single CSS rule targets YouTube's thumbnail image elements and applies
`filter: saturate(0.6)`. That's the entire extension.

## Customizing the saturation level

Edit the value in `content.css`:

```css
img.ytCoreImageContentModeScaleAspectFill {
  filter: saturate(0.6); /* change 0.6 to 0–1 range */
}
```

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