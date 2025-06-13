const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let totalTime = 25 * 60;
let timerInterval = null;
let isRunning = false;

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(totalTime);
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  timerInterval = setInterval(() => {
    if (totalTime > 0) {
      totalTime--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      isRunning = false;
      alert('Tempo terminado! Faz uma pausa.');
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  totalTime = 25 * 60;
  updateDisplay();
  isRunning = false;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
