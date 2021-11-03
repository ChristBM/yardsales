import React, { useState } from "react";

export function useUpdateAccount( userAccount, setUserAccount, setShowEditAccount, setShowMyAccount ) {

  const [ updateAccount, setUpdateAccount ] = useState(false)
  const [ emailAccountExist, setEmailAccountExist ] = useState(false)
  const [ emptyInput, setEmptyInput ] = useState(false)

  const updateData = data => {

    const { newUserName, newUserEmail, newUserPass } = data

    if( newUserName !== '' || newUserEmail !== '' || newUserPass !== '' )
    {
      let user = JSON.parse( sessionStorage.getItem( newUserEmail ) )
      if( newUserEmail !== userAccount & user )
      {
        setEmailAccountExist(true)
      }
      if( newUserEmail === userAccount ){
        sessionStorage.setItem( newUserEmail, JSON.stringify( [  newUserName, newUserEmail, newUserPass ] ) )
        setUpdateAccount( true )
        setUserAccount( newUserEmail )
        setShowEditAccount( false )
        setShowMyAccount( true )
        setEmailAccountExist( false )
        setEmptyInput( false )
      }
      else{
        sessionStorage.setItem( newUserEmail, JSON.stringify( [  newUserName, newUserEmail, newUserPass ] ) )
        let orders = JSON.parse( localStorage.getItem( userAccount ) )

        if( orders ){
          let newOrders = [...orders]
          newOrders.forEach( e => e.user = newUserEmail )

          localStorage.setItem( newUserEmail, JSON.stringify( newOrders ) )

          localStorage.removeItem( userAccount )
          sessionStorage.removeItem( userAccount )
        }
        else{
          sessionStorage.removeItem( userAccount )
        }

        setUserAccount( newUserEmail )
        setUpdateAccount( true )
        setShowMyAccount( true )
        setShowEditAccount( false )
        setEmailAccountExist( false )
        setEmptyInput( false )
      }

    }
    else{
      setEmptyInput( true )
    }

  }

  return { emptyInput, emailAccountExist, updateData, updateAccount, setUpdateAccount }

}