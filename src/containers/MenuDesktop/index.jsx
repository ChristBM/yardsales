import React from 'react'
import { Link } from 'react-router-dom'
import userAvatar from '@images/icons/user.svg'

export function MenuDesktop( props ) {

  let {
    visibleMenuDesktop, setVisibleMenuDesktop,
    setUserLogin,
    setUserAccount,
    setShowMyAccount,
    setShowEditAccount,
    setShowProductDetails,
    setShowMyOrders,
    setShowProducts
  } = props

  const openMyOrders = () => {
    setShowMyOrders(true)
    setShowMyAccount(false)
    setShowEditAccount(false)
    setShowProductDetails(false)
    setShowProducts(false)

    setVisibleMenuDesktop(false)
  }

  const openMyAccount = () => {
    setShowMyOrders(false)
    setShowMyAccount(true)
    setShowEditAccount(false)
    setShowProductDetails(false)
    setShowProducts(false)

    setVisibleMenuDesktop(false)
  }

  const singnOut = () => {
    setShowMyOrders(false)
    setShowMyAccount(false)
    setShowEditAccount(false)
    setShowProductDetails(false)
    setShowProducts(true)

    setUserLogin( false )
    setUserAccount('')
    setVisibleMenuDesktop( false )
  }

  return (

    <div className={ visibleMenuDesktop ? 'menu_desktop' : 'not-visible'} >

      <ul className="menu_desktop__list">
        <img src={ userAvatar } alt="avatar" className="menu_desktop__avatar" />
        <li className="menu_desktop__list_element" onClick={ openMyOrders } >
          <Link to="/" className="menu_desktop__link link-menu">My orders</Link>
        </li>
        <li className="menu_desktop__list_element" onClick={ openMyAccount } >
          <Link to="/" className="menu_desktop__link link-menu">My account</Link>
        </li>
      </ul>

      <div className="menu_desktop__separator"></div>

        <ul className="menu_desktop__list">
          <li className="menu_desktop__list_element" onClick={ singnOut } >
            <Link to="/" className="menu_desktop__link sign-out " >Sign out</Link>
          </li>
        </ul>


    </div>

  )

}