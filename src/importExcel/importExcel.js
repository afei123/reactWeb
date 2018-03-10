import React , {Component} from 'react'
import { Modal, Button, Input } from 'antd';
import {UploadExcel} from './uploadExcelForm'
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
              footer=""
            >
                <UploadExcel handleCancel={this.handleCancel}/>
            </Modal>
          </div>
        );
    }
}

export default ImportExcel;