const express = require ('express')
const router = express.Router()
const axios = require ('axios')



router.get('/v1', (req, res) => {

  axios
    .get('http://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=f51a224f1bf238f17bb90424a98aa25b')
    .then(response => {
      // la info que me respondió la api está en la propiedad .data
      var weather = response.data.name;

      // finalmente envio los usuarios al cliente
      res.json(weather);
    })
});

router.get('/v1/location', function (req, res) {

  const location = req.query.location;

  axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f51a224f1bf238f17bb90424a98aa25b`)
    .then(response => {

      var name = response.data.name;

      res.json(name);
    })
});

router.get('/v1/current', function (req, res) {

  const location = req.query.location;

  axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f51a224f1bf238f17bb90424a98aa25b`)
    .then(response => {

      var weather = response.data;

      res.json(weather);
    })
})

router.get('/v1/forecast', function (req, res) {

  const location = req.query.location;

  axios
    .get(`http://api.openweathermap.org/data/2.5/forecast/hourly?q=${location}&appid=f51a224f1bf238f17bb90424a98aa25b`)
    .then(response => {

      var forecast = response.data;

      res.json(forecast);
    })
});

module.exports = router