import React, { useState } from "react"
import { AnOrder } from '@components/AnOrder'
import arrow from '@images/icons/flechita.svg'

export function ElementOrder( { orderDate, orderArticles, orderAmount, articleList } ) {

  const [ orderInfo, setOrderInfo ] = useState([])
  const [ showDetails, setShowDetails ] = useState(false)

  const handleShowDetails = () => {

    setShowDetails( showDetails => !showDetails )

    let arrayArticles = [...articleList]

    setOrderInfo(arrayArticles)

  }

  return(
    <li className="element_order" onClick={ handleShowDetails } >

      <div className="element_order__container">

        <div className="element_order__left">

          <p className="element_order__date" >{ orderDate }</p>

          <p className="element_order__articles" >{ orderArticles } articles</p>

          </div>

          <div className="element_order__right">

          <p className="element_order__amount" >${ orderAmount }</p>

          <img
            src={ arrow }
            alt="arrow icon"
            className={ showDetails ? "element_order__icon rotate_90deg" : "element_order__icon rotate_270deg" }
          />

        </div>

      </div>

      { showDetails
        ? orderInfo.reverse().map( item =>
            <AnOrder
              key={ `${item.title}-${Math.random()}` }
              productImage={ item.image }
              productName={ item.title }
              productPrice={ item.price }
              userOrders={ null }
              whithClose={ false}
              setUserOrders={ null }
              setCountCar={ null }
            />
          )
        : null
      }

    </li>
  )
}