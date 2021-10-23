import './wasm_exec.js'

const go = new Go()
const modulePromise = WebAssembly.instantiateStreaming(fetch('main.wasm'), go.importObject)

const {instance} = await modulePromise
go.run(instance)

addEventListener('message', ({data}) => { self.dispatch(data) })
postMessage('__READY')
