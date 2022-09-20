// import modules

import express from 'express'
import { siblings } from './data/sibling-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)

app.use(express.static('public'))

// Mount routes

app.get('/', function(req, res) {
    res.redirect('/home')
})

app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/siblings', function(req, res){
    res.render('siblings/index', {
        siblings: siblings
    })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
    console.log('Listening on port 3000')
})