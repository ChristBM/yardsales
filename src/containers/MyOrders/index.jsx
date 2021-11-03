import React, { useEffect, useState } from "react"
import { ElementOrder } from '@components/ElementOrder'
import { IconClose } from '@components/IconClose'

export function MyOrders( props ) {

  let {
    userAccount,
    setShowMyAccount,
    setShowEditAccount,
    setShowProductDetails,
    setShowMyOrders,
    setShowProducts
  } = props

  const [ renderOrders, setRenderOrder ] = useState( [] )

  useEffect( ()=> {

    let local = JSON.parse( localStorage.getItem( userAccount ) )

    if( local === null || local === [] || local === undefined ){
      setRenderOrder('Empty')
    }
    else{
      let local_orders = local.reverse().map( a =>
        <ElementOrder
          key={ `${a.date}-${Math.random()}` }
          orderDate={ a.date }
          orderArticles={ a.cant }
          orderAmount={ a.amount }
          articleList={ a.articles }
        />
      )
      setRenderOrder( local_orders )
    }
  },[])

  const handleClose = () => {
    setShowMyOrders(false)
    setShowMyAccount(false)
    setShowEditAccount(false)
    setShowProductDetails(false)
    setShowProducts( true )
  }

  return(

    <div className="my_orders">

      <div className="my_orders__icon-close" onClick={ handleClose }>
        <IconClose no_pos={ true } />
      </div>

      <h2 className="my_orders__title" >My orders</h2>

      <ul className="my_orders__list" >

        { renderOrders }

      </ul>

    </div>

  )

}