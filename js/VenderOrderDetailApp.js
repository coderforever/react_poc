import React from 'react';
import OrderDetail from './components/OrderDetail';
import OrderMenu from './components/OrderMenu';
import LogoFooter from './components/LogoFooter';
import UserConstants from './constants/UserConstants';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.VENDER_LOGIN_URL);

React.render(<OrderMenu role={UserConstants.VENDER_ROLE} />, document.getElementById('menu_bar'));
React.render(<OrderDetail />, document.getElementById('detail_panel'));
React.render(<LogoFooter />, document.getElementById('logo-footer'));
