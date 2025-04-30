const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from your Node.js app in Codespaces!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});