import React , {Component} from 'react'
import { Modal, Button, Input } from 'antd';
import UploadExcelForm from './uploadExcelForm'
import { _saveMonthPlanText } from '../api'
const { TextArea } = Input;

class ImportExcel extends Component{
    state = {
        loading: false,
        visible: false,
      }
      
      componentWillReceiveProps(nextProps){
          this.state.visible = nextProps.visible
      }

      //antd组件
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
      handleCancel = () => {
        this.setState({ visible: false });
      }
      render() {
        const { visible, loading } = this.state;
        return (
          <div>
            <Modal
              visible={visible}
              title="导入操作"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>返回</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  提交
                </Button>,
              ]}
            >
                <UploadExcelForm />
            </Modal>
          </div>
        );
    }
}

export default ImportExcel;