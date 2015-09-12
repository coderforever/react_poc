import React from 'react';
import NewOrder from './components/NewOrder';
import OrderMenu from './components/OrderMenu';
import UserConstants from './constants/UserConstants';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.CUSTOMER_LOGIN_URL);

React.render(<OrderMenu role={UserConstants.CUSTOMER_ROLE} currentIndex='1'/>, document.getElementById('menu_bar'));
React.render(<NewOrder />, document.getElementById('new_order_panel'));
