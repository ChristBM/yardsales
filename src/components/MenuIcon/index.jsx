import React from 'react'
import icon_menu from '@images/icons/icon_menu.svg'

export function MenuIcon( props ) {

  let {
    visibleMenuMobile, setVisibleMenuMobile,
    setVisibleMenuDesktop,
    setShowMyAccount,
    setShowEditAccount,
    setShowProductDetails,
    setShowMyOrders,
    setShowProducts  } = props

  const openMenu = () => {
    setShowMyOrders(false)
    setShowMyAccount(false)
    setShowEditAccount(false)
    setShowProductDetails(false)
    setShowProducts(true)

    setVisibleMenuMobile(!visibleMenuMobile)
    setVisibleMenuDesktop(false)
  }

  return (

      <button className="menu_icon__btn" onClick={ openMenu }>

        <img src={ icon_menu } alt="menu" className="menu_icon__img" />

      </button>

  )

}