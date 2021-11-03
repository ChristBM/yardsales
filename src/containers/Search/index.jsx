import React from 'react'

export function Search( props ) {
  return (

    <section className="search">

      { props.onSearchProduct() }

      <div className="search__categories">
        { props.onCategories() }
      </div>

      { props.onOrder() }

    </section>

  )

}