import React from 'react';
import AdminMenu from './components/AdminMenu';
import SysManageVender from './components/SysManageVender';
import UserConstants from './constants/UserConstants';
import $ from 'jquery';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.SYSADMIN_LOGIN_URL);

React.render(<AdminMenu role={UserConstants.SYSADMIN_ROLE}/>, document.getElementById('menu_bar'));
React.render(<SysManageVender role={UserConstants.SYSADMIN_ROLE}/>, document.getElementById('admin_panel'));

$('div.menuBar a.manageVender').addClass('current');
