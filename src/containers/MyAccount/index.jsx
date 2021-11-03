import React from "react";
import { IconClose } from '@components/IconClose'
import { MainButton } from "@components/MainButton"


export function MyAccount( props ) {

  let {
    userAccount,
    setShowMyAccount,
    setShowEditAccount,
    setShowProductDetails,
    setShowMyOrders,
    setShowProducts
  } = props

  const editUserData = () => {
    setShowMyOrders(false)
    setShowMyAccount(false)
    setShowEditAccount( true )
    setShowProductDetails(false)
    setShowProducts(false)
  }

  const searchInfo = (typeInfo) => {

    const userInfo = JSON.parse( sessionStorage.getItem( userAccount ) )
    const [ userName, userEmail, userPass ] = userInfo
    let textInfo = ''
    switch(typeInfo){
      case 'name': textInfo = userName
        break
      case 'email': textInfo = userEmail
        break
      case 'pass': textInfo = userPass
        break
      default: textInfo = '**********'
    }
    return textInfo
  }

  const handleClose = () => {
    setShowMyOrders(false)
    setShowMyAccount(false)
    setShowEditAccount(false)
    setShowProductDetails(false)
    setShowProducts( true )
  }

  return(

    <div className="my_account__container">

      <div onClick={ handleClose }>
        <IconClose />
      </div>

      <div className="my_account__title">
        <h1 className="my_account__title_text">My account</h1>
      </div>

      <ul className="my_account__list">

        <li className="my_account__list_elem">
          <p className="my_account__elem_title">Name</p>
          <p className="my_account__elem_data">{ searchInfo('name') }</p>
        </li>

        <li className="my_account__list_elem">
          <p className="my_account__elem_title">Email address</p>
          <p className="my_account__elem_data">{ searchInfo('email') }</p>
        </li>

        <li className="my_account__list_elem">
          <p className="my_account__elem_title">Password</p>
          <p className="my_account__elem_data">{ searchInfo('pass') }</p>
        </li>

      </ul>

      <MainButton
        type='button'
        text="Edit"
        link=''
        classe="main_btn__border"
        onClick={ editUserData }
      />

    </div>

  )

}