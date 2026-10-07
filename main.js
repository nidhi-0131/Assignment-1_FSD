// CPU-Intensive Loop 

console.log("Program started.");

setTimeout(() => {
    console.log("timer");
}, 1000);

console.log("Starting CPU-intensive loop...");

const startTime = Date.now();

while (Date.now() - startTime < 5000) {
    // this loop will run for approximately 5 seconds, keeping the CPU busy and blocking the event loop
}

console.log("CPU-intensive loop finished.");
console.log("Program ended.");