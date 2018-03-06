import React, { Component } from 'react';

import '../../node_modules/antd/lib/icon/style/css';
import '../../node_modules/antd/lib/menu/style/css';
import '../../node_modules/antd/lib/layout/style/css';
//import '../../node_modules/antd/lib/breadcrumb/style/css';
import '../../node_modules/antd/lib/button/style/css';
import '../../node_modules/antd/lib/col/style/css';
import '../../node_modules/antd/lib/row/style/css';
import './navbarHome.css';
import MeterReader from '../meterReader/meterReader';
import Managerment from '../managerment/managerment';
import ThreePage from '../threePage/threePage';

import { Layout, Menu, Icon ,Breadcrumb,Button,Row,Col} from 'antd';
const { Header, Sider, Content } = Layout;


class NavbarHome extends Component{
    constructor(){
        super();
        this.state = {
            collapsed: false,
            MyContext: 'meterReader',
            ContextMap:{
                'meterReader':<MeterReader></MeterReader>,
                'managerment':<Managerment></Managerment>,
                'threePage':<ThreePage></ThreePage>
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
                        <Button type="primary">Primary</Button>
                    </Col>
                    <Col span={6}>
                        <Button type="primary">Primary</Button>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" onClick={this.clickButton} value='managerment'>Primary</Button>
                    </Col>
                    <Col span={6}>
                        <Button type="primary">Primary</Button>
                    </Col>
                </Row>
            </Header>
            {/* 框里面的内容 */}
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                {this.state.ContextMap[this.state.MyContext]}
            </Content>
        </Layout>
        </Layout>
    );
    }
}

export default NavbarHome;