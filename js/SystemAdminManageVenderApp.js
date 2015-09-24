import React from 'react';
import AdminMenu from './components/AdminMenu';
import ManageVender from './components/ManageVender';
import UserConstants from './constants/UserConstants';
import $ from 'jquery';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.SYSADMIN_LOGIN_URL);
React.render(<AdminMenu />, document.getElementById('menu_bar'));
React.render(<ManageVender />, document.getElementById('admin_panel'));

$('div.menuBar a.manageVender').addClass('current');
