const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URL = process.env.MONGODB_URL;

// connecting to mongodb
function connectToMongoDB() {
    mongoose.connect(MONGODB_URL);
    mongoose.connection.on('connected', () => {
        console.log('mongoDB connected successfully')
    })
    mongoose.connection.on('error', (err) => {
        console.log('Sorry there was an error connecting to mongoDB', err)
    })
}

module.exports = { connectToMongoDB }