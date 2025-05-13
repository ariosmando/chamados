const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/novo-chamado', (req, res) => {
  const { nome, descricao } = req.query;
  console.log(`Novo chamado: ${nome} - ${descricao}`);
  res.send('Chamado recebido com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
