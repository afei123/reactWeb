import React ,{Component} from 'react'
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
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