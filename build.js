const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const http = require('http');
const handler = require('serve-handler');

// launch static file server
const server = http.createServer((request, response) => {
  return handler(request, response, { public: 'src' });
});

server.listen(5000, async () => {
  // launch headless chrome instance
  const browser = await puppeteer.launch({
    headless: true,
  });

  // open resume
  const page = await browser.newPage();
  await page.goto('http://localhost:5000/resume.html');

  // save page as pdf
  const pdfBuffer = await page.pdf({
    format: 'A4',
    path: 'resume.pdf',
    printBackground: true,
  });

  // cleanup
  await browser.close();
  server.close();
});
