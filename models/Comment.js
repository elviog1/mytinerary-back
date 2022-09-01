const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    coment:{type: String, required: true},
    user:{type: String, required: true},
    itinerary:{type: String, required: true},
})
const Coment = mongoose.model(
    'coments', 
    schema
    //nombre de la coleccion
    //esquema de datos (tabla)

)

module.exports = Coment