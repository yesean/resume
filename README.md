# Sean Ye's Resume

This is my up to date resume written in a fun web stack. I've used latex in the
past, but I'm a front end dev, so why use something sucky for styling when I
could use HTML/CSS/JS instead!

## Overview

The basic markup template is in `src/resume.html`. The styling and alignment is
all in `src/resume.css`. The actual resume content is in `src/data.js` and
there's a script `src/resume.js` that adds the content to the HTML template.

## Development

Just run `yarn start` and watch your changes appear in the browser! This starts
a live server that watches the important files, reloading the browser on any
change.

## Building

When you're done, run `yarn build` and a new `resume.pdf` will be created! We
use [puppeteer](https://pptr.dev/) to view the page in a browser and convert it
to a pdf. See [`build.js`](https://github.com/yesean/resume/blob/main/build.js)
for more details.
