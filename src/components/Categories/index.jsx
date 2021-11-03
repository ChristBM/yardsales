import React, { useRef } from 'react'

export function Categories( { setCategories } ) {

  let list = useRef( null )

  const handleCategory = ev =>  {
    setCategories(ev.target.id)
    if( ev.target.className === "categories__list_link" ){

      let others = list.current.querySelectorAll('.categories__list_link.background_category')
      let array_others = [...others]
      array_others.forEach(e => {
        e.className = "categories__list_link"
      })
      ev.target.classList.toggle('background_category')

    }

  }

  return (

      <div className="categories__container">

        <ul className="categories__list" onClick={ handleCategory } ref={ list } >
          <li>
            <p className="categories__list_link background_category" id="all">All</p>
          </li>
          <li>
            <p className="categories__list_link" id="electronics">Electronics</p>
          </li>
          <li>
            <p className="categories__list_link" id="jewelery">Jewelery</p>
          </li>
          <li>
            <p className="categories__list_link" id="men's clothing">M-clothing</p>
          </li>
          <li>
            <p className="categories__list_link" id="women's clothing">W-clothing</p>
          </li>

        </ul>

      </div>

  )

}