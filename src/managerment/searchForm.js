import React ,{Component} from 'react'
import './managerment.css'
import { Form, Row, Col, Input, Button, Icon } from 'antd';

const FormItem = Form.Item;

class SearchInputForm extends Component{
    constructor(){
        super();
        this.state = {
            expand: false,
          };
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          this.props.setSearchDto(values)
          console.log('Received values of form: ', values);
        });
      }
    
      handleReset = () => {
        this.props.form.resetFields();
      }
    
      toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
      }
    
      getFields() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        children.push(
          <Col span={8} key={"waterMeterId"} style={{ display: 1 < count ? 'block' : 'none' }}>
            <FormItem label={"水表号"}>
              {getFieldDecorator(`waterMeterId`)(
                <Input placeholder="请输入水表号" />
              )}
            </FormItem>
          </Col>
        );
        children.push(
          <Col span={8} key={"phone"} style={{ display: 2 < count ? 'block' : 'none' }}>
            <FormItem label={"手机号"}>
              {getFieldDecorator(`phone`)(
                <Input placeholder="请输入手机号" />
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
                <Button type="primary" htmlType="submit">查询</Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                  重置
                </Button>
              </Col>
            </Row>
          </Form>
        );
      }
}
const SearchForm = Form.create()(SearchInputForm);

export default SearchForm;