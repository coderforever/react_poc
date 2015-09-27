import React from 'react';
import AdminMenu from './components/AdminMenu';
import SysManageService from './components/SysManageService';
import UserConstants from './constants/UserConstants';
import $ from 'jquery';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.SYSADMIN_LOGIN_URL);
React.render(<AdminMenu role={UserConstants.SYSADMIN_ROLE}/>, document.getElementById('menu_bar'));
React.render(<SysManageService role={UserConstants.SYSADMIN_ROLE}/>, document.getElementById('admin_panel'));

$('div.menuBar a.manageService').addClass('current');
