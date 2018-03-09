import React ,{Component} from 'react'
import { Modal, Button } from 'antd';
import Worker from './worker';
import {_updateWorkCalenderByMouse} from '../api'

class WorkModel extends Component {
  state = {
    loading: false,
    visible: false,
    selectedValue: null,
    checkedValues:[],    
  }
  
  componentWillReceiveProps(nextProps){
      this.state.visible = nextProps.visible
      this.state.selectedValue = nextProps.selectedValue;
  }
  _setCheckedValues = (checkedValues) => {
    this.state.checkedValues = checkedValues;
  }
  //antd组件
  handleOk = () => {
    _updateWorkCalenderByMouse(this.state.selectedValue,this.state.checkedValues)
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Modal
          visible={visible}
          title="请安排工作人员"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>返回</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
          <Worker setCheckedValues = {this._setCheckedValues}/>
        </Modal>
      </div>
    );
  }
}

export default WorkModel;