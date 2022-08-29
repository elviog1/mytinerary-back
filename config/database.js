const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_LINK,
    {
        useUnifiedTopology: true, //habilita a ongoose a controlar la base de datos de mongo
        useNewUrlParser:true //utiliza el analizador de errore de mongoose en lugar del de mongo
    }
    //primer parametro: link de coneccion
    //segundo parametro: objeto con 2 propiedades en true
)
    .then(()=>console.log('conected to database successfully'))
    .catch(error=>console.log(error))