import React from 'react'
import { Link } from 'react-router-dom'
import error from '@images/img/404-error-page.gif'

export function NotFound() {
  return (

    <div className="not_found">

      <img src={ error } alt="404 error" className="not_found__img" loading='lazy' />

      <Link to='/' className="not_found__link" >Back to Home</Link>

    </div>

  )

}