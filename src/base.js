import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import NavbarHome from './navbarHome/navbarHome'
import Login from './login/login'
import Managerment from './managerment/managerment'

const BasicExample = () => (
  <Router>
    <div style={{height:'100%'}}>
      <Route exact path="/" component={Login}/>
      <Route path="/managerment" component={Managerment}/>
      <Route path="/navbarHome" component={NavbarHome}/>
    </div>
  </Router>
)
export default BasicExample