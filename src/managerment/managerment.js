import React , {Component} from 'react'
import SearchTable from './searchTable'
import SearchForm from './searchForm'
import NavbarHome from '../navbarHome/navbarHome'

class Managerment extends Component{
    render(){
        return <div style={{height:'100%'}}>
            <NavbarHome>
                <SearchForm />
                <SearchTable />
            </NavbarHome>
      </div>
    }
}

export default Managerment