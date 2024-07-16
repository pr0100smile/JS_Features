const img = document.getElementById('cookie');
const span = document.getElementById('clicker__counter');
let clicks = 0;
let startTime = new Date().getTime();

img.onclick = () => {
    clicks++;
    let currentTime = new Date().getTime();
    let elapsedTime = (currentTime - startTime) / 1000;
    let clicksPerSecond = (clicks / elapsedTime).toFixed(2);

    if (img.width > 200) {
        img.width /= 1.1;
        img.height /= 1.1;
    } else {
        img.width *= 1.1;
        img.height *= 1.1;
    }

    span.textContent = parseInt(span.textContent) + 1 + " (Скорость клика: " + clicksPerSecond + " кликов/с)";
};