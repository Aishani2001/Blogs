const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('override')

const articleSchema = require('./models/articleSchema')

mongoose.connect('mongodb+srv://Aishani:l9kWQXf3j7S9l0yg@cluster.gugjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology : true
})

app.set('view-engine', 'ejs')
app.use(express.urlencoded ({ extended : false}))



app.listen(process.env.PORT || 5050)