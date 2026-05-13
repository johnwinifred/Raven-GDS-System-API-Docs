
const postmanToOpenApi = require('postman-to-openapi')

const postmanCollection = './postman/GDS Bookings API Collection.postman_collection.json'
const outputFile = './api/collection.yml'

postmanToOpenApi(postmanCollection, outputFile, {
    defaultTag: 'General'
})
.then((result) => {
    console.log('OpenAPI spec generated!')
    console.log(result)
})
.catch((err) => {
    console.error(err)
})