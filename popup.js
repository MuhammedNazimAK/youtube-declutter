const DEFAULT_SATURATION = 0.6;
const DEFAULT_HIDE_MORE = false;

const slider = document.getElementById("slider");
const valueLable = document.getElementById("value");
const ytToggle = document.getElementById("yt-toggle");

chrome.storage.local.get(["saturation", "hideMoreFromYoutube"], (result) => {
  const value = result.saturation ?? DEFAULT_SATURATION;
  slider.value = value;
  valueLable.textContent = value;

  ytToggle.checked = result.hideMoreFromYoutube ?? DEFAULT_HIDE_MORE;
});

slider.addEventListener("input", () => {
  const value = parseFloat(slider.value);
  valueLable.textContent = value;
  chrome.storage.local.set({ saturation: value });
});
ytToggle.addEventListener("change", () => {
  chrome.storage.local.set({ hideMoreFromYoutube: ytToggle.checked });
});
