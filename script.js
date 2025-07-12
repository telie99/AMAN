function joinTelegram() {
    window.open("https://t.me/+YoJXgetBnlRmNWM1", "_blank");
}

function playFree() {
    alert("Redirecting to play for free!");
}

const targetCount = 21852; // Target subscriber count
const duration = 3000; // Duration of the counting effect in milliseconds (e.g., 3 seconds)
const displayElement = document.getElementById('subscriber-count');

let startTimestamp = null;

function countUp(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = timestamp - startTimestamp;
    const currentCount = Math.min(Math.floor((progress / duration) * targetCount), targetCount);

    // Format the count with a comma for thousands and display it
    displayElement.textContent = `${currentCount.toLocaleString()} Subscribers`;

    if (currentCount < targetCount) {
        requestAnimationFrame(countUp);
    }
}

// Start the animation
requestAnimationFrame(countUp);