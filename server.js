import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

// Todas las rutas devolvera el HTML
app.get('/*', (req, res) => {
  // render es una funcion a la que le podemos pasar jsx y lo renderizara como html
  const reactApp = renderToString(<h1>Hello from the server side</h1>);

  return res.send(`
    <html>
      <body>
        <div id="root">${reactApp}</div>
      </body>
    </html>
    `);
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
