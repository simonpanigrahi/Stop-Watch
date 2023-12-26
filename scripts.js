let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateStopwatch() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('stopwatch').textContent = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        isRunning = true;
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('stopwatch').textContent = '0:00:00';
});
