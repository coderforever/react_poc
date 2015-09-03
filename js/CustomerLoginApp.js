import React from 'react';

import CustomerLogin from './components/CustomerLogin';

import LogoFooter from './components/LogoFooter';

React.render(<CustomerLogin />, document.getElementById('login-wrapper'));

React.render(<LogoFooter />, document.getElementById('logo-footer'));
