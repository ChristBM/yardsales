import React from "react";
import { MainButton } from '@components/MainButton'
import { IconClose } from '@components/IconClose'

export function ProductDetails( props ) {

  let {
    userOrders,
    setUserOrders,
    setCountCar,
    itemData,
    setShowMyAccount,
    setShowEditAccount,
    setShowProductDetails,
    setShowMyOrders,
    setShowProducts
  } = props

  const handleAddToCart = () => {
    let theOrders = [...userOrders]
    theOrders.unshift( itemData )
    setUserOrders( theOrders )
    setCountCar( countCar => countCar = countCar + 1 )
    handleClose()
  }

  const handleClose = () => {
    setShowMyOrders(false)
    setShowMyAccount(false)
    setShowEditAccount(false)
    setShowProductDetails(false)
    setShowProducts( true )
  }

  return(

    <div className="products_details__container">

        <div className="products_details__banner">

          <div className="products_details__icon_close" onClick={ handleClose }>
            <IconClose no_pos={ true } />
          </div>

          <img src={ itemData.image } alt="" className="products_details__image" />

        </div>

        <div className="products_details__details_container">

          <p className="products_details__price">${ itemData.price }</p>

          <h3 className="products_details__name">{ itemData.title }</h3>

          <p className="products_details__description">{ itemData.description }</p>

        </div>

        <MainButton
          type='button'
          text="Add to cart"
          classe="main_btn__background"
          onClick={ handleAddToCart }
          />

    </div>

  )

}