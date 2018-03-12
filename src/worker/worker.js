import React ,{Component} from 'react'
import NavbarHome from '../navbarHome/navbarHome'

class Worker extends Component{
    render(){
        return <div style={{height:"100%"}}>
            <NavbarHome>
                meterReader页面
            </NavbarHome>
        </div>
    }
}

export default Worker;