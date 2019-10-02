const express = require('express')
const path = require('path')
var axios = require('axios')
const dotenv = require('dotenv')
const env = dotenv.config()

const app = express()
// London, Paris, New - York, Singapore and Sydney.
const CITIES = {
  london: {
    lat: 51.509865,
    long: -0.118092,
  },
  paris: {
    lat: 48.864716,
    long: 2.349014,
  },
  new_york_city: {
    lat: 40.73061,
    long: -73.935242,
  },
  singapore: {
    lat: 1.29027,
    long: 103.851959,
  },
  sydney: {
    lat: -33.865143,
    long: 151.2099,
  },
}

const excludedStat = "['minutely,'hourly','daily','flags','alerts']"

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public/')))

app.get('/currentWeather', (req, res) => {
  const lat = CITIES[req.query['0']].lat
  const long = CITIES[req.query['0']].long
  axios
    .get(
      // [url]/[key]/[latitude],[longitude][params]
      // `${env.parsed.DARK_SKY_URL}${env.parsed.API_KEY}/${lat},${long}?exclude=${excludedStat}&units=si`
      `https://api.darksky.net/forecast/e5ee452f0af721af1d7cf02445ffa1be/${lat},${long}?exclude=${excludedStat}&units=si`
    )
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      console.log(error)
    })
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)
