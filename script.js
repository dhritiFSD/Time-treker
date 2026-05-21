// script.js

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const time = document.getElementById("time");

const status = document.getElementById("status");

const startBtn = document.getElementById("startBtn");

const stopBtn = document.getElementById("stopBtn");

const resetBtn = document.getElementById("resetBtn");

function updateTime(){

  let h =
    hours < 10 ? "0" + hours : hours;

  let m =
    minutes < 10 ? "0" + minutes : minutes;

  let s =
    seconds < 10 ? "0" + seconds : seconds;

  time.innerHTML = `${h} : ${m} : ${s}`;
}

startBtn.addEventListener("click", () => {

  if(timer !== null){
    return;
  }

  status.innerHTML = "Timer Running...";

  timer = setInterval(() => {

    seconds++;

    if(seconds >= 60){
      seconds = 0;
      minutes++;
    }

    if(minutes >= 60){
      minutes = 0;
      hours++;
    }

    updateTime();

  },1000);

});

stopBtn.addEventListener("click", () => {

  clearInterval(timer);

  timer = null;

  status.innerHTML = "Timer Stopped";
});

resetBtn.addEventListener("click", () => {

  clearInterval(timer);

  timer = null;

  seconds = 0;
  minutes = 0;
  hours = 0;

  updateTime();

  status.innerHTML = "Timer Reset";
});