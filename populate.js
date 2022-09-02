require ('dotenv').config()
const db = require('./config/database')
const City = require('./models/City')
const User = require('./models/User')

User.create({
    name: "Elba",
    lastName: "Laso",
    country: "Alagasia",
    photo: "fotolinda.png",
    mail: "lolito@juancito.jas",
    password:"chau123"
})




