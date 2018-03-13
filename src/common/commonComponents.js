import React,{Component} from 'react'
import { Form,Col,Select  } from 'antd';
const { Option, OptGroup } = Select;
const FormItem = Form.Item;

export class DistrictSelect extends Component{
    getOptions = () => {    
        const districts = [{name:"nihao",id:"1"},{name:"nihao",id:"4"}]
        let Options = [];
        districts.map(dis => {
            Options.push(<Option key={dis.id} value={dis.id}>{dis.name}</Option>)
        })
        return Options;
    }
    render(){
        return (
        <Col span={6}  style={{ display:'block' }}>
        <FormItem label='小区'>
          {this.props.getFieldDecorator("district")(
            <Select style={{ width: 200 }}>
              {this.getOptions()}
            </Select>
          )}
        </FormItem>
      </Col>)
    }
}