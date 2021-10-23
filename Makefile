main.wasm: main.go
	tinygo build -o main.wasm -no-debug -target wasm ./main.go

wasm_exec.js:
	cp $(shell tinygo env TINYGOROOT)/targets/wasm_exec.js "$@"

################################################################################

.PHONY: run
run: main.wasm wasm_exec.js
	npx http-server -c-1 .
