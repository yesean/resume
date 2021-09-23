.PHONY: generate full clean
.DEFAULT_GOAL := all

resume.pdf: index.html resume.css
	wkhtmltopdf --page-size a5 --enable-local-file-access index.html resume.pdf

searchable: resume.pdf
	ocrmypdf --output-type pdf --skip-text resume.pdf resume.pdf

generate: searchable

all: clean generate
	@xdg-open resume.pdf || open resume.pdf

clean:
	rm -rf *.pdf
