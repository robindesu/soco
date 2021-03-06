import React from 'react';
import {Layout} from 'antd';
import UserHeader from './components/userHeader';
import UserInformation from './components/userInformation';
import {SaveButton} from 'styled_components/baseComponents';
const { Content } = Layout;

export default function User() {
  return (
        <Content>
            <UserHeader/>
            <UserInformation/>
        </Content>
  );
}
