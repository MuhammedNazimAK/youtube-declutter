const DEFAULT_SATURATION = 0.6;
const slider = document.getElementById("slider");
const valueLable = document.getElementById("value");

chrome.storage.local.get(["saturation"], (result) => {
    const value = result.saturation ?? DEFAULT_SATURATION;
    slider.value = value;
    valueLable.textContent = value;
});

slider.addEventListener("input", () => {
    const value = parseFloat(slider.value);
    valueLable.textContent = value;
    chrome.storage.local.set({ saturation: value });
});