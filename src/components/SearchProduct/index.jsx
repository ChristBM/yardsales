import React, { useRef } from "react"
import search_product__icon from '@images/icons/search_product__icon.svg'

export function SearchProduct( { setSearchedWord } ) {

  let search = useRef(null)

  const handleSearch = () => {
    setSearchedWord( search.current.value )
  }

  return (

      <div className="search_product__container">

        <span className="search_product__icon">
          <img src={ search_product__icon } alt="" />
        </span>

        <input
          type ="search"
          className="search_product__input"
          placeholder="Search product"
          autoComplete="on"
          onChange={ handleSearch }
          ref={ search }
          />

      </div>

  )

}