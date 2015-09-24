import React from 'react';
import AdminLogin from './components/AdminLogin';
import LogoFooter from './components/LogoFooter';
import UserConstants from './constants/UserConstants';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.VENDERADMIN_LOGIN_URL);

React.render(<AdminLogin role={UserConstants.ADMIN_ROLE} title='商家管理员登录' />, document.getElementById('login-wrapper'));
React.render(<LogoFooter />, document.getElementById('logo-footer'));
