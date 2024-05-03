const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world! Welcome to my Node.js app.');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
