import React from 'react';
import OrderDetail from './components/OrderDetail';
import OrderMenu from './components/OrderMenu';
import UserConstants from './constants/UserConstants';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.CUSTOMER_LOGIN_URL);

React.render(<OrderMenu role={UserConstants.CUSTOMER_ROLE} />, document.getElementById('menu_bar'));
React.render(<OrderDetail role={UserConstants.CUSTOMER_ROLE} />, document.getElementById('detail_panel'));
