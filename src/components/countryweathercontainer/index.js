import React from 'react'
import './countryweathercontainer.css'
import './01d.svg'


function CountryWeatherContainer({ countryWeather }) {

    const { main, weather, wind } = countryWeather

    return (
        <article>
            <h2 id='weather-data-title'>Capital Weather Data</h2>
            <div id="weather-icon">
                <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='' />
                <p>{weather[0].description}</p>
            </div>

                <li><span>Temperature: </span>{Math.round(main.temp)}c</li>
                <li><span>Feels like: </span>{Math.round(main.feels_like)}c</li>
                <li><span>Pressure: </span>{main.pressure}hPa</li>

                <li><span>Wind: </span>{Math.round(wind.speed)}mph</li>


        </article>
    )
}

export default CountryWeatherContainer

//../svg/${weather[0].icon}.svg