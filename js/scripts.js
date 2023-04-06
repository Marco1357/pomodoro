const minutesE1 = document.querySelector("#minutes");
const secondsE1 = document.querySelector("#seconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

var select = document.querySelector("#times");

let interval;
let minutes = 10;
let seconds = 60;
let isPaused = false;
("");
//var text = 10;

/*for (var i = 0; i < select.options.length; i++) {
  if (select.options[i].text === text) {
    select.selectedIndex = i;
    break;
  }
}*/

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      seconds -= 1;
    }
    if (seconds === 00) {
      minutes--;
      seconds = 60;
    }

    minutesE1.textContent = formatTime(minutes);
    secondsE1.textContent = formatTime(seconds);
  }, 1000);

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
}

function resetTimer() {
  clearInterval(interval);
  minutes = 10;
  seconds = 60;

  minutesE1.textContent = "00";
  secondsE1.textContent = "00";

  startBtn.style.display = "block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMinutes(time) {
  return time < 100 ? `${time}`.padStart(2, "0") : time;
}
