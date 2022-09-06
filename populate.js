require ('dotenv').config()
const db = require('./config/database')
const City = require('./models/City')

City.create({
    name: "Firulandia",
    image: "/img/Tokyo.jpg",
    country: "Japan",
    population: 13960000,
    fundation: 1457
})



