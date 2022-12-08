const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000

const app = express()

//enable body parsing
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(morgan("combined"));

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(`listening on port ${port}`))



