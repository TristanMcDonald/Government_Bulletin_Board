//Setting up the schema for storage of posts from users
//https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/
const mongoose = require('mongoose')

const postschema = mongoose.Schema(
    {
        subject: {type: String, required:true},
        description: {type: String, required:true}
    }
)

module.exports = mongoose.model('post', postschema)