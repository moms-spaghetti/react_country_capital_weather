import React, { useState, useEffect } from 'react'
import './App.css'
import Background from './components/background'
import Input from './components/input'
import CountryDataContainer from './components/countrydatacontainer'
import CountryWeatherContainer from './components/countryweathercontainer'

function App() {
  const [searchData, setSearch] = useState(null)
  const [countryData, setCountryData] = useState('')
  const [captialCity, setCapitalCity] = useState('')
  const [countryWeather, setCountryWeather] = useState({
    main: {
      temp: '',
      feels_like: '',
      pressure: ''
    },
    weather: [{ description: '' }],
    wind: { speed: '' }
  })
  const inputRef = React.createRef()


  function captureInput(e) {
    if (e.key === 'Enter') {
      setSearch(e.target.value)
      e.target.value = ''
    }
  }

  useEffect(() => {
    if (searchData) {
      async function fetchCountryData() {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${searchData}`)
        const data = await response.json()
        if (data.status === 404) {
          inputRef.current.value = ''
          inputRef.current.placeholder = 'country not found'
          setTimeout(() => {
            inputRef.current.placeholder = 'Search a country'
          }, 1000)
          return
        } else if (data) {
          setCountryData(data[0])
          setCapitalCity(data[0].capital)
        }
      }
      fetchCountryData()
    }
  }, [searchData])

  useEffect(() => {
    if (captialCity) {
      async function fetchCountryWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${captialCity}&units=metric&appid=${process.env.REACT_APP_APIKEY}`)
        const data = await response.json()
        setCountryWeather(data)
      }
      fetchCountryWeather()
    }
  }, [captialCity])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <main>
      <section className="left-container">
        <CountryDataContainer countryData={countryData} />
        <CountryWeatherContainer countryWeather={countryWeather} />
      </section>
      <Background countryData={countryData} />
      <section className="right-container">
        <h1>{countryData.name}</h1>
        <Input inputRef={inputRef} captureInput={captureInput} />
      </section>
    </main>
  );
}

export default App;
