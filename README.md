# Express API + Mongodb

* example of using `express`
* contains 4 endpoints (routes)
* connection to MongoDB cloud using `mongoose`
* using JWT (Json Web Token) + salting and hashing password
* restrict non-auth access to specific routes (middleware authorizationRequire)
* error handling

>> lessons 165-186 on
https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707662

## How to use my code base

* `git clone https://github.com/aymkin/track-server.git && cd track-server && npm i`
* register https://cloud.mongodb.com/ and create free cluster
* go to cluster page and hit connect https://i.imgur.com/YdjT6MT.png
* select 'Connect your application' and copy the string https://i.imgur.com/XR7o7tX.png
* add to root directory file `mongodbSensitive.js` with content: 
 ```javascript
const mongodbSensitive = {
    uri:
        'mongodb+srv://<your-string-to-mongo-cloud>',
    jwtSecretKey: 'YOUR_RANDOM_JWT_SECRET_KEY'
}

module.exports = mongodbSensitive
```
* run `npm run dev`
* open postman and use following documentation https://documenter.getpostman.com/view/7659156/SWTD9HXj?version=latest