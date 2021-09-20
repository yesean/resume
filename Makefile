.PHONY: generate full clean
.DEFAULT_GOAL := all

resume.pdf: resume.html resume.css
	wkhtmltopdf --page-size a5 --enable-local-file-access resume.html resume.pdf

searchable: resume.pdf
	ocrmypdf --skip-text resume.pdf resume.pdf

generate: searchable

all: clean generate
	xdg-open resume.pdf

clean:
	rm -rf *.pdf
