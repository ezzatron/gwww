const worker = new Worker('worker.js', {type: 'module'})

worker.addEventListener('message', event => {
  console.log(event.data)
})

worker.postMessage([0, 'add', 2, 3])
worker.postMessage([1, 'add', 222, 333])
