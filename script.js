window.onload = function () {
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const milliseconds = document.getElementById("milliseconds");

  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  const resetBtn = document.getElementById("reset-btn");

  let minutesSet = 0o0;
  let secondsSet = 0o0;
  let millisecondsSet = 0o0;
  let Interval;

  startBtn.onclick = function () {
    Interval = setInterval(startTimer, 10);
    pulseEffect();
  };
  stopBtn.onclick = function () {
    clearInterval(Interval);

    const lap = document.getElementById("laps");
    const li = document.createElement("li");
    li.innerHTML = `lap: <span>${minutes.innerHTML}:${seconds.innerHTML}:${milliseconds.innerHTML}<span>`;

    lap.appendChild(li);
    pulseEffect();
  };

  resetBtn.onclick = function () {
    clearInterval(Interval);
    minutesSet = "00";
    secondsSet = "00";
    millisecondsSet = "00";
    minutes.innerHTML = minutesSet;
    seconds.innerHTML = secondsSet;
    milliseconds.innerHTML = millisecondsSet;

    document.getElementById("laps").innerHTML = "";
  };

  function startTimer() {
    millisecondsSet++;
    if (millisecondsSet < 9) {
      milliseconds.innerHTML = "0" + millisecondsSet;
    }
    if (millisecondsSet > 9) milliseconds.innerHTML = millisecondsSet;

    if (millisecondsSet > 99) {
      secondsSet++;
      seconds.innerHTML = "0" + secondsSet;
      millisecondsSet = 0;
      milliseconds.innerHTML = "0" + 0;
    }
    if (secondsSet > 9) {
      seconds.innerHTML = secondsSet;
    }
    if (secondsSet == 60) {
      minutesSet++;
      minutes.innerHTML = "0" + minutesSet;
      secondsSet = 0;
    }
    if (minutesSet > 9) {
      minutes.innerHTML = minutesSet;
    }
  }

  function pulseEffect() {
    const lapTime = document.querySelector(".lap-timer");
    lapTime.classList.toggle("pulse-effect");
  }
};
