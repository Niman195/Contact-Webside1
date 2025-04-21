// function to ajust the brightness

const brightnessSlider = document.getElementById("brightnessSlider");
const brightnessOverlay = document.getElementById("brightnessOverlay");

function adjustBrightness() {
    const sliderValue = brightnessSlider.value;
    const invertedOpacity = 1 - sliderValue;
    brightnessOverlay.style.opacity = invertedOpacity;
}

brightnessSlider.addEventListener("input", adjustBrightness);

// function to get a color from the user and change the color from the webtitle

function updateTitleColor() {
    const colorInput = document.getElementById("titleColorInput").value;
    localStorage.setItem("titleColor", colorInput); 
    applyTitleColor(); 
}

function applyTitleColor() {
    const savedColor = localStorage.getItem("titleColor");
    if (savedColor) {
        const title = document.querySelector(".headerTitle h1");
        if (title) {
            title.style.color = savedColor;
        }
    }
}

applyTitleColor();