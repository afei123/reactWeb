import React ,{Component} from 'react'
import './workPlanDetails.css'
import { Form, Row, Col,Button, Icon,DatePicker} from 'antd';
import {DistrictSelect,WorkerName} from '../common/commonComponents'
import moment from 'moment';
const { RangePicker } = DatePicker;
const FormItem = Form.Item;

const FormButtonStyle = {marginLeft:10}

class SearchInputForm extends Component{
    constructor(){
      super()
      this.state = {startDate:null,endDate:null}
    }
    _onStartChange = (value) => {
      this._onChange('startDate', value);
    }
  
    _onEndChange = (value) => {
      this._onChange('endDate', value);
    }
    _onChange = (field, value) => {
      this.setState({
        [field]: value,
      });
    }
    _disabledStartDate = (startDate) => {
      const endDate = this.state.endDate;
      if (!startDate || !endDate) {
        return false;
      }
      return startDate.valueOf() > endDate.valueOf();
    }
  
    _disabledEndDate = (endDate) => {
      const startDate = this.state.startDate;
      if (!endDate || !startDate) {
        return false;
      }
      return endDate.valueOf() <= startDate.valueOf();
    }
    //点击搜索摁钮后触发的方法
      handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('============================================', values);
        });
      }
      handleReset = () => {
        this.props.form.resetFields();
      }
      getFields() {
        const { getFieldDecorator } = this.props.form;
        const children = [];
        children.push(
          <Col span={6} key="workDateStart" style={{ display:'block' }}>
            <FormItem label='工作开始日期'>
              {getFieldDecorator('workDateStart')(
                <DatePicker placeholder="Start" onChange={this._onStartChange}  disabledDate={this._disabledStartDate}/>
              )}
            </FormItem>
          </Col>
        );
        children.push(
          <Col span={6} key="workDateEnd" style={{ display:'block' }}>
            <FormItem label='工作结束日期'>
              {getFieldDecorator('workDateEnd')(
                <DatePicker placeholder="End" onChange={this._onEndChange}  disabledDate={this._disabledEndDate}/>
              )}
            </FormItem>
          </Col>
        );
        children.push(
          <DistrictSelect key="district" span={6} getFieldDecorator = {getFieldDecorator}/>
        );
        children.push(
          <WorkerName key="workerName" span={6} getFieldDecorator = {getFieldDecorator}/>
        );
        return children;
      }
    
      render() {
        return (
          <Form
            className="ant-advanced-search-form"
            onSubmit={this.handleSearch}
          >
            <Row gutter={24}>{this.getFields()}</Row>
            <Row>
              <Col span={24} style={{ textAlign: 'right' }}>
                {this.props.children}
                <Button style={FormButtonStyle} onClick={this.handleReset}>
                  重置
                </Button>
                <Button style={FormButtonStyle} type="primary" htmlType="submit">搜索</Button>
              </Col>
            </Row>
          </Form>
        );
      }
}
const SearchForm = Form.create()(SearchInputForm);

export default SearchForm;