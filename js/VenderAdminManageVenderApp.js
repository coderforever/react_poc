import React from 'react';
import AdminMenu from './components/AdminMenu';
import VaManageVender from './components/VaManageVender';
import UserConstants from './constants/UserConstants';
import $ from 'jquery';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.VENDERADMIN_LOGIN_URL);

React.render(<AdminMenu role={UserConstants.ADMIN_ROLE}/>, document.getElementById('menu_bar'));
React.render(<VaManageVender role={UserConstants.ADMIN_ROLE} />, document.getElementById('admin_panel'));

$('div.menuBar a.manageVender').addClass('current');
