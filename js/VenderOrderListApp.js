import React from 'react';
import OrderList from './components/OrderList';
import OrderMenu from './components/OrderMenu';
import UserConstants from './constants/UserConstants';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.VENDER_LOGIN_URL);

React.render(<OrderMenu role={UserConstants.VENDER_ROLE} currentIndex='0'/>, document.getElementById('menu_bar'));
React.render(<OrderList role={UserConstants.VENDER_ROLE} />, document.getElementById('list_panel'));
