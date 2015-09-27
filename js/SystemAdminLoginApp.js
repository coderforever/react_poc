import React from 'react';
import AdminLogin from './components/AdminLogin';
import LogoFooter from './components/LogoFooter';
import UserConstants from './constants/UserConstants';
import PermissionCheck from './PermissionCheck';

React.render(<AdminLogin role={UserConstants.SYSADMIN_ROLE} title='系统管理员登录' />, document.getElementById('login-wrapper'));
React.render(<LogoFooter />, document.getElementById('logo-footer'));
