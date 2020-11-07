import React, { useState, useEffect } from 'react'
import './App.css'
import Background from './components/background'
import Input from './components/input'
import CountryDataContainer from './components/countrydatacontainer'
import CountryWeatherContainer from './components/countryweathercontainer'

function App() {
  const [searchData, setSearch] = useState('')
  const [countryData, setCountryData] = useState([])
  const [captialCity, setCapitalCity] = useState('')
  const [inputListDrop, setInputListDrop] = useState([{ name: '...' }])
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
          for (let i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase() === searchData.toLowerCase()) {

              setCountryData(data[i])
              setCapitalCity(data[i].capital)
              break
            } else {
              setCountryData(data[0])
              setCapitalCity(encodeURI(data[0].capital))
            }
          }
          setInputListDrop(data)
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
        console.log(data)
        if (data.cod === '404') {
          setCountryWeather({
            main: {
              temp: '',
              feels_like: '',
              pressure: ''
            },
            weather: [{ description: '' }],
            wind: { speed: '' }
          })
        } else setCountryWeather(data)
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
        <Input inputRef={inputRef} inputListDrop={inputListDrop} captureInput={captureInput} />
      </section>
    </main>
  );
}

export default App;
