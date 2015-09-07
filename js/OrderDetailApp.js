import React from 'react';
import OrderDetail from './components/OrderDetail';
import OrderMenu from './components/OrderMenu';
import LogoFooter from './components/LogoFooter';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck();

React.render(<OrderMenu />, document.getElementById('menu_bar'));
React.render(<OrderDetail />, document.getElementById('detail_panel'));
React.render(<LogoFooter />, document.getElementById('logo-footer'));
