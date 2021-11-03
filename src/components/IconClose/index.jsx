import React from "react";
import { Link } from 'react-router-dom'
import form_close from "@images/icons/icon_close.png"

export function IconClose( { no_pos } ) {
  return(

      <div className={ no_pos ? "icon_close__container-no_positioned" : "icon_close__container" }>

        <Link to='/' className="icon_close__link" >

          <img src={ form_close } alt="logo"/>

        </Link>

      </div>

  )

}