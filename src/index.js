const express = require ('express')
const morgan = require ('morgan')

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))

//Routes

//Static files


// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})