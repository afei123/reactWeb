import React,{Component} from 'react'
import {Form, Row, Col, Modal, Button,DatePicker,Input } from 'antd';
import {DistrictSelect,WorkerName,WorkDate} from '../common/commonComponents'
const {RangePicker} = DatePicker
const FormButtonStyle = {marginLeft:10}

class WorkPlanForm extends Component{
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('============================================', values);
        });
    }
    getFieldOne() {
        const { getFieldDecorator } = this.props.form;
        const children = [];
        children.push(  
            <Row gutter={12} key="FieldOne">
                <DistrictSelect  span={10} getFieldDecorator = {getFieldDecorator}/>
                <Col  span={2}/>
                <WorkerName  span={12}  getFieldDecorator = {getFieldDecorator}/>
            </Row>);
        return children;
      }
    render(){
        return(
            <Form
            className="ant-advanced-search-form"
            onSubmit={this.handleSearch}
          >
            {this.getFieldOne()}
            <WorkDate getFieldDecorator = {this.props.form.getFieldDecorator}/>
            <Row>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Button style={FormButtonStyle} onClick={this.props.handleCancel}>
                  取消
                </Button>
                <Button style={FormButtonStyle} type="primary" htmlType="submit">确认</Button>
              </Col>
            </Row>
          </Form>
        )
    }
}
const MyForm = Form.create()(WorkPlanForm);

class WorkPlan extends Component{
    state = {
        confirmLoading: false,
    }
    render() {
    const { confirmLoading } = this.state;
    return (
        <div>
        <Modal title={this.props.title}
            visible={this.props.visible}
            confirmLoading={confirmLoading}
            onCancel={this.props.handleCancel}
            width="800px"
            footer = ""
        >
            <MyForm />
        </Modal>
        </div>
    );
    }
}
export default WorkPlan;
