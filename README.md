# Free Seats

> Project description

## Related Projects

  - https://github.com/freeseats/exzerone-search-bar
  - https://github.com/freeseats/Menu-Related-SideBar
  - https://github.com/freeseats/slhodak-fec
  - https://github.com/freeseats/wfong-service-reservations

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> edit database/config.js file by adding your mysql password

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

> edit database/config.js file by adding your mysql password
to seed database run the following
```
npm run seed
```

to create bundle.js and start the server run the following
```
npm run react-dev
npm start
```

CRUD 
GET - is a http method that is being used to read/retrieve a representation of a resource. Once the http request has been successful, it will receive a response code of 200. If an error occurs, it will respond with a 404(not found) or 400(bad request). The GET request is listening to for a GET request with the API (/:id/photos). This request will get all the photos for a specific restaurant. 

POST - is to create a new source which updates the database and save the new data into the database. If a POST request is successful, it will return a http request code of 201. The POST request with an API of (/:id/photos). This request will store the updated picture that the user have put into the database. 

PUT - is updating a known source in the database. On a successful updating, a http response code of 200. With the API of (/:id/photos), we are updating an existing photo to a specific restaurant photo.

DELETE - is to used to delete a specific item in the database. Once a part of data is deleted, it will respond with a response http code of 404(not found), this will ensure to let the user know that part of the data is gone. With an API of (/:id/photos), it will identify that specific restaurant id and delete that photo. 


