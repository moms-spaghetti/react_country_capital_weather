import React from 'react'
import './countrydatacontainer.css'

function CountryDataContainer({ countryData }) {

    const { capital, population, region, subregion } = countryData

    return (
        <article>
            <h2 id='country-data-title'>Country Data</h2>
                <li><span>Capital: </span>{capital}</li>
                <li><span>Population: </span>{population}</li>
                <li><span>Region: </span>{region}</li>
                <li><span>Sub Region: </span>{subregion}</li>
        </article>
    )
}

export default CountryDataContainer