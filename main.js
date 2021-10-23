const worker = new Worker('worker.js', {type: 'module'})

worker.addEventListener('message', event => {
  const [id, error, result] = event.data

  console.log({id, result, error})
})

worker.postMessage([0, 'add', 2, 3])
worker.postMessage([1, 'add', 222, 333])
