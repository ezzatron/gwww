package main

import (
	"syscall/js"
)

func main() {
	inbox := make(chan js.Value)
	outbox := make(chan js.Value)

	self := js.Global().Get("self")
	self.Set("postMessageToWasm", createPostMessage(inbox))

	go run(inbox, outbox)

	for {
		self.Call("postMessage", <-outbox)
	}
}

func createPostMessage(inbox chan js.Value) js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		inbox <- args[0]

		return nil
	})
}

func run(inbox chan js.Value, outbox chan js.Value) {
	for {
		// echo messages back to the sender
		outbox <- <-inbox
	}
}
