package main

import (
	"syscall/js"
)

func main() {
	self := js.Global().Get("self")
	self.Set("postMessageToWasm", createPostMessage(self))

	select {}
}

func createPostMessage(self js.Value) js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		self.Call("postMessage", args[0])

		return nil
	})
}
