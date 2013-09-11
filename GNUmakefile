.DEFAULT_GOAL := all
BEM := ./node_modules/.bin/bem

ifneq (,$(findstring B,$(MAKEFLAGS)))
BEM_FLAGS := --force
endif

%::
	npm install --production
	YENV=production $(BEM) make --force

.PHONY: clean
clean::
	$(BEM) make -m clean
