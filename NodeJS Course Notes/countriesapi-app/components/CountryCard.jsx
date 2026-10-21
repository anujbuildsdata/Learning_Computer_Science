import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
  data,
}) {
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <div className="flag-container">
        <img src={flag} alt={name + ' Flag'} loading="lazy" />
        <span className="region-badge">{region}</span>
      </div>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <div className="card-meta">
          <p>
            <span>Population</span>
            <b>{population.toLocaleString('en-IN')}</b>
          </p>
          <p>
            <span>Capital</span>
            <b>{capital || '—'}</b>
          </p>
        </div>
      </div>
    </Link>
  )
}
