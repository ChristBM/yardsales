import React from "react";
import { Link } from 'react-router-dom'
import arrow from '@images/icons/flechita.svg'
import icon_shopping_cart from "@images/icons/icon_shopping_cart.svg"

export function ShopCart( props ) {

  let {
    userLogin,
    userAccount,
    visibleMenuDesktop, setVisibleMenuDesktop,
    countCar,
    setOpenShoppingCart,
    setShowMyAccount,
    setShowEditAccount,
    setShowProductDetails,
    setShowMyOrders,
    setShowProducts
    } = props

  const handleMenuDesktop = () =>  {
    setShowMyOrders(false),
    setShowMyAccount(false),
    setShowEditAccount(false),
    setShowProductDetails(false),
    setShowProducts(true)

    setVisibleMenuDesktop( !visibleMenuDesktop )
  }

  const showLogin = () => {

    if(!userLogin){
      return (
        <li className="shop_car__menu">
          <Link to='/login' className='shop_car__list_link'>Sing in</Link>
        </li>
      )
    }
    else{
      return (
        <li className="shop_car__menu" onClick={ handleMenuDesktop }>
          <p className='shop_car__list_user'>
          { userAccount }
          </p>
          <span>
            <img
              src={ arrow }
              alt="desktop"
              className={ `shop_car__btn_icon ${ !visibleMenuDesktop ? 'rotate_90deg' : 'rotate_270deg' }` }/>
          </span>
        </li>
      )
    }

  }

  const handleOpenShoppingCart = () =>
    userLogin
    ? (
        setVisibleMenuDesktop(false),
        setOpenShoppingCart(true),
        setShowMyOrders(false),
        setShowMyAccount(false),
        setShowEditAccount(false),
        setShowProductDetails(false),
        setShowProducts(true)
      )
    : null

  return (

    <div className="shop_car">

      <ul className="shop_car__list">

        { showLogin() }

        <li className="shop_car__icon" onClick={ handleOpenShoppingCart }>
          <img src={ icon_shopping_cart } alt="shopping cart" />
          <div className="shop_car__icon_counter">{ userLogin ? countCar : "" }</div>
        </li>

      </ul>

    </div>

  )

}