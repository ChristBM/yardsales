import React, { useEffect, useState } from "react";
import { useLoginVerif } from "./useLoginVerif";
import { useSessionStorage } from "./useSessionStorage";
import { useUpdateAccount } from './useUpdateAccount'
import { useOrdersHistory } from './useOrdersHistory'
import { useFetchApi } from "./useFetchApi"

export function useGlobal() {

  const [ userOrders, setUserOrders ] = useState( [] )

  const [ itemData, setItemData ] = useState( {} )

  const [ countCar, setCountCar ] = useState( 0 )

  const [ showMyOrders, setShowMyOrders ] = useState(false)

  const [ showMyAccount, setShowMyAccount ] = useState(false)

  const [ showEditAccount, setShowEditAccount ] = useState(false)

  const [ showProductDetails, setShowProductDetails ] = useState(false)

  const [ showProducts , setShowProducts ] = useState(true)

  const [ visibleMenuMobile, setVisibleMenuMobile ] = useState(false)

  const [ visibleMenuDesktop, setVisibleMenuDesktop ] = useState(false)

  const [ openShoppingCart, setOpenShoppingCart ] = useState(false)

  const [ initProdCard , setInitProdCard ] = useState(false)

  const [ productsOrder, setProductsOrder ] = useState('none')

  const [ searchedWord, setSearchedWord ] = useState('')

  const {
    userLogin, setUserLogin,
    emailExist, setEmailExist,
    passExist, setPassExist,
    loginVerif,
    userAccount, setUserAccount
  } = useLoginVerif()

  const { saveData, existAccount, accountCrated, setAccountCrated } = useSessionStorage()

  const {
    emptyInput,
    emailAccountExist,
    updateData,
    updateAccount,
    setUpdateAccount
  } = useUpdateAccount( userAccount, setUserAccount, setShowEditAccount, setShowMyAccount )

  const { saveOrder, orderSaved, setOrderSaved  } = useOrdersHistory()

  const { productApi, setCategories } = useFetchApi()

  useEffect( () => {
    if( orderSaved ){
      setOpenShoppingCart(false)
      setUserOrders([])
      setCountCar(0)
      setInitProdCard(true)
      setInitProdCard(false)
      setOrderSaved(false)
    }
  }, [orderSaved] )

  useEffect( () => {
    setUserOrders([])
  },[userLogin] )

  return {
    userOrders, setUserOrders,
    itemData, setItemData,
    showMyOrders, setShowMyOrders,
    showMyAccount, setShowMyAccount,
    showEditAccount, setShowEditAccount,
    showProductDetails, setShowProductDetails,
    showProducts, setShowProducts,

    visibleMenuMobile, setVisibleMenuMobile,
    visibleMenuDesktop, setVisibleMenuDesktop,

    countCar, setCountCar,
    openShoppingCart, setOpenShoppingCart,

    initProdCard , setInitProdCard,

    emptyInput, emailAccountExist, updateData, updateAccount, setUpdateAccount,
    userLogin, setUserLogin,
    userAccount, setUserAccount,
    emailExist, setEmailExist,
    passExist, setPassExist,
    loginVerif,
    saveData, existAccount, accountCrated, setAccountCrated,
    saveOrder,
    productApi, setCategories,
    productsOrder, setProductsOrder,
    searchedWord, setSearchedWord,
  }

}