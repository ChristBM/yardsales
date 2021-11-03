import React from 'react'
import { Link } from 'react-router-dom'
import { IconClose } from '@components/IconClose'
import userAvatar from '@images/icons/user.svg'

export function MenuMobile( props ) {

  let {
    visibleMenuMobile, setVisibleMenuMobile,
    userLogin, setUserLogin,
    userAccount, setUserAccount,
    setShowMyAccount,
    setShowEditAccount,
    setShowProductDetails,
    setShowMyOrders,
    setShowProducts } = props

  const openMyOrders = () => {
    setShowMyOrders(true)
    setShowMyAccount(false)
    setShowEditAccount(false)
    setShowProductDetails(false)
    setShowProducts(false)

    setVisibleMenuMobile(false)
  }

  const openMyAccount = () => {
    setShowMyOrders(false)
    setShowMyAccount(true)
    setShowEditAccount(false)
    setShowProductDetails(false)
    setShowProducts(false)

    setVisibleMenuMobile(false)
  }

  const singnOut = () => {
    setShowMyOrders(false)
    setShowMyAccount(false)
    setShowEditAccount(false)
    setShowProductDetails(false)
    setShowProducts(true)

    setUserLogin(false)
    setUserAccount('')
    setVisibleMenuMobile(false)
  }

  const isLogin = () => {

    if( userLogin ){
      return (
        <>
          <ul className="menu_mobile__list">
            <img src={userAvatar} alt="avatar" className="menu_mobile__avatar" />
            <li className="menu_mobile__list_element">
              <p className="menu_mobile__link email email_color" >{ userAccount }</p>
            </li>
            <li className="menu_mobile__list_element" onClick={ openMyOrders } >
              <Link to="/" className="menu_mobile__link link-menu">My orders</Link>
            </li>
            <li className="menu_mobile__list_element" onClick={ openMyAccount } >
              <Link to="/" className="menu_mobile__link link-menu">My account</Link>
            </li>
          </ul>

          <ul className="menu_mobile__list">
            <li className="menu_mobile__list_element" onClick={ singnOut } >
              <Link to="/" className="menu_mobile__link sign-out " >Sign out</Link>
            </li>
          </ul>
        </>
      )

    }

    else {
      return (

        <ul className="menu_mobile__list">

          <li className="menu_mobile__list_element">
            <Link to="/login" className="menu_mobile__link log-in" >Login</Link>
          </li>

          <li className="menu_mobile__list_element">
            <Link to="/create-account" className="menu_mobile__link sign-up" >Sign up</Link>
          </li>

        </ul>

      )

    }
  }

    return (

      <div className={  visibleMenuMobile ? 'menu_mobile' : 'not-visible'} >

        <div onClick={ () => setVisibleMenuMobile(false) }>
          <IconClose />
        </div>

        { isLogin() }

        <div className="menu_mobile__separator"></div>

      </div>

    )

}