import React,{Component} from 'react'
import { Modal, Button } from 'antd';
import {DistrictSelect} from '../common/commonComponents'

class WorkPlan extends Component{
    state = {
        confirmLoading: false,
        }
    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
            confirmLoading: false,
            });
        }, 2000);
    }
    render() {
    const { confirmLoading } = this.state;
    return (
        <div>
        <Modal title={this.props.title}
            visible={this.props.visible}
            confirmLoading={confirmLoading}
            onCancel={this.props.handleCancel}
            footer = ""
        >
        </Modal>
        </div>
    );
    }
}

export default WorkPlan;