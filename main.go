package main

import (
	"syscall/js"
)

func main() {
	messages := make(chan js.Value)

	self := js.Global().Get("self")
	self.Set("postMessageToWasm", createPostMessage(messages))

	for {
		// echo messages back to the sender
		self.Call("postMessage", <-messages)
	}
}

func createPostMessage(messages chan js.Value) js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		messages <- args[0]

		return nil
	})
}
