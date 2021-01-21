let sNum = 0;
let startingTime = new Date();
let time = startingTime.toLocaleTimeString()
console.log(time)
setInterval(() => {
    //console.log(sNum++ )
}, 1000);

function stopWatch() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector('.watch').textContent = time;
}
stopWatch()
const createClock = setInterval(stopWatch, 1000)