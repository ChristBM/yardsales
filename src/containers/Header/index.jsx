import React from 'react'

export function Header( props ) {
  return (

    <nav className="header">

      { props.onMenuIcon() }

      <div className="header_logo_categ__container">

        { props.onLogo() }

        <div className="header__categories">

          { props.onCategories() }

        </div>

      </div>

      <div className="header__menu_desktop">

        { props.onShopCart() }

      </div>

      { props.onMenuDesktop() }

    </nav>

  )

}