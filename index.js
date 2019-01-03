import * as loader from './loader/index.js';

(async () => {
    console.time('Wasm module inited in');
    const Module = window['Module'] = await loader.instantiateStreaming(fetch('build/main.wasm'));
    console.timeEnd('Wasm module inited in');

    const arr = new Int32Array(Array(1 << 18).fill(1));
    console.log('The original JS Array:', arr);
    const arrPtr = Module.newArray(arr);  // aborted here
    console.log('Allocated wasm address:', arrPtr);
    const s = Module.sum(arrPtr);
    console.log('The sum of the array: ', s);
    // Module.freeArray(arrPtr);
})();
