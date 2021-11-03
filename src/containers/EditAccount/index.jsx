import React, { useEffect, useRef, useState } from "react";
import { IconClose } from '@components/IconClose'
import { InputForm } from "@components/InputForm"
import { MainButton } from "@components/MainButton"

export function EditAccount( props ) {

  const [ subtitle, setSubtitle ] = useState('Change your accounts information')

  let {
    userAccount,
    emptyInput,
    emailAccountExist,
    updateData,
    setShowMyAccount,
    setShowEditAccount,
    setShowProductDetails,
    setShowMyOrders,
    setShowProducts
  } = props

  useEffect( () => {
    if( emptyInput ){
      setSubtitle('Introduce the information please :)')
    }
    if( emailAccountExist ){
      setSubtitle('This email account is already exist!')
    }

  }, [ emptyInput, emailAccountExist ] )

  const form = useRef(null)

  const handleSubmit = ev => {

    ev.preventDefault()
    const formData = new FormData( form.current )
    const data = {
      newUserName: formData.get( 'edit-name' ),
      newUserEmail: formData.get( 'edit-email' ),
      newUserPass: formData.get( 'edit-pass' )
    }

    updateData(data)

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

    <div className="edit_account">

      <div onClick={ handleClose } >
        <IconClose />
      </div>

      <div className="edit_account__container__titles">

        <h1 className="edit_account__title">Edit account</h1>

        <p className="edit_account__subtitle">
          { subtitle }
        </p>

      </div>

      <form action="/" className="edit_account__form" ref={ form }>

        <InputForm type="text" placeholder={ searchInfo('name') } label="Name" name="edit-name" />

        <InputForm type="email" placeholder={ searchInfo('email') } label="Email address" name="edit-email" />

        <InputForm type="password" placeholder={ searchInfo('pass') } label="Password" name="edit-pass" />

      </form>

      <MainButton
        type='submit'
        text="Save"
        link=''
        classe="main_btn__background"
        onClick={ handleSubmit }
      />

    </div>

  )

}