const buffer = []

addEventListener('message', ({data}) => {
  if (typeof postMessageToWasm === 'function') {
    postMessageToWasm(data)
  } else {
    buffer.push(data)
  }
})

import './wasm_exec.js'

const go = new Go()
const modulePromise = WebAssembly.instantiateStreaming(fetch('main.wasm'), go.importObject)

const {instance} = await modulePromise
go.run(instance)

while (buffer.length) postMessageToWasm(buffer.shift())
