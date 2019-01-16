// 1. Requirements
const express = require('express')
const router = express.Router()

const restos = require('../data.js')

// 2. CRUD

// All
router.get('/', (req, res) => {
    res.render('restaurants/index.hbs', {
        data: restos.restaurants
    })
})

// New 
// Renders the form
router.get('/new', (req, res) => {
    res.render('restaurants/new')
})


// Create 
// POSTS the information from the form
router.post('/', (req, res) => {
    console.log('This is posting')
    console.log(req.body.name)
    let restaurant = {
        name: req.body.name,
        type: req.body.type,
        price: req.body.price
    }

    restos.restaurants.push(restaurant)
    console.log(restos.restaurants)
    res.redirect('/restaurants')
})

// Show


// Edit
// Renders the form

// Update
// POSTs the information from the form

// Destroy/Delete





// app.get('/restaurants', (req, res) => {
//     res.send('This is our list of restaurants')
// })

// app.get('/:something', (req, res) => {
//     res.send('404 Error')
// })

// app.get('restaurants/mexican', (req, res) => {
//     res.send('Here are all of the Mexican restos')
// }) 

// app.get('/restaurants/:id', (req, res) => {
//     res.send('This will be the SHOW page for our specific restaurants')
//     const myRestaurant = req.params.id
//     console.log('This is my restaurant', myRestaurant)
// })



// 3. Exports
module.exports = router