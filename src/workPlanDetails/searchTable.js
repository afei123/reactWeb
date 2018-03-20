import React ,{Component} from 'react'
import { Table } from 'antd';

const columns = [{
  title: '工作人员',
  dataIndex: 'workerName',
}, {
  title: '工作地点',
  dataIndex: 'districtName',
}, {
  title: '开始时间',
  dataIndex: 'beginDate',
}, {
  title: '结束时间',
  dataIndex: 'endDate',
}, {
  title: '详情',
  dataIndex: 'detail',
}, {
  title: '是否完成',
  dataIndex: 'isOk',
}];


class SearchTable extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };
  componentDidMount(){
    console.log("++++++++++++++++++++++++++++++",this.props.data)
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { selectedRowKeys } = this.state;
    var pagination = {
        pageSize: 10
    }
    return (
      <Table columns={columns} dataSource={this.props.data} pagination={pagination} rowKey = 'id'/>
    );
  }
}

export default SearchTable;