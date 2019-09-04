const express = require('express');
const port = 3050;
const { getAllPhotos } = require('../database/postgres/index.js');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get('/api/restaurants/:id/photos', (req, res) => {
  const { id } = req.params;
  console.log('body req: ', req)
  getAllPhotos(id, (results) => {
    res.status(200);
    res.send(results);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports.app = app;
