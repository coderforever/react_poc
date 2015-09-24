import React from 'react';
import AdminMenu from './components/AdminMenu';
import ManageService from './components/ManageService';
import UserConstants from './constants/UserConstants';
import $ from 'jquery';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.SYSADMIN_LOGIN_URL);
React.render(<AdminMenu />, document.getElementById('menu_bar'));
React.render(<ManageService />, document.getElementById('admin_panel'));

$('div.menuBar a.manageService').addClass('current');
