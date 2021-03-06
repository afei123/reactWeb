import React ,{Component} from 'react'
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import WorkModel from './workModel';
import MonthlyPlan from './monthlyPlan';
import NavbarHome from '../navbarHome/navbarHome'
moment.locale('zh-cn');

class WorkCalender extends Component {
  state = {
    value: moment(moment().format("YYYY-MM-DD")),
    selectedValue: moment(moment().format("YYYY-MM-DD")),
    mode:"month",
    visible:false,
  }
  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
      visible:true,
    });
  }
  onPanelChange = (value,mode) => {
    this.setState({ value,mode });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  } 
  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <NavbarHome>
          <Alert message={`您当前选择的日期为: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
          <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} disabledDate = {(currentDate) => {
            return currentDate < moment();
          }} />
          {this.state.mode==="month" ? <WorkModel visible = {this.state.visible} selectedValue = {this.state.selectedValue} handleCancel = {this.handleCancel}/>:
          <MonthlyPlan visible = {this.state.visible} selectedValue = {this.state.selectedValue} handleCancel = {this.handleCancel}/>}
        </NavbarHome>
      </div>
    );
  }
}

export default WorkCalender;