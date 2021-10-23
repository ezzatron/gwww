main.wasm: main.go
	tinygo build -o main.wasm -target wasm --no-debug ./main.go

wasm_exec.js:
	cp $(shell tinygo env TINYGOROOT)/targets/wasm_exec.js "$@"
