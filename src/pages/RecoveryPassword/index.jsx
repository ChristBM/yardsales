import React, { useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '@context/GlobalContext'
import { InputForm } from "@components/InputForm"
import { MainForm } from '@containers/MainForm'


export function RecoveryPassword() {

  const [ subtitle, setSubtitle ] = useState( "Enter a new passwrd for yue account" )

  let history = useHistory()

  const form = useRef(null)

  const State = useContext( GlobalContext )

  let { setVisibleMenuMobile, setVisibleMenuDesktop } = State

  const handleRecovery = ev => {

    ev.preventDefault()

    const formData = new FormData( form.current )

    const data = {
      userNewPass: formData.get( 'recovery-new_pass' ),
      userConfirmPass: formData.get( 'recovery-confirm_pass' )
    }

    if( data.userNewPass === data.userConfirmPass ){
      /* Poner la condición de que no sean strings vacios */
      history.push( "/login" )
      setSubtitle( "Changing..." )
      /* Método para cambiar contraseña en local dada la cuenta de usuario*/
    }
    else{
      setSubtitle( "Type the same password" )
    }

  }

  const inputs = [
    { type: "password", placeholder: "*********", label: "Password", name: "recovery-new_pass"},
    { type: "password", placeholder: "*********", label: "Password", name: "recovery-confirm_pass"},
  ]

  const buton = {
    type:'submit',
    text:"Confirm",
    classe:"main_btn__background",
    onClick: handleRecovery,
    link_bottom: null,
    link_bottom_text: ''
  }

  return (

    <div className="recovery_password">

      <MainForm

        iconCloseEvent={ () => {
            setVisibleMenuMobile( false )
            setVisibleMenuDesktop( false )
          } }

        formTitle="Create a new password"

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

    </div>
  )

}