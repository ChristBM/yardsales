import React, { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '@context/GlobalContext'
import { InputForm } from "@components/InputForm"
import { MainForm } from '@containers/MainForm'


export function EmailRecovery() {

  let history = useHistory()

  const form = useRef(null)

  const State = useContext( GlobalContext )

  let { setVisibleMenuMobile, setVisibleMenuDesktop } = State

  const handleRecovery = ev => {

    ev.preventDefault()

    const formData = new FormData( form.current )
    const data = {
      userEmail: formData.get( 'recovery-email' )
    }

    if( data.userEmail !== '' ){
      history.push( "/email-recovery-sent" )
      /* Aqui puedo crear un método para buscar localmente el correo y devolverle la contraseña */
    }

  }

  const inputs = [
    { type: "email", placeholder: "your.email@example.cm", label: "Email address", name: "recovery-email"}
  ]

  const buton = {
    type:'submit',
    text:"Submit",
    classe:"main_btn__background",
    onClick: handleRecovery,
    link_bottom: '/login',
    link_bottom_text: 'Back to login'
  }

  return (

    <div className="email_recovery">

      <MainForm

        iconCloseEvent={ () => {
            setVisibleMenuMobile( false )
            setVisibleMenuDesktop( false )
          } }

        formTitle="Password Recovery"

        formSubt="Email used to create your acount"

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