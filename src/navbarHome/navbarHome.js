import React, { Component } from 'react';

import '../../node_modules/antd/lib/icon/style/css';
import '../../node_modules/antd/lib/menu/style/css';
import '../../node_modules/antd/lib/layout/style/css';
import '../../node_modules/antd/lib/button/style/css';
import '../../node_modules/antd/lib/col/style/css';
import '../../node_modules/antd/lib/row/style/css';
import '../../node_modules/antd/lib/form/style/css'
import '../../node_modules/antd/lib/input/style/css'
import '../../node_modules/antd/lib/table/style/css'
import '../../node_modules/antd/lib/calendar/style/css'
import '../../node_modules/antd/lib/alert/style/css'
import '../../node_modules/antd/lib/modal/style/css'
import '../../node_modules/antd/lib/checkbox/style/css'

import './navbarHome.css';
import MeterReader from '../meterReader/meterReader';
import Managerment from '../managerment/managerment';
import ThreePage from '../threePage/threePage';
import WorkCalender from '../workCalender/workCalender';

import ImportExcel from '../importExcel/importExcel'
import { Layout, Menu, Icon ,Button,Row,Col} from 'antd';
const { Header, Sider, Content } = Layout;


class NavbarHome extends Component{
    constructor(){
        super();
        this.state = {
            visible:false,
            collapsed: false,
            MyContext: 'meterReader',
            ContextMap:{
                'meterReader':<MeterReader></MeterReader>,
                'managerment':<Managerment></Managerment>,
                'threePage':<ThreePage></ThreePage>,
                'workCalender':<WorkCalender></WorkCalender>
            }
        };
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    clickButton = (val) =>{
        this.function({key:val.target.value});
    }
    function = ({ item, key, keyPath }) => {
        this.setState({
            MyContext:key
        })
    }
    importExcel = () =>{
        this.setState({
            visible:true
        })
    }
    componentDidUpdate(){
        this.state.visible = false;
    }
    render() { 
    return (
        <Layout style={{height:'100%'}}>
        <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
        >
            <div className="logo" onClick={this.toggle}/>
            <Menu onClick={this.function} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="meterReader" >
                <Icon type="user" />
                <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="managerment">
                <Icon type="video-camera" />
                <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="threePage">
                <Icon type="upload" />
                <span>nav 3</span>
            </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0,textAlign:'center' }}>
                <Row>
                    <Col span={6}>
                        <Button type="primary" onClick={this.clickButton} value = 'workCalender'>工作日历</Button>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" onClick={this.importExcel}>导入数据</Button>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" onClick={this.clickButton} value='managerment'>Primary</Button>
                    </Col>
                    <Col span={6}>
                        <Button type="primary">Primary</Button>
                    </Col>
                </Row>
            <ImportExcel visible = {this.state.visible}/>
            </Header>
            {/* 框里面的内容 */}
            <Content style={{ margin: '24px 16px 0', padding: 24, background: '#fff',overflow: 'auto', minHeight: 280 }}>
                {this.state.ContextMap[this.state.MyContext]}
            </Content>
        </Layout>
        </Layout>
    );
    }
}

export default NavbarHome;