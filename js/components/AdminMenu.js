import React from 'react';

export default class AdminMenu extends React.Component {

    render() {

        return (
            <div className='menuBar'>
                <div className='menuGroup'>
                    <a className='menuItem manageVender' href='/manageVender.html'>商家管理</a>
                    <a className='menuItem manageService' href='/manageService.html'>服务管理</a>
                </div>
            </div>
        );
    }
}