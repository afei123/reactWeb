import React,{Component} from 'react'
import {Form, Row, Col, Modal, Button,DatePicker,Input } from 'antd';
import {DistrictSelect,WorkerName,WorkDate} from '../common/commonComponents'
const {RangePicker} = DatePicker
const FormButtonStyle = {marginLeft:10}
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        lg: { span: 4},
      },
      wrapperCol: {
        lg: { span: 20},
      },
  };
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
        children.push(  
            <Row gutter={12} key="FieldTwo">
                <Col span={this.props.span} style={this.props.style}>
                    <FormItem {...formItemLayout} label='工作详情'>
                    {getFieldDecorator('detail')(
                        <Input />
                    )}
                    </FormItem>
                </Col>
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
