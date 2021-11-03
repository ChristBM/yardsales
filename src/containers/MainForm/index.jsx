import React from "react";
import { Logo } from "@components/Logo"
import { IconClose } from "@components/IconClose"
import { MainButton } from "@components/MainButton"
import { Link } from "react-router-dom";

export function MainForm( props ) {

  let {
    iconCloseEvent,
    formTitle,
    formSubt,
    renderInputs,
    formButton,
    formRef
  } = props

  return (

    <div className="main_form">

      <div onClick={ iconCloseEvent }>
        <IconClose />
      </div>

      <div className="main_form__header">

        <Logo classe="logo" />

        <h1 className="main_form__header_title">{ formTitle }</h1>

        <p className="main_form__header_subtitle">{ formSubt }</p>

      </div>

      <form className="main_form__formulary" action="/" ref={ formRef }>

        { renderInputs }

      </form>

      <div className="main_form__btn">

        <MainButton
          type={ formButton.type }
          classe={ formButton.classe }
          onClick={ formButton.onClick }
          text={ formButton.text }
        />

        <Link
          className="main_form__btn_link-bottom"
          to={ formButton.link_bottom }
        >{ formButton.link_bottom_text }
        </Link>

      </div>

    </div>

  )

}