import React , {Component} from 'react'
import SearchTable from './searchTable'
import SearchForm from './searchForm'
class Managerment extends Component{
    render(){
        return <div style={{height:'100%'}}>
        <SearchForm />
        <SearchTable />
      </div>
    }
}

export default Managerment