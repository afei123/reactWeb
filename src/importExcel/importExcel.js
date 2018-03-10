import React , {Component} from 'react'
import { Modal} from 'antd';

//是否显示visible 和关闭方法 均有父组件控制
class ImportExcel extends Component{
      render() {
        return (
          <div>
            <Modal
              visible={this.props.visible}
              title="导入操作"
              onCancel={this.props.handleCancel}
              footer=""
            >
                {this.props.children}
            </Modal>
          </div>
        );
    }
}

export default ImportExcel;