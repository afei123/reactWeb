import React ,{Component} from 'react'
import { Modal, Button,Checkbox } from 'antd';
import {_updateWorkCalenderByMouse} from '../api'

const CheckboxGroup = Checkbox.Group;
const options = [
    { label: 'Apple', value: '555' },
    { label: 'Pear', value: '666' },
    { label: 'Orange', value: '999' },
  ];


class WorkModel extends Component {
  state = {
    loading: false,
    selectedValue: null,
    checkedValues:[],    
  }
  
  componentWillReceiveProps(nextProps){
      this.state.selectedValue = nextProps.selectedValue;
  }
  //antd组件
  handleOk = () => {
    if(this.state.checkedValues.length < 1){
        alert("请选择工作人员")
    }
    return
    _updateWorkCalenderByMouse(this.state.selectedValue,this.state.checkedValues)
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  onChange = (checkedValues) => {
    this.state.checkedValues = checkedValues;
  }
  render() {
    const {loading } = this.state;
    return (
      <div>
        <Modal
          visible={this.props.visible}
          title="请安排工作人员"
          onOk={this.handleOk}
          onCancel={this.props.handleCancel}
          footer={[
            <Button key="back" onClick={this.props.handleCancel}>返回</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
          <CheckboxGroup options={options} defaultValue={[]} onChange={this.onChange} />
        </Modal>
      </div>
    );
  }
}

export default WorkModel;