const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8888;

app.use(cors());

app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
  res.send('Welcome to GameHub API!');
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});


