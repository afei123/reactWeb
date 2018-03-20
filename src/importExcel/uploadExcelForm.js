import React , {ReactDOM,Component} from 'react'
import { Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate, } from 'antd';
import {_ImportWaterBillExcel} from '../api'
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class UploadExcelForm extends Component{
  constructor(){
    super();
    this.state = {
      select : "select",
      file : null,
      loading:false,
    }
  }
  handleSubmit = () => {
    this.setState({loading:true});
    const { file,select } = this.state;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('select',select);
    _ImportWaterBillExcel(formData,()=>{
      this.setState({loading:false});
      this.props.handleCancel();    
    });
  }
  handleSelectChange = (value) =>{
    this.state.select = value
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="导入类型"
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: '请选择导入类型' },
            ],
          })(
            <Select placeholder="请选择导入类型" onChange={this.handleSelectChange}>
              <Option value="waterBill">水费账单</Option>
              <Option value="workCalender">工作日历</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="上传excel"
          extra="请选择要上传的excel"
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="file" beforeUpload = {(file) => {
              this.state.file = file
              return false;
            }} listType="text">
              <Button>
                <Icon type="upload" /> 请选择上传文件
              </Button>
            </Upload>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" onClick={this.handleSubmit} className="upload-demo-start" loading={this.state.loading}>上传</Button>
        </FormItem>
      </Form>
    );
  }
}

export const UploadExcel = Form.create()(UploadExcelForm);
