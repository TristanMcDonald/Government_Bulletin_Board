//Setting up the schema for storage of users
//https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/
const mongoose = require('mongoose')

const userschema = mongoose.Schema(
    {
        username: {type: String, required:true},
        password: {type: String, required:true}
    }
)

module.exports = mongoose.model('User', userschema)