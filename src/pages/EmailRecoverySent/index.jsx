import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '@context/GlobalContext'
import { MainForm } from '@containers/MainForm'
import email from "@images/icons/email.svg"


export function EmailRecoverySent() {

  let history = useHistory()

  const State = useContext( GlobalContext )

  let { setVisibleMenuMobile, setVisibleMenuDesktop } = State

  const handleRecoverySent = ev => {
    ev.preventDefault()
    history.push( "/login" )
  }

  const buton = {
    type:'submit',
    text:"Log in",
    classe:"main_btn__background",
    onClick: handleRecoverySent,
    link_bottom: '#',
    link_bottom_text: `Didn't receive the email? Resend`
  }

  return (
    <div className="email_recov_pass">

      <MainForm

        iconCloseEvent={ () => {
            setVisibleMenuMobile( false )
            setVisibleMenuDesktop( false )
          } }

        formTitle="Email has been sent!"

        formSubt="Please check your inbox."

        renderInputs={
          <div className="email_recov_pass__image_container">

            <div className="email_recov_pass__image">
              <img src={ email } alt="email" className="email_recov_pass__image-email" />
            </div>

          </div>

        }

        formButton={ buton }

        formRef={ null }

      />

    </div>
  )

}