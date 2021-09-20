# Sean Ye's Resume

## Requirements

- [`node`](https://nodejs.org/en/)/[`npm`](https://www.npmjs.com/)
- [`wkhtmltopdf`](https://wkhtmltopdf.org/)
- [`ocrmypdf`](https://github.com/jbarlow83/OCRmyPDF)

This is my personal resume written in HTML/CSS and probably with JS in the
future.

## Development

For development, I use a live server that watches my files and serves/updates
them in the browser as I'm editing to see my resume in real-time. To get
started, run

```sh
npm install
```

to install the dependencies for development and run

```sh
npm run dev
```

to start the server. As you edit and save changes in the HTML and CSS files, the
files should update in the browser as well.

## Building

For generating a PDF file of the resume, it's a two step process. First,
`wkhtmltopdf` is used to render the HTML file into PDF. Then `ocrmypdf` is used
to make the pdf searchable (useful for resume ATFs). This build process has been
abstracted with a `Makefile`, so simply run

```sh
make generate
```

to generate a `resume.pdf` and if you want to do a clean build and open it
after, you can run

```sh
make all
```

or just `make`.
