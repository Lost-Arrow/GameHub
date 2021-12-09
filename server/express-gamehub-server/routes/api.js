const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/snake', (req, response) => {
  url = "mongodb://localhost:27017/";
  MongoClient.connect(url, { useUnifiedTopology: true } , (err, db) => {
    if (err)
      throw err;
    
    console.log('Connected to MongoDB!');

    database = db.db('snake');
    snakeHighScores = database.collection('snakeHighScores');

    snakeHighScores.find().sort({ score: -1, name: 1 }).limit(5).toArray((err, res) => {
      if (err)
        throw err;
      
      console.log(res);
      response.json(res);
    });
  })
});

router.post('/snake', jsonParser, (req, response) => {
  const data = {
    name: req.body.name,
    score: req.body.score
  };

  console.log(data);

  url = "mongodb://localhost:27017/";
  MongoClient.connect(url, { useUnifiedTopology: true } , (err, db) => {
    if (err)
      throw err;
    
    console.log('Connected to MongoDB!');

    database = db.db('snake');
    snakeHighScores = database.collection('snakeHighScores');

    snakeHighScores.insertOne(data, (err, res) => {
      if (err)
        throw err;
      console.log('Added one document!');
      db.close();
    });
  })
});

module.exports = router;
