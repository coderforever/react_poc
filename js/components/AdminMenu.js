import React from 'react';
import UserConstants from '../constants/UserConstants';

export default class AdminMenu extends React.Component {
    constructor(){
        super();
        this.state={
            manageVender:'sysManageVender.html',
            manageService:'sysManageService.html'
        }
    }

    componentDidMount() {
        if(this.props.role==UserConstants.SYSADMIN_ROLE){
            this.setState({
                manageVender:'sysManageVender.html',
                manageService:'sysManageService.html'
            })
        } else {
            this.setState({
                manageVender:'venderAdminManageVender.html',
                manageService:'venderAdminManageService.html'
            })
        }
    }

    render() {

        return (
            <div className='menuBar'>
                <div className='menuGroup'>
                    <a className='menuItem manageVender' href={this.state.manageVender}>商家管理</a>
                    <a className='menuItem manageService' href={this.state.manageService}>服务管理</a>
                </div>
            </div>
        );
    }
}