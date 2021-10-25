GO_FILES := $(wildcard *.go)

main.wasm: $(GO_FILES)
	tinygo build -o main.wasm -no-debug -target wasm .

wasm_exec.js:
	cp $(shell tinygo env TINYGOROOT)/targets/wasm_exec.js "$@"

################################################################################

.PHONY: run
run: main.wasm wasm_exec.js
	npx http-server -c-1 .
