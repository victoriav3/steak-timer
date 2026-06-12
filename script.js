let countdown;
let totalSeconds = 0;
let timeLeft = 0;
let flipped = false;

// 🔊 sound
const alarm = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
const flipBeep = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");

function goToSteak(name, seconds) {
  totalSeconds = seconds;
  timeLeft = seconds;
  flipped = false;

  document.getElementById("home-screen").classList.remove("active");
  document.getElementById("steak-screen").classList.add("active");

  document.getElementById("doneness-title").textContent = name;
  document.getElementById("message").textContent = "";

  startTimer();
}

function goHome() {
  clearInterval(countdown);

  document.getElementById("steak-screen").classList.remove("active");
  document.getElementById("home-screen").classList.add("active");

  document.getElementById("timer").textContent = "00:00";
  document.getElementById("progress-bar").style.width = "0%";
  document.getElementById("message").textContent = "";
}

function startTimer() {
  clearInterval(countdown);

  updateDisplay();
  updateProgress();

  countdown = setInterval(() => {
    timeLeft--;

    updateDisplay();
    updateProgress();

    // 🔪 flip moment
    if (!flipped && timeLeft <= totalSeconds / 2) {
      flipped = true;

      const msg = document.getElementById("message");
      msg.textContent = "🔪 Flip the steak!";

      // 🔊 beep sound
      flipBeep.play();

      // ⏱️ remove message after 5 seconds
      setTimeout(() => {
        msg.textContent = "";
      }, 5000);
    }

    // 🥩 finished
    if (timeLeft <= 0) {
      clearInterval(countdown);

      document.getElementById("timer").textContent = "READY 🥩";
      document.getElementById("progress-bar").style.width = "100%";
      document.getElementById("message").textContent = "";

      alarm.play();
    }

  }, 1000);
}

function updateDisplay() {
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  document.getElementById("timer").textContent =
    `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateProgress() {
  const percent = ((totalSeconds - timeLeft) / totalSeconds) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
}