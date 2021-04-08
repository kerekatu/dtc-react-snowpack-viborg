import React from 'react'
import {Route, Redirect} from 'react-router'

const ProtectedRoute = ({isAuth, redirect, component: Component, ...rest}) => {
  return (
    <Route {...rest} render={(props) => {
      if (!isAuth) {
        if (redirect) return <Redirect to={redirect} />

        return <Redirect to="/" />
      }

      return <Component />
    }} />
  )
}

export default ProtectedRoute
