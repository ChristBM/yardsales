import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '@context/GlobalContext'
import bt_add_to_cart from '@images/icons/bt_add_to_cart.svg'
import bt_added_to_cart from '@images/icons/bt_added_to_cart.svg'


export function ProductCard( { productData } ) {

  const [ addToCar, setAddToCar ] = useState(false)
  const [ disableAdd, setDisableAdd ] = useState(false)
  const [ mouseOverImg, setMouseOverImg ] = useState(false)

  const State = useContext( GlobalContext )

  let {
    userOrders,
    userLogin,
    setUserOrders,
    setCountCar,
    setItemData,
    setShowProductDetails,
    setShowProducts } = State

  useEffect( () => {
    if( userOrders.length ){
      let theOldOrders = [...userOrders]
      let match = theOldOrders.some( item => item.title === productData.title )
      if( match ){
        setAddToCar( true )
        setDisableAdd( true )
      }
      else{
        setAddToCar( false )
        setDisableAdd( false )
      }
    }
    else{
      setAddToCar( false )
      setDisableAdd( false )
    }
  }, [ userOrders ] )

  const handleAddToCart = () => {
    if( userLogin && !disableAdd ){
      let theOrders = [...userOrders]
      theOrders.unshift( productData )
      setUserOrders( theOrders )
      setCountCar( countCar => countCar = countCar + 1 )
      setAddToCar( true )
      setDisableAdd( true )
    }
  }

  const handleRemoveItem = () => {
    let theOldOrders = [...userOrders]
    let index = theOldOrders.findIndex( item => item.title === productData.title )
    if( index !== -1 ){
      theOldOrders.splice( index, 1 )
      setUserOrders( theOldOrders )
      setCountCar( countCar => countCar = countCar - 1 )
      setAddToCar( false )
      setDisableAdd( false )
    }
  }

  const openItemDetails = () => {
    if( userLogin && !addToCar ){
      setItemData( productData )
      setShowProductDetails( true )
      setShowProducts( false )
    }
  }

  const mouseHover = () => {
    setMouseOverImg(true)
  }

  const mouseLeave = () => {
    setMouseOverImg(false)
  }

  return (

    <div className="product_card">

      <img
        onClick={ openItemDetails }
        onMouseEnter={ mouseHover }
        onMouseLeave={ mouseLeave }
        className="product_card__image"
        src={ productData.image }
        alt="product image"
        loading="lazy"
      />

      <div
        onMouseEnter={ mouseHover }
        onClick={ handleRemoveItem }
        className={ ( addToCar && mouseOverImg ) ? "product_card__remove": "not-visible" }
      >

        <div className="product_card__remove_text">
          <p>Removed from Cart</p>
        </div>

      </div>

      <div className="product_card__info">

        <div className="product_card__info_texts">
          <p className="product_card__info_price">${ productData.price }</p>
          <p className="product_card__info_name">{ productData.title }</p>
        </div>

        <figure className="product_card__info_icon" onClick={ handleAddToCart }>
          <img src={ ( addToCar && userLogin ) ? bt_added_to_cart : bt_add_to_cart } alt="cart" className="product_card__info_icon-car" />
        </figure>

      </div>

    </div>

  )

}