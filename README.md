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


### API  
 ##### GET 
 Endpoint: ```/api/restaurant/:id/photos```
 
 - http request has been successful, it will receive a response code of 200. If an error occurs, it will respond with a 404(not found) or 400(bad request)
-  This request will get all the photos for a specific restaurant
```
 {
    id: 1, 
    restaurant 'Rempel Group', 
    url: 'https://resizer.otstatic.com/v2/photos/large/24947294.jpg', 
    timestamp: '1977-02-12',
    dislike: 0
 }
```


##### POST 
 Endpoint: ```/api/restaurant/:id/photos```
 - Create a new source which updates the database and save the new data into the database. If a POST request is successful, it will return a http request code of 201. 
 - This request will store the updated picture that the user have put into the database.
 
```
{
    id: 9,
    resturant: Taco Bowls,
    url: 'https://resizer.otstatic.com/v2/photos/large/24947294.jpg',
    timestamp: '2019-08-08',
    dislike: 0
}

```

##### PUT
 Endpoint: ```/api/restaurant/:id/photos```
 - is updating a known source in the database. On a successful updating, a http response code of 200. 
 - we are updating an existing photo to a specific restaurant photo.
 
```
{
    id: 9
    restaurant: Taco Bowls,
    url: 'https://resizer.otstatic.com/v2/photos/large/29999.jpg',
    timestamp: '2018-03-01',
    dislike: 1
}
```
 


##### Delete
 Endpoint: ```/api/restaurant/:id/photos```
- is to used to delete a specific item in the database.
- The respond code is with a response http code of 404(not found)

