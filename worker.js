import './wasm_exec.js'

const go = new self.Go()
const modulePromise = WebAssembly.instantiateStreaming(fetch('main.wasm'), go.importObject)

addEventListener('message', async event => {
  try {
    const {instance: {exports}} = await modulePromise
    const [id, name, ...args] = event.data

    postMessage([id,, exports[name](...args)])
  } catch (error) {
    postMessage([id, error])
  }
})
