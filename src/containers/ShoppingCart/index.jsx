import React, { useEffect, useState } from "react"
import { IconClose } from '@components/IconClose'
import { MainButton } from '@components/MainButton'
import { AnOrder } from '@components/AnOrder'

export function ShoppingCart( props ) {

  const [ total, setTotal ] = useState(0)
  const [ itemsToRender, setItemsToRender ] = useState( 'Empty' )

  let {
    openShoppingCart, setOpenShoppingCart,
    userAccount,
    userOrders, setUserOrders,
    saveOrder,
    setCountCar
  } = props

  useEffect( () => {
    if( userOrders.length ){
      let theUserOrders = [...userOrders]
      let array_prices = theUserOrders.map( item => item.price )
      let total_price = array_prices.reduce( ( acc, cur ) => acc + cur , 0 )

      let toRender = theUserOrders.map( item =>
        <AnOrder
          key={ `${item.title}-${Math.random()}` }
          productImage={ item.image }
          productName={ item.title }
          productPrice={ item.price }
          userOrders={ userOrders }
          whithClose={ true }
          setUserOrders={ setUserOrders }
          setCountCar={ setCountCar }
        />
      )
      setItemsToRender( toRender )
      setTotal( total_price )
    }
    else{
      setTotal(0)
      setItemsToRender('Empty')
    }
  },[ userOrders ] )

  const handleLocalSaveOrder = () => {

    let myDate = new Date()
    let orderDate = `${myDate.getMonth()}.${myDate.getDate()}.${myDate.getFullYear()}`
    let theUserOrders = [...userOrders]
    let orderObj = {
      user: userAccount,
      date: orderDate,
      cant: theUserOrders.length,
      amount: total,
      articles: theUserOrders
    }
    if( total ){
      saveOrder( orderObj )
      setTotal(0)
    }

  }

  return(

    <div className={ openShoppingCart ? 'shopping_car__container' : 'not-visible'}>

      <div onClick={ () => setOpenShoppingCart(false) } className="shopping_car__icon_close">
        <IconClose />
      </div>

      <ul className="shopping_car__list">

        { itemsToRender }

      </ul>

      <div className="shopping_car__total">
        <p className="shopping_car__total_text">Total</p>
        <p className="shopping_car__total_amount">${ total }</p>
      </div>

      <MainButton
        type='button'
        text="Checkout"
        classe="main_btn__background"
        onClick={ handleLocalSaveOrder }
      />

    </div>

  )

}