import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import NavbarHome from './navbarHome/navbarHome'
import Login from './login/login'
import Managerment from './managerment/managerment'
import WorkCalender from './workCalender/workCalender'
import WorkPlanDetails from './workPlanDetails/workPlanDetails'
import Worker from './worker/worker'

const URL = () => (
  <Router>
    <div style={{height:'100%'}}>
      <Route exact path="/" component={Login}/>
      <Route path="/navbarHome" component={NavbarHome}/>
      <Route path="/managerment" component={Managerment}/>
      <Route path="/workCalender" component={WorkCalender}/>
      <Route path="/workPlanDetails" component={WorkPlanDetails}/>
      <Route path="/worker" component={Worker}/>
    </div>
  </Router>
)
export default URL