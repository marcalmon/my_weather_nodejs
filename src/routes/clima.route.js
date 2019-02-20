const express = require ('express')
const path = require('path')
const router = express.Router()
const axios = require ('axios')

router.get('/v1', (req, res) => {
  res.send('Index page');
})

router.get('/location', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'listado.html'))
})

router.get('/current[/city]', function (req, res) {
  res.send(path.join(__dirname, '..', 'public', 'detalle.html'))
})

module.exports = router