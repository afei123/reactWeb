import React ,{Component} from 'react'
import { Table } from 'antd';

const columns = [{
  title: '手机号',
  dataIndex: 'phone',
  key: 'phone'
}, {
  title: '水表号',
  dataIndex: 'waterMeterId',
  key: 'waterMeterId'
}, {
  title: '用水量',
  dataIndex: 'useWater',
  key: 'useWater'
}, {
  title: '抄表员',
  dataIndex: 'workerName',
  key: 'workerName'
}, {
  title: '花费',
  dataIndex: 'spend',
  key: 'spend'
}, {
  title: '余额',
  dataIndex: 'gold',
  key: 'gold'
}, {
  title: '日期',
  dataIndex: 'date',
  key: 'date'
}];


class SearchTable extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };
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
      <Table columns={columns} dataSource={this.props.dataSource} pagination={pagination} rowKey = 'date'/>
    );
  }
}

export default SearchTable;