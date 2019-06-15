
DROP DATABASE IF EXISTS photosdb;
CREATE DATABASE photosdb;
\c photosdb;

DROP TABLE IF EXISTS photos;
CREATE TABLE photos (
  rest_id int NOT NULL,
  rest_name varchar NOT NULL,
  photo_id SERIAL PRIMARY KEY,
  image varchar(255)  NOT NULL,
  timestamp date NOT NULL
);

