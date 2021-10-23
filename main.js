const go = new Go()
const {instance: {exports: {add}}} = await WebAssembly.instantiateStreaming(fetch('main.wasm'), go.importObject)

console.log(add(2, 3), add(222, 333))
