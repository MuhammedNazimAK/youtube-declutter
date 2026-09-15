const DEFAULT_SATURATION = 0.6;
const STYLE_ID = "yt-desaturator-style";

function applySaturation (value) {
    let styleEl = document.getElementById(STYLE_ID);
    if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = STYLE_ID;
        document.documentElement.appendChild(styleEl);
    }
    styleEl.textContent = `
        img.ytCoreImageContentModeScaleAspectFill {
            filter: saturate(${value});
        }
    `;
}

chrome.storage.local.get(["saturation"], (result) => {
    const value = result.saturation ?? DEFAULT_SATURATION;
    applySaturation(value);
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.saturation) {
        applySaturation(changes.saturation.newValue);
    }
});