import React, { useEffect, useState } from "react"
import arrow from '@images/icons/flechita.svg'

export function GoUpArrow() {

  const [ arrowVisible, setArrowVisible ] = useState(false)
  const [ yScroll, setYScroll ] = useState(0)

  window.onscroll = () => {
    setYScroll( window.scrollY )
  }

  useEffect( () => {
    if( yScroll >= 300 ){
      setArrowVisible(true)
    }
    else{
      setArrowVisible(false)
    }
  },[ yScroll ] )

  const handleGoUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return(

    <div className={ arrowVisible ? "go_up_arrow" : "not-visible" } onClick={ handleGoUp }>

      <img src={ arrow } alt="go up arrow" className="go_up_arrow__icon" />

    </div>

  )

}