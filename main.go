package main

import (
	"syscall/js"
)

func main() {
	self := js.Global().Get("self")
	self.Call("postMessage", 1111)
	self.Set("postMessageToWasm", createPostMessage(self))

	select {}
}

func createPostMessage(self js.Value) js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		self.Call("postMessage", 2222)
		return nil
	})
}
