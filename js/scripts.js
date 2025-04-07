const minutesE1 = document.querySelector("#minutes");
const secondsE1 = document.querySelector("#seconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 60;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  const select = document.getElementById("times");
  minutes = parseInt(select.value); // Atualiza minutos com o valor selecionado

  interval = setInterval(() => {
    if (!isPaused) {
      seconds -= 1;
    }
    if (seconds <= 0) {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        clearInterval(interval); // Para o cronômetro quando o tempo acabar
      }
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
  minutes = 0;
  seconds = 0;

  minutesE1.textContent = "00";
  secondsE1.textContent = "00";

  startBtn.style.display = "block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
