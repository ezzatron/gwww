const output = document.getElementById('output')
const worker = new Worker('worker.js', {type: 'module'})

worker.addEventListener('message', ({data}) => {
  output.value += `Received: ${JSON.stringify(data)}\n`
})

let counter = 0

while (true) {
  const data = ++counter

  output.value += `Sending: ${JSON.stringify(data)}\n`
  worker.postMessage(data)

  await new Promise(resolve => setTimeout(resolve, 1000))
}
