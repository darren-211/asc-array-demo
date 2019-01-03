// build to 'build/main.wasm'
import 'allocator/tlsf';

export { memory };

export function sum(a: Int32Array): i32 {
    let rtn = 0;
    for (let i = 0, l = a.length; i < l; i++) {
        rtn += a[i];
    }
    return rtn;
}
