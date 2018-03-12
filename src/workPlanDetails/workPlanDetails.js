import React , { Component } from 'react'
import NavbarHome from '../navbarHome/navbarHome'
import SearchForm from './searchForm'
import SearchTable from './searchTable'
import WorkPlan from './workPlan';
import {Button} from 'antd'

const FormButtonStyle = {marginLeft:10}

class WorkPlanDetails extends Component{
    constructor(){
        super();
        this.state = {
            visible:false,
            pageName:"",
            workPlanList:[],
            workPlan:{},
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
        const data = [];
        for (let i = 0; i < 46; i++) {
          data.push({
            id: i,
            name:i,
            age: i,
            address: <a key={i} onClick = {() => this._updateWorkPlanPage(i)}>编辑</a>,
          });
        }
        this.setState({workPlanList:data})
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