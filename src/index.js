const express = require ('express')
const morgan = require ('morgan')

const app = express()

//Settings
app.set('port', process.env.PORT || 1234)

//Middlewares
app.use(morgan('dev'))

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, FETCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes
app.use(require('./routes/clima.route'))

//Static files


// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})