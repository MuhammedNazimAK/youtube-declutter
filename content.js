const DEFAULT_SATURATION = 0.6;
const DEFAULT_HIDE_MORE = false;
const STYLE_ID = "yt-desaturator-style";

function applyStyles(saturation, hideMore) {
  let styleEl = document.getElementById(STYLE_ID);
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = STYLE_ID;
    document.documentElement.appendChild(styleEl);
  }
  styleEl.textContent = `
        img.ytCoreImageContentModeScaleAspectFill {
            filter: saturate(${saturation});
        }
        ytd-guide-section-renderer:has(a[href*="/premium"]) {
            display: ${hideMore ? "none !important" : "block"};
        }
    `;
}

chrome.storage.local.get(["saturation", "hideMoreFromYoutube"], (result) => {
  const saturation = result.saturation ?? DEFAULT_SATURATION;
  const hideMore = result.hideMoreFromYoutube ?? DEFAULT_HIDE_MORE;
  applyStyles(saturation, hideMore);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local") {
    chrome.storage.local.get(
      ["saturation", "hideMoreFromYoutube"],
      (result) => {
        applyStyles(
          result.saturation ?? DEFAULT_SATURATION,
          result.hideMoreFromYoutube ?? DEFAULT_HIDE_MORE,
        );
      },
    );
  }
});
