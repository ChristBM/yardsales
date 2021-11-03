import React from "react";

export function Main( props ) {

  let {
    showMyOrders, onMyOrders,
    showMyAccount, onMyAccount,
    showEditAccount, onEditAccount,
    showProductDetails, onProductDetails,
    showProducts, onSearch, onProductsContainer,
    onMoreProducts,
    onGoUp
    } = props

  return (

    <>

      { showMyOrders ? onMyOrders() : null }

      { showMyAccount ? onMyAccount() : null }

      { showEditAccount ? onEditAccount() : null }

      { showProductDetails ? onProductDetails() : null }

      { showProducts ? <> { onSearch() } { onProductsContainer() } { onGoUp() } { onMoreProducts() }  </> : null }

    </>

  )

}