package main

// removing the main function currently causes an error like:
//   WebAssembly.instantiate(): Import #1 module="env" function="main.main" error: function import requires a callable
func main() {}

//export add
func add(x int, y int) int {
	return x + y
}
