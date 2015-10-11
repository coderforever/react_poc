import React from 'react';
import UserConstants from './constants/UserConstants';
import PermissionCheck from './PermissionCheck';
import Profile from './components/CustomerProfile';
import TitleBar from './components/TitleBar'

PermissionCheck.loginCheck(UserConstants.CUSTOMER_LOGIN_URL);

React.render(<TitleBar role={UserConstants.CUSTOMER_ROLE} name='我的信息'/>, document.getElementById('menu_bar'));
React.render(<Profile role={UserConstants.CUSTOMER_ROLE} />, document.getElementById('list_panel'));
