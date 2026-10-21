// Scroll the activity cards using the Previous and Next buttons.
const activitySlider = document.getElementById("activitySlider");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

if (activitySlider && prevButton && nextButton) {
    const getScrollAmount = () => {
        const card = activitySlider.querySelector(".activity-card");
        if (!card) return 320;

        const sliderStyle = window.getComputedStyle(activitySlider);
        const gap = parseFloat(sliderStyle.columnGap || sliderStyle.gap) || 0;
        return card.getBoundingClientRect().width + gap;
    };

    nextButton.addEventListener("click", () => {
        activitySlider.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });
    });

    prevButton.addEventListener("click", () => {
        activitySlider.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });
    });
}

// Show a helpful message when an activity image file is missing.
document.querySelectorAll(".activity-card img").forEach((img) => {
    img.addEventListener("error", () => {
        img.alt = "Image not found: " + img.getAttribute("src");
        img.style.border = "1px dashed #ff5577";
        img.title = "Check that the image is in the correct folder and filename.";
    });
});
