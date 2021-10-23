main.wasm: main.go
	tinygo build -o main.wasm -no-debug -target wasm ./main.go

wasm_exec.js:
	cp $(shell tinygo env TINYGOROOT)/targets/wasm_exec.js "$@"
