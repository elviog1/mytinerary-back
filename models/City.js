const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    image:{type: String, required: true},
    country:{type: String, required: true},
    population:{type: Number, required: true, min: 1000, max: 100000000},
    fundation:{type: Number, required: true},
})
const City = mongoose.model(
    'cities', 
    schema
    //nombre de la coleccion
    //esquema de datos (tabla)

)

module.exports = City