// Stopwatch exercise
let t = document.getElementById('timeDisplay');

function Stopwatch() {
    time = 0;
    let interval;
    this.start = (e) => {
        e.preventDefault();
        if (time > 0) {
            return;
        }
        interval = setInterval(() => {
            time += 1;
            t.innerHTML = `${time}`
        }, 1000);
    };
    this.stop = (e) => {
        e.preventDefault();
        clearInterval(interval);
    };
    this.reset = (e) => {
        e.preventDefault();
        time = 0;
        t.innerHTML = `${time}`
    }
};

const sw = new Stopwatch;

document.getElementById('start').addEventListener('click', sw.start);
document.getElementById('stop').addEventListener('click', sw.stop);
document.getElementById('reset').addEventListener('click', sw.reset);