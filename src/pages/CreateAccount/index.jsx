import React, { useState, useEffect, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '@context/GlobalContext'
import { InputForm } from "@components/InputForm"
import { MainForm } from '@containers/MainForm'


export function CreateAccount() {

  const [ subtitle, setSubtitle ] = useState( "Introduce your the information." )

  const form = useRef(null)

  let history = useHistory()

  const State = useContext( GlobalContext )

  let {
    saveData,
    existAccount,
    setVisibleMenuMobile,
    setVisibleMenuDesktop,
    accountCrated,
    setAccountCrated
  } = State

  useEffect( () => {

      if( accountCrated )
      {
        history.push( "/login" )
        setAccountCrated( false )
      }

      if( existAccount ){
        setSubtitle( 'This email account already exist.' )
      }

    }

  )

  const handleCreate = ev => {

    ev.preventDefault()

    const formData = new FormData( form.current )

    const data = {
      userName: formData.get( 'create-name' ),
      userEmail: formData.get( 'create-email' ),
      userPass: formData.get( 'create-pass' )
    }

    if( data.userName !== '' & data.userEmail !== '' & data.userPass !== '' ){
      saveData(data)
      setSubtitle( 'Creating...' )
    }
    else{
      setSubtitle( 'Introduce the information please.' )
    }

  }

  const inputs = [
    { type: "email", placeholder: "your.email@example.cm", label: "Email address", name: "create-email"},
    { type: "text", placeholder: "John Snow", label: "Name", name: "create-name"},
    { type: "password", placeholder: "*********", label: "Password", name: "create-pass"}
  ]

  const buton = {
    type:'submit',
    text:"Create",
    classe:"main_btn__background",
    onClick: handleCreate,
    link_bottom: '',
    link_bottom_text: ''
  }

  return(

    <div className="create_account">

      <MainForm

        iconCloseEvent={ () => {
            setVisibleMenuMobile( false )
            setVisibleMenuDesktop( false )
          } }

        formTitle="Create your account"

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