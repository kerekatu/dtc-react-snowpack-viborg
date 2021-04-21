import React from 'react'
import Layout from '@/layouts/layout'
import styles from '@/styles/login.module.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@/lib/yup'

const LoginPage = () => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const onLoginSubmit = (data) => console.log(data)

  return (
    <Layout>
      <div className={`${styles.login} container`}>
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <input type="email" name="email" placeholder="Email" ref={register} />
          <input
            type="password"
            name="password"
            placeholder="Adgangskode"
            ref={register}
          />
          <button className="btn_primary">Login</button>
        </form>
      </div>
    </Layout>
  )
}

export default LoginPage
