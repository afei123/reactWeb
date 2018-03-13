import React,{Component} from 'react'
import { Form,Col,Select,Input,Row,DatePicker } from 'antd';
const {RangePicker} = DatePicker;
const { Option, OptGroup } = Select;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        lg: { span: 10},
      },
      wrapperCol: {
        lg: { span: 14},
      },
  };
export class DistrictSelect extends Component{
    getDistrictOptions = () => {    
        const districts = [{name:"nihao",id:"1"},{name:"nihao",id:"4"}]
        let Options = [];
        districts.map(dis => {
            Options.push(<Option key={dis.id} value={dis.id}>{dis.name}</Option>)
        })
        return Options;
    }
    render(){
        return (
        <Col span={this.props.span}  style={this.props.style}>
        <FormItem {...formItemLayout} label='小区'>
          {this.props.getFieldDecorator("district")(
            <Select >
              {this.getDistrictOptions()}
            </Select>
          )}
        </FormItem>
      </Col>)
    }
}

export class WorkerName extends Component{
    getWorkerNameOptions = () => {    
        const districts = [{name:"nihao",id:"1"},{name:"nihao",id:"4"}]
        let Options = [];
        districts.map(dis => {
            Options.push(<Option key={dis.id} value={dis.id}>{dis.name}</Option>)
        })
        return Options;
    }
    render(){
        return (
          <Col span={this.props.span} style={this.props.style}>
            <FormItem {...formItemLayout} label='工作人员'>
              {this.props.getFieldDecorator('workerName')(
                <Select >
                {this.getWorkerNameOptions()}
              </Select>
              )}
            </FormItem>
          </Col>
        )
    }
}

export class WorkDate extends Component{
    render(){
        const formItemLayout = {
            labelCol: {
                lg: { span: 4},
              },
              wrapperCol: {
                lg: { span: 13},
              },
          };
        const children = [];
        children.push(  
            <Row key="workDate">
                <Col  >
                    <FormItem {...formItemLayout} label="工作日期">
                        {this.props.getFieldDecorator("workDate")(<RangePicker />)}
                    </FormItem>
                </Col>
            </Row>);
        return children;
    }
}