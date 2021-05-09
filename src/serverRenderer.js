import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './components/App/';


function renderHTML(html) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" type="image/ico" href="./src/assets/favicon/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500;800&display=swap"
        rel="stylesheet"
      />
      <title>Movie</title>
    </head>
  
    <body>
    <div id="root">${html}</div>
  
      <script>
        if (!crossOriginIsolated) SharedArrayBuffer = ArrayBuffer;
      </script>
    </body>
  </html>
  
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};

    const root = (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
      />
    );

    const htmlString = renderToString(root);

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    res.send(renderHTML(htmlString));
  };
}
