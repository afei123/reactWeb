import React ,{Component} from 'react'
import './workPlanDetails.css'
import { Form, Row, Col, Input, Button, Icon,DatePicker,Select  } from 'antd';
const { Option, OptGroup } = Select;
const { RangePicker } = DatePicker;

const FormItem = Form.Item;

const districts = [{name:"nihao",id:"1"}]

const FormButtonStyle = {marginLeft:10}

class SearchInputForm extends Component{
      handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('Received values of form: ', values);
        });
      }
    
      handleReset = () => {
        this.props.form.resetFields();
      }
      getFields() {
        const { getFieldDecorator } = this.props.form;
        const children = [];
        children.push(
          <Col span={8} key="userName" style={{ display:'block' }}>
            <FormItem label='工作人员姓名'>
              {getFieldDecorator('userName')(
                <Input />
              )}
            </FormItem>
          </Col>
        );
        children.push(
          <Col span={8} key="district" style={{ display:'block' }}>
            <FormItem label='小区'>
              {getFieldDecorator('district')(
                <Select style={{ width: 200 }}>
                  {districts.map(dis => {
                    return(<Option key={dis.id} value={dis.id}>{dis.name}</Option>)
                  })}
                </Select>
              )}
            </FormItem>
          </Col>
        );
        children.push(
          <Col span={8} key="workDate" style={{ display:'block' }}>
            <FormItem label='工作日期'>
              {getFieldDecorator('workDate')(
                <RangePicker />
              )}
            </FormItem>
          </Col>
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