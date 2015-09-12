import React from 'react';
import OrderList from './components/OrderList';
import OrderMenu from './components/OrderMenu';
import UserConstants from './constants/UserConstants';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.CUSTOMER_LOGIN_URL);

React.render(<OrderMenu role={UserConstants.CUSTOMER_ROLE} currentIndex='0'/>, document.getElementById('menu_bar'));
React.render(<OrderList role={UserConstants.CUSTOMER_ROLE} />, document.getElementById('list_panel'));
