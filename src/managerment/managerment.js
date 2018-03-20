import React , {Component} from 'react'
import SearchTable from './searchTable'
import SearchForm from './searchForm'
import NavbarHome from '../navbarHome/navbarHome'
import {_searchWaterBill} from '../api'

class Managerment extends Component{
    constructor(){
        super()
        this.state = {
            searchDto:{
                phone:"",
                waterMeterId:""
            },
            dataSource:[]
        }
    }
    componentWillMount(){
        this._searchWaterBill(this.state.searchDto);
    }
    setSearchDto = (data) => {
        this.state.searchDto.phone = data.phone;
        this.state.searchDto.waterMeterId = data.waterMeterId;
        this.setState({});
        this._searchWaterBill(data);
    }
    _searchWaterBill = (searchDto) => {
        _searchWaterBill(searchDto,(result)=>{
            this.setState({ dataSource : result })
        })
    }
    render(){
        return <div style={{height:'100%'}}>
            <NavbarHome>
                <SearchForm setSearchDto = {this.setSearchDto}/>
                <SearchTable dataSource = {this.state.dataSource}/>
            </NavbarHome>
      </div>
    }
}

export default Managerment