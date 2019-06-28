require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getAllPhotos } = require('../database/postgres/index.js');
const port = 3060;
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './../client/public')));

app.get('/restaurants/:id/photos', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/public/index.html'));
});

app.get('/api/restaurants/:id/photos', (req, res) => {
  console.log('id :', req.params.id)
  getAllPhotos(req.params.id, (err, result) => {
    if (err) {
      console.log('fail');
      res.status(404).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  });
});
app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports.app = app;
