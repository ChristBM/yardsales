import React from "react";
import { IconClose } from '@components/IconClose'

export function AnOrder( props ) {

  let {
    productImage,
    productName,
    productPrice,
    userOrders,
    whithClose,
    setUserOrders,
    setCountCar
  } = props

  const handleDeleteProduct = () => {

    let theOldOrders = [...userOrders]
    let index = theOldOrders.findIndex( item => item.title === productName )
    if( index !== -1 ){
      theOldOrders.splice( index, 1 )
      setUserOrders( theOldOrders )
      setCountCar( countCar => countCar = countCar - 1 )
      console.log('product removed')
    }
  }

  return(

    <div className="an_order__container">

      <img src={ productImage } alt="" className="an_order__image"/>

      <div className="an_order__name_container">
        <p className="an_order__name">{ productName }</p>
      </div>

      <div className="an_order__icon_price_container">
        <p className="an_order__price">${ productPrice }</p>

        { whithClose
          ? <div onClick={ handleDeleteProduct } className="an_order__icon_close">
              <IconClose no_pos={ true } />
            </div>
          : null
        }

      </div>

    </div>
  )
}