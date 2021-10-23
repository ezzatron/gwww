const worker = new Worker('worker.js', {type: 'module'})

worker.addEventListener('message', ({data}) => { console.log(data) })
worker.postMessage(1234)
