import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()

  return (
    <div className="error-page">
      <div className="error-panel">
        <span className="error-code">{error?.status || 'Oops'}</span>
        <h1>Something went wrong</h1>
        <p>
          We couldn&apos;t find the page you were looking for. It may have moved
          or no longer exists.
        </p>
        <Link className="back-button" to="/">
          <i className="fa-solid fa-arrow-left" /> Back home
        </Link>
      </div>
    </div>
  )
}
