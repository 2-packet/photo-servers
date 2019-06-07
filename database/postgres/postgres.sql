
DROP DATABASE IF EXISTS photosdb;
CREATE DATABASE photosdb;
\c photosdb;

DROP TABLE IF EXISTS photos;
CREATE TABLE photos (
  rest_id int NOT NULL,
  photo_id SERIAL int NOT NULL,
  image varchar(255)  NOT NULL,
  timestamp date NOT NULL,
  
  PRIMARY KEY (rest_id)
)