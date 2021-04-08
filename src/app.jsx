import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '@/pages/home'
import Admin from '@/pages/admin'
import Login from '@/pages/login'
import ProtectedRoute from '@/lib/protected-route'
import Header from '@/layouts/header'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <ProtectedRoute
          path="/admin"
          isAuth={false}
          redirect="/login"
          component={Admin}
        />
      </Switch>
    </Router>
  )
}

export default App
