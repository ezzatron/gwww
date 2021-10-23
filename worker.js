import './wasm_exec.js'

const go = new Go()

go.importObject.env = {
  'main.postMessage': data => { postMessage(data) },
}

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

const {instance} = await modulePromise
go.run(instance)
