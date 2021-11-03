import React from 'react'

export function InputForm( { name, label, type, placeholder } ) {
  return(

    <div className="input_form__container">

      <label
        htmlFor={ name }
        className="input_form__label"
      >{ label }
      </label>

      <input
        type={ type }
        name={ name }
        placeholder={ placeholder }
        className="input_form__input"
        required
      />

    </div>

  )

}