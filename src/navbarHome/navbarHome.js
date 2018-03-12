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
import '../../node_modules/antd/lib/date-picker/style/css'
import '../../node_modules/antd/lib/select/style/css'
import './navbarHome.css';

import ImportExcel from '../importExcel/importExcel'
import {UploadExcel} from '../importExcel/uploadExcelForm'

import { Layout, Menu, Icon ,Button,Row,Col} from 'antd';
const { Header, Sider, Content } = Layout;


class NavbarHome extends Component{
    constructor(){
        super();
        this.state = {
            visible:false,
            collapsed: false,
        };
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    importExcel = () =>{
        this.setState({visible:true})
    }
    menuOnClick = ({ item, key, keyPath }) =>{
        window.location.href = key
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
            <Menu onClick={this.menuOnClick} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="meterReader" >
                <Icon type="user" />
                <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="/managerment">
                <Icon type="video-camera" />
                <span>账单管理</span>
            </Menu.Item>
            <Menu.Item key="/jobDetails">
                <Icon type="upload" />
                <span>详细工作安排</span>
            </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0,textAlign:'center' }}>
                <Row>
                    <Col span={6}>
                        <Button type="primary" href="/workCalender">工作日历</Button>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" onClick={this.importExcel}>导入数据</Button>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" href="/workCalender">待定</Button>
                    </Col>
                    <Col span={6}>
                        <Button type="primary">待定</Button>
                    </Col>
                </Row>
            <ImportExcel visible = {this.state.visible} handleCancel = {this.handleCancel}>
                <UploadExcel handleCancel = {this.handleCancel}/>
            </ImportExcel>
            </Header>
            {/* 框里面的内容 */}
            <Content style={{ margin: '24px 16px 0', padding: 24, background: '#fff',overflow: 'auto', minHeight: 280 }}>
                {this.props.children}
            </Content>
        </Layout>
        </Layout>
    );
    }
}

export default NavbarHome;