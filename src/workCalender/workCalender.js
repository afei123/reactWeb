import React ,{Component} from 'react'
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import WorkModel from './workModel';

class WorkCalender extends Component {
  state = {
    value: moment(moment().format("YYYY-MM-DD")),
    selectedValue: moment(moment().format("YYYY-MM-DD")),
  }
  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  }
  onPanelChange = (value) => {
    this.setState({ value });
  }
  
  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <Alert message={`您当前选择的日期为: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} disabledDate = {(currentDate) => {
          return currentDate < moment();
        }}/>
        <WorkModel />
      </div>
    );
  }
}

export default WorkCalender;