const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const url = 'https://newsapi.org/v2/everything?' +
              'q=Panda&' +
              'from=2023-09-19&' +
              'sortBy=popularity&' +
              'apiKey=2c3ed98d52554e0997072b52dd2fba87';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.json(data); // Envia a resposta JSON da API de notícias para o cliente
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar notícias' });
    });
});

app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
