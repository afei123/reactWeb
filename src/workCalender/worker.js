import React,{Component} from 'react'
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
const options = [
    { label: 'Apple', value: '555' },
    { label: 'Pear', value: '666' },
    { label: 'Orange', value: '999' },
  ];

class Worker extends Component{
    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        this.props.setCheckedValues(checkedValues);
    }
    render(){
        return (<div>
            <CheckboxGroup options={options} defaultValue={[]} onChange={this.onChange} />
        </div>)
    }
}

export default Worker;