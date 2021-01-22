// let sNum = 0;
// let startingTime = new Date();
// let time = startingTime.toLocaleTimeString()
// // time = 0;
// console.log(time)
// setInterval(() => {
//     //console.log(sNum++ )
// }, 1000);

// function stopWatch() {
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     document.querySelector('.watch').textContent = time;
// }
// stopWatch()
// const createClock = setInterval(stopWatch, 1000)

let secondCount = 0;
let stopWatch;
const displayPara = document.querySelector('.watch');

function displayCount() {
    let hours = Math.floor(secondCount/3600)
    let minutes = Math.floor((secondCount % 3600)/60)
    let seconds = Math.floor(secondCount % 60)

    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

    secondCount++;
}
 // Store references to the buttons in constants
 const startBtn = document.querySelector('.start');
 const stopBtn = document.querySelector('.stop');
 const resetBtn = document.querySelector('.reset');

 startBtn.addEventListener('click', () => {
    stopWatch = setInterval(displayCount, 1000);
    startBtn.disabled = true;
  });

  stopBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
  });

  resetBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
    secondCount = 0;
    displayCount();
  });

  displayCount();