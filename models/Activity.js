const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    photo:{type: String, required: true},
    itinerary:{type: String, required: true},
})
const Activity = mongoose.model(
    'activities', 
    schema
    //nombre de la coleccion
    //esquema de datos (tabla)

)

module.exports = Activity