const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    user:{type: String, required: true},
    city:{type: String, required: true},
    price:{type: Number, required: true},
    likes:{type: Array, required: true},
    tags:{type: Array, required: true},
    duration:{type: Number, required: true},
})
const Itinerary = mongoose.model(
    'itineraries', 
    schema
    //nombre de la coleccion
    //esquema de datos (tabla)

)

module.exports = Itinerary