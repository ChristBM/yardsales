import React, { useState } from "react";

export function useSessionStorage() {

  const [ existAccount, setExistAccount ] = useState(false)
  const [ accountCrated, setAccountCrated ] = useState(false)

  const saveData = data => {

    const { userName, userEmail, userPass } = data

    if( sessionStorage.getItem(userEmail) )
    {
      setExistAccount( true )
    }
    else{
      sessionStorage.setItem( userEmail, JSON.stringify( [ userName, userEmail, userPass ] ) )
      setExistAccount( false )
      setAccountCrated( true )
    }

  }

  return { saveData, existAccount, accountCrated, setAccountCrated }

}