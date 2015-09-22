import React from 'react';
import AdminMenu from './components/AdminMenu';
import ManageService from './components/ManageService';
import $ from 'jquery';

React.render(<AdminMenu />, document.getElementById('menu_bar'));
React.render(<ManageService />, document.getElementById('admin_panel'));

$('div.menuBar a.manageService').addClass('current');
