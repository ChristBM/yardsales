import React, { useState, useRef, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '@context/GlobalContext'
import { InputForm } from "@components/InputForm"
import { MainForm } from '@containers/MainForm'
import { MainButton } from "@components/MainButton"


export function Login() {

  const [ subtitle, setSubtitle ] = useState( "Introduce your login info" )

  let history = useHistory()
  let history_1 = useHistory()

  const form = useRef(null)

  const State = useContext( GlobalContext )

  let {
    setVisibleMenuMobile,
    setVisibleMenuDesktop,
    userLogin,
    loginVerif,
    emailExist,
    passExist
  } = State

  useEffect( () => {

      if( userLogin ) {
        setVisibleMenuMobile( false )
        setVisibleMenuDesktop( false )
        history.push( "/" )
      }

      if( !emailExist ) {
        return(
          setSubtitle( 'The email address not found' )
        )
      }

      if( !passExist & emailExist ) {
        setSubtitle( 'Wrong password' )
      }

    }, [ userLogin, emailExist, passExist ] )

  const handleLogin = ev => {

    ev.preventDefault()

    const formData = new FormData( form.current )

    const data = {
      userEmail: formData.get( 'login-email' ),
      userPass: formData.get( 'login-pass' )
    }

    loginVerif(data)
    setSubtitle( 'Verifying...' )

  }

  const inputs = [
    { type: "email", placeholder: "your.email@example.cm", label: "Email address", name: "login-email"},
    { type: "password", placeholder: "*********", label: "Password", name: "login-pass"}
  ]

  const buton = {
    type:'submit',
    text:"Log in",
    classe:"main_btn__background",
    onClick: handleLogin,
    link_bottom: '/email-recovery',
    link_bottom_text: 'Forgot my password'
  }

  return (

    <div className="login">

      <MainForm

        iconCloseEvent={ () => {
            setVisibleMenuMobile( false )
            setVisibleMenuDesktop( false )
          } }

        formTitle="Welcome"

        formSubt={ subtitle }

        renderInputs={ inputs.map( e =>
          <InputForm
            key={ e.name }
            type={ e.type }
            placeholder={ e.placeholder }
            label={ e.label }
            name={ e.name }
          /> )
        }

        formButton={ buton }

        formRef={ form }

      />

      <div className="login__btn_singup">

        <MainButton
          type='button'
          text="Sign up"
          classe="main_btn__border"
          onClick={ () => history_1.push( "/create-account" ) }
        />

      </div>

    </div>

  )

}