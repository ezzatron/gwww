const worker = new Worker('worker.js', {type: 'module'})

worker.addEventListener('message', ({data}) => { console.log(data) })

let counter = 0

while (true) {
  worker.postMessage(++counter)
  await new Promise(resolve => setTimeout(resolve, 1000))
}
