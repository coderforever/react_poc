import React from 'react';
import OrderList from './components/OrderList';
import OrderMenu from './components/OrderMenu';
import LogoFooter from './components/LogoFooter';
import UserConstants from './constants/UserConstants';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.VENDER_LOGIN_URL);

React.render(<OrderMenu role={UserConstants.VENDER_ROLE} />, document.getElementById('menu_bar'));
React.render(<OrderList role={UserConstants.VENDER_ROLE} />, document.getElementById('list_panel'));
React.render(<LogoFooter />, document.getElementById('logo-footer'));
