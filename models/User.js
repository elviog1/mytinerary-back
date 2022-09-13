const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name:{type: String, required: true},
    mail:{type: String, required: true},
    password:[{type: String, required: true}],
    photo:{type: String, required: true},
    country:{type: String, required: true},
    role: {type: String, required: true},
    from: [{type: String, required: true}],
    logged: {type: Boolean, required: true},//por defecto false. cuando el usuario se logea => true
    verified: {type: Boolean, required: true},//por defecto false. cuando el usuario verifica su cuenta =>true
    code:{type: String, required: true},
})
const User = mongoose.model(
    'users', 
    schema
    //nombre de la coleccion
    //esquema de datos (tabla)

)

module.exports = User