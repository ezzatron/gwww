const buffer = []

function onMessageBeforeReady ({data}) {
  buffer.push(data)
}

addEventListener('message', onMessageBeforeReady)

import './wasm_exec.js'

const go = new Go()
const modulePromise = WebAssembly.instantiateStreaming(fetch('main.wasm'), go.importObject)

const {instance} = await modulePromise
go.run(instance)

removeEventListener('message', onMessageBeforeReady)
addEventListener('message', ({data}) => { postMessageToWasm(data) })
while (buffer.length > 0) postMessageToWasm(buffer.shift())
