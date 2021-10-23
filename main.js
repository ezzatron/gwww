const worker = new Worker('worker.js', {type: 'module'})

worker.addEventListener('message', ({data}) => {
  if (data === '__READY') {
    worker.postMessage(1234)
  } else {
    console.log(data)
  }
})
