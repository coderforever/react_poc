import React from 'react';
import Login from './components/Login';
import LogoFooter from './components/LogoFooter';
import UserConstants from './constants/UserConstants';

React.render(<Login role={UserConstants.VENDER_ROLE} title='卖家登录'/>, document.getElementById('login-wrapper'));
React.render(<LogoFooter />, document.getElementById('logo-footer'));
