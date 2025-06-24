// all Library
require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')
const propertyRoutes = require('./routes/propertyRoutes')

const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: process.env.FRONTEND_API,
    credentials: true
}))

app.use(cookieParser())



// allRoutes
app.use('/user', userRoutes)
app.use('/property', propertyRoutes)






const port = process.env.PORT

// server Listening
app.listen(port, () => {
    console.log('Connected Server')
})
