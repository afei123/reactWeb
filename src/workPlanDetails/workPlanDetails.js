import React , { Component } from 'react'
import NavbarHome from '../navbarHome/navbarHome'
import SearchForm from './searchForm'
import SearchTable from './searchTable'
import WorkPlan from './workPlan';
import {Button} from 'antd'
import {_searchWorkPlan} from '../api'

const FormButtonStyle = {marginLeft:10}

class WorkPlanDetails extends Component{
    constructor(){
        super();
        this.state = {
            visible:false,
            pageName:"",
            workPlanList:[],
            workPlan:{},
            searchWorkPlanDto:{
                workerId:0,
                districtId:0,
                isOk:false,
            }
        }
    }
    componentWillMount(){
        this._getData();
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    _getData = () => {
        const {workPlanList} = this.state;
        _searchWorkPlan(this.state.searchWorkPlanDto,(result)=>{
            this.setState({workPlanList:result})
        })
    }
    _newWorkPlanPage = () => {
        this.setState({visible:true,pageName:"新建"})
    }
    _updateWorkPlanPage = (workPlanId) => {
        this.state.workPlanList.map(w =>{
            if(w.id === workPlanId){
                this.setState({visible:true,pageName:"编辑",workPlan:w})
            }
        })
    }
    render(){
        return(
        <div style={{height:'100%'}}>
            <NavbarHome>
                <SearchForm>
                    <Button style={FormButtonStyle} onClick={this._newWorkPlanPage}>
                        新建
                    </Button>
                </SearchForm>
                <WorkPlan visible = {this.state.visible} handleCancel = {this.handleCancel} title = {this.state.pageName} workPlan = {this.state.workPlan}/>
                <SearchTable data = {this.state.workPlanList} _updateWorkPlanPage = {this._updateWorkPlanPage} />
            </NavbarHome>
        </div>
       )
    }
}

export default WorkPlanDetails