const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'photosdb',
});

const getAllPhotos = (id, callback) => {
  console.log('db id:', id)
  pool.query(`SELECT * FROM photos WHERE rest_id = ${id}`, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

module.exports = {
  getAllPhotos,
}