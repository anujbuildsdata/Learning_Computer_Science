import React from 'react'

import { Link, useLocation, useParams } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import countriesData from '../countriesData'

export default function CountryDetail() {
  const [isDark] = useTheme()
  const params = useParams()
  const { state } = useLocation()
  const countryName = params.country

  const country =
    countriesData.find(
      (item) => item.name.common.toLowerCase() === countryName.toLowerCase()
    ) || state

  if (!country) {
    return (
      <main className={`${isDark ? 'dark' : ''}`}>
        <div className="error-page">
          <div className="error-panel">
            <span className="error-code">404</span>
            <h1>Country not found</h1>
            <p>
              We couldn&apos;t find that country. Try searching for another one.
            </p>
            <Link className="back-button" to="/">
              <i className="fa-solid fa-arrow-left" /> Back home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const countryData = {
    name: country.name.common,
    nativeName: Object.values(country.name.nativeName || {})[0]?.common,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital,
    flag: country.flags.svg,
    tld: country.tld,
    languages: Object.values(country.languages || {}).join(', '),
    currencies: Object.values(country.currencies || {})
      .map((currency) => currency.name)
      .join(', '),
    borders: (country.borders || [])
      .map((border) => countriesData.find((item) => item.cca3 === border))
      .filter(Boolean)
      .map((border) => border.name.common),
  }

  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="country-details-container">
        <button
          type="button"
          className="back-button"
          onClick={() => history.back()}
        >
          <i className="fa-solid fa-arrow-left" /> Back
        </button>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <span>Native Name</span>
                <b>{countryData.nativeName || countryData.name}</b>
              </p>
              <p>
                <span>Population</span>
                <b>{countryData.population.toLocaleString('en-IN')}</b>
              </p>
              <p>
                <span>Region</span>
                <b>{countryData.region}</b>
              </p>
              <p>
                <span>Sub Region</span>
                <b>{countryData.subregion}</b>
              </p>
              <p>
                <span>Capital</span>
                <b>{countryData.capital?.join(', ')}</b>
              </p>
              <p>
                <span>Top Level Domain</span>
                <b>{countryData.tld}</b>
              </p>
              <p>
                <span>Currencies</span>
                <b>{countryData.currencies}</b>
              </p>
              <p>
                <span>Languages</span>
                <b>{countryData.languages}</b>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
