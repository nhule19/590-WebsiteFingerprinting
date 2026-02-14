// Number of sweep counts
// TODO (Exercise 3-1): Choose an appropriate value!
let P = 1000;

// Number of elements in your trace
let K = (5 * 1000) / P;

// Array of length K with your trace's values
let T;

// Value of performance.now() when you started recording your trace
let start;

function record() {
    // Create empty array for saving trace values
    T = new Array(Math.floor(K));

    // Fill array with -1 so we can be sure memory is allocated
    T.fill(-1, 0, T.length);

    // Save start timestamp
    start = performance.now();

    // TODO (Exercise 2-1): Record data for 5 seconds and save values to T.
    const LINE_SIZE = 16;
    let numLines = 10000;

    // const M = new Array(LINE_SIZE * numLines).fill(-1); // buffer

    let traceIndex = 0;
    // let sum = 0;
    while (traceIndex < K) {
        let counter = 0;
        let traceBegin = performance.now();
        // let j = 0;
        do {
            counter++;
            // for (let i = 0; i < numLines; i++) {
            //     // let val = M[i * LINE_SIZE + j * LINE_SIZE];
            //     // sum += val;
            // }
            // j++;
        } while (performance.now() - traceBegin < P);
        T[traceIndex] = counter;
        //console.log(T[traceIndex]);
        traceIndex++;
        // j = 0;
        counter = 0;
    }

    // Once done recording, send result to main thread
    postMessage(JSON.stringify(T));
}

// DO NOT MODIFY BELOW THIS LINE -- PROVIDED BY COURSE STAFF
self.onmessage = (e) => {
    if (e.data.type === "start") {
        setTimeout(record, 0);
    }
};
