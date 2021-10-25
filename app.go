package main

import (
	"syscall/js"
)

func run(inbox chan js.Value, outbox chan js.Value) {
	for {
		// echo messages back to the sender
		outbox <- <-inbox
	}
}
