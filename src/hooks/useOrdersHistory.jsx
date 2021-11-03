import React, { useState } from "react";

export function useOrdersHistory() {

  const [ orderSaved, setOrderSaved ] = useState(false)

  const saveOrder = order => {

    const { user } = order

    if( localStorage.getItem( user ) === null ){

      localStorage.setItem( user, JSON.stringify( [ order ] ) )

    }
    else{

      let localOrders = JSON.parse( localStorage.getItem( user ) )

      localOrders.push( order )

      localStorage.setItem( user, JSON.stringify( localOrders ) )

    }

    setOrderSaved(true)

  }

  return{ saveOrder, orderSaved, setOrderSaved }

}