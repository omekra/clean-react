import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, FormStatus, Footer, Input, } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

type StateProps = {
  isLoading: boolean,
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type='email' name="email" placeholder='Type your email' />
          <Input type="password" name="password" placeholder='Type your password' />
          <button className={Styles.submit} type="submit">Login</button>
          <span className={Styles.link}>Register</span>
        <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
