const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const Article = require('./models/articleSchema')

const route = require('./routes/articleRoutes')

app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(express.urlencoded ({ extended : false}))

mongoose.connect('mongodb+srv://Aishani:l9kWQXf3j7S9l0yg@cluster.gugjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true
}).then(() => {
    console.log("database connected");
  }).catch((err) => {
    console.log(`No connection: ${err}`);
});



app.get('/', async(req,res) =>{
    const articles = await Article.find().sort({ date : 'desc'})
    res.render('articles/landing', {articles : articles})
})

app.use('/articles',route) 
app.listen(process.env.PORT || 3000)