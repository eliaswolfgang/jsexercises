// Create a stopwatch object with start and stop methods as prototypes.
// This code is not advisable!!!
// Premature optimization is the root of all evils...
console.log(`Use sw.start(), sw.stop(), and sw.reset() to run a basic stopwatch created using a factory function and prototypes.`)

function Stopwatch() {
    this.startTime = null;
    this.endTime = null;
    this.duration = 0;
    this.running = false
}

Stopwatch.prototype.start = () => {
    if (running)
        throw new Error('Stopwatch already started.');
    running = true;
    startTime = new Date();
    console.log('Stopwatch started!')
}

Stopwatch.prototype.stop = () => {
    if (!running)
        throw new Error('Stopwatch already stopped. Type sw.reset() to reset.');
    running = false;
    endTime = new Date();
    duration = (endTime.getTime() - startTime.getTime()) / 1000;
    console.log(`Duration: ${duration}`)
}

Stopwatch.prototype.reset = () => {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
    console.log('Stopwatch reset!')
}

let sw = new Stopwatch();