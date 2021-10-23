const go = new Go()
const {instance: {exports: {add}}} = await WebAssembly.instantiateStreaming(fetch('main.wasm'), go.importObject)

document.body.textContent = `Hello World! addResult: ${add(24, 24)}`
