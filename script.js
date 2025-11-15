var h1 = document.querySelector('h1');
  console.log(h1.textContent);
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeLeft % 60;

  timer.innerHTML = '${(minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}';

};

const startTimer = () => {
    interval = setInverval(() => {timeleft--;
      updateTimer();

    if(timeLeft ===0){
      clearInterval(interval);
      alert(time's up!);
      timerLeft = 1500;
      updateTimer()
    }
  },1000);
};

const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
