import React from 'react';
import UserStore from '../stores/UserStore';

export default class CustomerProfile extends React.Component {

    constructor() {
        super();
        this.state = {
            nickname: '',
            mobile: '',
            email: '',
            address: ''
        };
    }

    componentDidMount() {
        UserStore.addChangeListener(()=>this._refreshProfile());
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(()=>this._refreshProfile());
    }

    render() {
        console.log("customer profile render");

        return (
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <tbody>
                    <tr>
                        <td>昵称</td>
                        <td><input className='form-control' placeholder='请输入昵称'/></td>
                    </tr>
                    <tr>
                        <td>手机号</td>
                        <td><input className='form-control' placeholder='请输入手机号'/></td>
                    </tr>
                    <tr>
                        <td>邮箱</td>
                        <td><input className='form-control' placeholder='请输入邮箱'/></td>
                    </tr>
                    <tr>
                        <td>地址</td>
                        <td><input className='form-control' placeholder='请输入地址'/></td>
                    </tr>
                    </tbody>
                </table>
                <button className='btn btn-success btn-block footer'>更新我的信息</button>
            </div>

        );
    }

    _refreshProfile() {

    }
}