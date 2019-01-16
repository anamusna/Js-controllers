// 1. REQUIREMENTS
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const hbs = require('hbs')

// const restos = require('./data')


// 2. MIDDLEWARE
//morgan
app.use(logger('dev'))
//body-parser
app.use(bodyParser.urlencoded({
    extended: true
}))
//handlebars
app.set('view engine', 'hbs')



//3. Routes and controllers 
const restaurantController = require('./controllers/restaurants')
app.use('/restaurants', restaurantController)

// root
app.get('/', (req, res) => {
    res.render('layout.hbs')
})

//4. Listen
app.listen(3000, () => {
    console.log('app running on port 3000')
})