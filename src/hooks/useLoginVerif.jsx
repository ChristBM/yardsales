import React, { useState } from "react";


export function useLoginVerif() {

  const [ userLogin, setUserLogin ] = useState( false )
  const [ userAccount, setUserAccount ] = useState( '' )
  const [ emailExist, setEmailExist ] = useState( true )
  const [ passExist, setPassExist ] = useState( true )


  const loginVerif = data => {

    const { userEmail, userPass } = data

    if( sessionStorage.getItem(userEmail) ) {

      const user = JSON.parse( sessionStorage.getItem( userEmail ) )
      setEmailExist( true )

      if( user[2] === userPass ) {
        setUserAccount( userEmail )
        setUserLogin( true )
        console.log( 'ok' )
      }
      else{
        setPassExist( false )
      }

    }
    else{
      setEmailExist( false )
    }

  }

  return {
    userLogin, setUserLogin,
    userAccount, setUserAccount,
    emailExist, setEmailExist,
    passExist, setPassExist,
    loginVerif
  }
}