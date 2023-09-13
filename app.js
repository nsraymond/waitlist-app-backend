const express = require("express");
const cors = require('cors')
require('dotenv').config()
const usersRouter = require('./routes/users.routers')
const { connectToMongoDB } = require('./db')

const app = express();

// connecting to mongoDB
connectToMongoDB()

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())


app.use('/users', usersRouter)


app.listen(PORT, () => {
    console.log(`server is running on: ${PORT}`);
});
