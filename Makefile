main.wasm: main.go
	tinygo build -o main.wasm -target wasm --no-debug ./main.go
