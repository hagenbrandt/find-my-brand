const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
const apiPort = 5000
app.use(morgan('tiny'))

const MONGODB_URI = process.env.ATLAS_URI
mongoose.connect(MONGODB_URI || 'mongodb://localhost/my_brands', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
})

const Schema = mongoose.Schema
const PostCompanySchema = new Schema({
    id: Number,
    name: String,
    url: String,
    date: {
        type: String,
        default: Date.now()
    }
})

const CompanyPost = mongoose.model('CompanyPost', PostCompanySchema)

app.get('/api', (req, res) => {
    CompanyPost.find({})
        .then((data) => {
            console.log(data);
            res.json(data)
            res.send(data)
        })
        .catch((error) => {
            console.error(error)
        })
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))