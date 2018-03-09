import React , {Component} from 'react'
import { Modal, Button, Input } from 'antd';
import { _saveMonthPlanText } from '../api'
const { TextArea } = Input;
class MonthlyPlan extends Component{
    state = {
        loading: false,
        visible: false,
        selectedValue: null,
        monthPlanText: '',
        plan:"",
      }
      
      componentWillReceiveProps(nextProps){
          this.state.visible = nextProps.visible
          this.state.selectedValue = nextProps.selectedValue;
      }
      
      onChangeMonthPlanText = (event) =>{
          this.setState({monthPlanText : event.target.value})
      }

      //antd组件
      handleOk = () => {
        _saveMonthPlanText(this.state.monthPlanText)
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
              title="月度计划"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>返回</Button>,
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