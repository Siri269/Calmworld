  let timeLeft = 0;
let interval = null;
const minInput = document.getElementById('min');
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

function format(t) {
const m = Math.floor(t / 60);
const s = t % 60;
return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function update() {
display.textContent = format(timeLeft);
}

function tick() {
timeLeft--;
update();
if (timeLeft <= 0) {
clearInterval(interval);
interval = null;
startBtn.textContent = 'Start';
}
}

startBtn.addEventListener('click', () => {
if (interval) {
clearInterval(interval);
interval = null;
startBtn.textContent = 'Start';
} else {
if (timeLeft === 0) timeLeft = minInput.value * 60;
interval = setInterval(tick, 1000);
startBtn.textContent = 'Stop';
}
});

resetBtn.addEventListener('click', () => {
clearInterval(interval);
interval = null;
timeLeft = minInput.value * 60;
update();
startBtn.textContent = 'Start';
});

update();
