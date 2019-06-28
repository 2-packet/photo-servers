DROP KEYSPACE IF EXISTS photosdb;
CREATE KEYSPACE photosdb WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE photosdb;

CREATE TABLE photos (
   rest_id INT,
   rest_name VARCHAR,
   photo_id INT PRIMARY KEY,
   image VARCHAR,
   timestamp VARCHAR,
);
--// you need index so it doesnt down all of the data from the db 
-- its to make the time complexity from on to log n it makes to a binary tree that helps sorts it out 
CREATE INDEX rest_id_idx ON photos(rest_id);
CREATE INDEX rest_name_idx ON photos(rest_name);

COPY photosdb.photos (rest_id, rest_name, photo_id, image, timestamp)
FROM '/Users/kevinle/Desktop/SDC /matthewjdiaz1-photo-service/database/postgres/generateData.csv' WITH HEADER = TRUE;

