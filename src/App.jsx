
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import Loading from './Loading'

function App() {
  const [coords, setCoords] = useState() //estadp de las coordenadas
  const [weather, setWeather] = useState() //estado de la api
  const [temp, setTemp] = useState()

  const succes = pos => {
    setCoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude

    })
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes)
  }, [])

  useEffect(() => {

    if (coords) {
      const apiKey = '1bb5775f232e2977309dabca90989572'
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`)
        .then(res => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const ferenheit = (celsius * (9 / 5) + 32).toFixed(1)
          setTemp({ celsius, ferenheit })
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className="App">

      {
        weather ? <WeatherCard weather={weather} temp={temp} /> :
          <Loading />
      }


    </div>
  )
}

export default App
