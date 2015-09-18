import React from 'react';
import Entrance from './components/Entrance';
import UserConstants from './constants/UserConstants';
import PermissionCheck from './PermissionCheck';

PermissionCheck.loginCheck(UserConstants.CUSTOMER_LOGIN_URL);

React.render(<Entrance/>, document.getElementById('entrance-wrapper'));

