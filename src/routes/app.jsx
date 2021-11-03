import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from '../layout'
import { Login } from '@pages/Login'
import { CreateAccount } from '@pages/CreateAccount'
import { EmailRecovery } from '@pages/EmailRecovery'
import { EmailRecoverySent } from '@pages/EmailRecoverySent'
import { RecoveryPassword } from '@pages/RecoveryPassword'
import { Home } from '@pages/Home'
import { NotFound } from '@pages/NotFound'

import { useGlobal } from '@hooks/useGlobal'
import { GlobalContext } from '@context/GlobalContext'

export function App(){

  const State = useGlobal()

  return(

    <GlobalContext.Provider value={ State }>

          <BrowserRouter>

            <Layout>

              <Switch>

                <Route exact path='/' component={ Home } />
                <Route exact path='/create-account' component={ CreateAccount } />
                <Route exact path='/login' component={ Login } />
                <Route exact path='/email-recovery' component={ EmailRecovery } />
                <Route exact path='/email-recovery-sent' component={ EmailRecoverySent } />
                <Route exact path='/recovery-password' component={ RecoveryPassword } />
                <Route component={ NotFound } />

              </Switch>

            </Layout>

          </BrowserRouter>

    </GlobalContext.Provider>


  )
}