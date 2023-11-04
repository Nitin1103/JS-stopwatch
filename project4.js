// variables

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading zeros

let leadingSec;
let leadingMin;
let leadingHrs;


// variables for setInterval and timer status

let timerInterval;
let timerStatus = 'stopped';


// stopwatch function

function stopwatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    //apending 0s
    if (seconds < 10) {
        leadingSec = '0' + seconds.toString();
    }
    else {
        leadingSec = seconds;
    }

    if (minutes < 10) {
        leadingMin = '0' + minutes.toString();
    }
    else {
        leadingMin = minutes;
    }

    if (hours < 10) {
        leadingHrs = '0' + hours.toString();
    }
    else {
        leadingHrs = hours;
    }
    let displayTimer = document.getElementById('timer').innerText = leadingHrs + ':' + leadingMin + ':' + leadingSec;
}


startStopBtn.addEventListener('click', function () {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopwatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"> </i>';
        timerStatus = 'started';
    }
    else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"> </i>`;
        timerStatus = 'stopped';
    }
});

resetBtn.addEventListener('click', function () {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00";
})