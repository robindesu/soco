import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon  } from  'antd';
import {LogoName} from '../styled_components/baseComponents';

const { Sider } = Layout;

export default function SideMenu() {
  return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
    >
      <LogoName>Soco</LogoName>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to='/'>
            <Icon type="user" />
            <span className="nav-text">Cooperativa</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/materialrecebido'>
            <span className="nav-text">Material Recebido</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to='/materialvendido'>
            <span className="nav-text">Material Vendido</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
