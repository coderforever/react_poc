import React from 'react';
import AdminMenu from './components/AdminMenu';
import ManageVender from './components/ManageVender';
import ModalTmpl from './components/ModalTmpl';

React.render(<AdminMenu />, document.getElementById('menu_bar'));
React.render(<ManageVender />, document.getElementById('admin_panel'));
