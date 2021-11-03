import React, { useEffect, useState } from "react";
import { ProductCard } from '@components/ProductCard'


export function ProductsContainer( { productApi, productsOrder, searchedWord } ) {

  const [ toRender, setToRender ] = useState('loading...')

  useEffect( () => {

    if(productApi)
    {
      let arrayProd = []

      if( searchedWord.length ){
        let allProducts = [...productApi]
        arrayProd = allProducts.filter( items => {
          let title = items.title.toLowerCase()
          let word = searchedWord.toLowerCase()
          return title.includes(word)
        })
      }

      if( !searchedWord.length && ( productsOrder === 'none' || productsOrder === '' ) ){
        arrayProd = [...productApi]
      }

      if( productsOrder === 'cheap' ){
        arrayProd = [...productApi]
        arrayProd.sort( function (a, b) {
            if (a.price > b.price) {
              return 1
            }
            if (a.price < b.price) {
              return -1
            }
            return 0
          }
        )
      }

      if( productsOrder === 'expensive' ){
        arrayProd = [...productApi]
        arrayProd.sort( function (a, b) {
            if (a.price < b.price) {
              return 1
            }
            if (a.price > b.price) {
              return -1
            }
            return 0
          }
        )
      }

      if( productsOrder === 'popular' ){
        arrayProd = [...productApi]
        arrayProd.sort( function (a, b) {
            if (a.rate < b.rate) {
              return 1
            }
            if (a.rate > b.rate) {
              return -1
            }
            return 0
          }
        )
      }

      let prodRender = arrayProd.map( e =>
        <ProductCard
          key={ `${e.title}-${Math.random()}` }
          productData={ e }
        />
      )
      setToRender(prodRender)

    }

  }, [ productApi, productsOrder, searchedWord ] )

  return (

    <section className="main">

      <div className="main__cards_container">

        { toRender }

      </div>

    </section>

  )

}