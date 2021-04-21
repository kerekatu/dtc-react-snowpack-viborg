import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '@/routes/home'
import AdminPage from '@/routes/admin'
import LoginPage from '@/routes/login'
import ProtectedRoute from '@/lib/protected-route'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute
          path="/admin"
          isAuth={false}
          redirect="/login"
          component={AdminPage}
        />
      </Switch>
    </Router>
  )
}

export default App
