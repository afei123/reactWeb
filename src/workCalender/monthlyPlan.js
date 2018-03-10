import React , {Component} from 'react'
import { Modal, Button, Input } from 'antd';
import { _saveMonthPlanText } from '../api'
const { TextArea } = Input;

class MonthlyPlan extends Component{
    state = {
        loading: false,
        selectedValue: null,
        monthPlanText: '',
      }
      
      componentWillReceiveProps(nextProps){
          this.state.selectedValue = nextProps.selectedValue;
      }
      
      onChangeMonthPlanText = (event) =>{
          this.setState({monthPlanText : event.target.value})
      }

      //antd组件
      handleOk = () => {
        _saveMonthPlanText(this.state.selectedValue,this.state.monthPlanText)
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
      
      render() {
        const { visible, loading } = this.state;
        return (
          <div>
            <Modal
              visible={this.props.visible}
              title="月度计划"
              onOk={this.handleOk}
              onCancel={this.props.handleCancel}
              footer={[
                <Button key="back" onClick={this.props.handleCancel}>返回</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  提交
                </Button>,
              ]}
            >
              <TextArea value = {this.state.monthPlanText} onChange = {this.onChangeMonthPlanText} rows={4} 
              placeholder="请输入您的月度计划"/>
            </Modal>
          </div>
        );
    }
}

export default MonthlyPlan;