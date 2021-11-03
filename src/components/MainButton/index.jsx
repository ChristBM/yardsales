import React from "react"

export function MainButton( { type, classe, onClick, text } ) {
  return (

    <button
      type={ type }
      className={ `main_btn ${ classe }` }
      onClick={ onClick }
    >
      { text }

    </button>

  )

}