import React, { useState } from 'react'
import arrow from '@images/icons/flechita.svg'

export function Order( { setProductsOrder } ) {

  const [ showOrders, setShowOrders ] = useState(false)

  const handleOpenOrders = () => {
    setShowOrders( !showOrders )
  }

  const handleRadioChange = ev => {
    setProductsOrder( ev.target.value )
  }

  return (

    <div className="order">

      <p className="order__text">Order:</p>

      <div className="order__filter">

        <button value="" className="order__btn" onClick={ handleOpenOrders }>

          <img src={ arrow } className={ showOrders ? "order__btn_icon rotate_270deg" :"order__btn_icon rotate_90deg"} />

        </button>

      </div>

      <form name="order" className={ showOrders ? "order__menu opacity_max" : "order__menu opacity_min"} onChange={ handleRadioChange }>

        <label htmlFor="radio-a" name="cheap" className="order__menu_label">
          <input type="radio" name="radio" id="radio-a" value="cheap" className="order__menu_input" />
          cheap
        </label>

        <label htmlFor="radio-b" name="expensive" className="order__menu_label">
          <input type="radio" name="radio" id="radio-b" value="expensive" className="order__menu_input" />
          expensive
        </label>

        <label htmlFor="radio-c" name="popular" className="order__menu_label">
          <input type="radio" name="radio" id="radio-c" value="popular" className="order__menu_input" />
          popular
        </label>

        <label htmlFor="radio-d" name="none" className="order__menu_label">
          <input type="radio" name="radio" id="radio-d" value="none" className="order__menu_input" />
          none
        </label>

      </form>

    </div>

  )

}