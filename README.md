# Assignment-1_FSD

**Question**: 

Create a program that performs a CPU-intensive loop for several seconds. Run a setTimeout() alongside it. 

Explain why the timer does not execute exactly after its specified delay.

## Output

```text
Program started.
Starting CPU-intensive loop...
CPU-intensive loop finished.
Program ended.
timer
```

## Explanation

The program uses `setTimeout()` with a delay of 1 second. Normally, we might expect the timer callback to run after 1 second.

However, JavaScript runs on a **single thread**. The `while` loop keeps the JavaScript thread busy for approximately 5 seconds. Because the thread is busy executing the loop, it cannot execute the timer callback when the 1-second delay expires.

After 1 second, the timer becomes ready to execute, but its callback has to wait in the event queue until the current code finishes.

Once the 5-second loop ends, the JavaScript thread becomes free and the `setTimeout()` callback finally executes.

Therefore, `setTimeout()` guarantees a **minimum delay**, not an exact execution time. The timer does not execute exactly after 1 second because the CPU-intensive loop is blocking the JavaScript thread.
