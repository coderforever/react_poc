/**
 * Created by apple on 15/9/21.
 */
import React from 'react';
import UserConstants from '../constants/UserConstants';
import UserStore from '../stores/UserStore';
import Codes from '../constants/Codes';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Col, Grid, Row, Glyphicon, Button } from 'react-bootstrap';
import $ from 'jquery';
import AdminVenderModal from './AdminVenderModal';
import RegisterVenderModal from './RegisterVenderModal';

export default class ManageVender extends React.Component {

    constructor() {
        super();
        this.state = {
            userType: UserConstants.SYSADMIN_ROLE,
            admin: '',
            venders: [{
                id: 1,
                name: 'Apple',
                address: 'San Francisco'
            }, {
                id: 2,
                name: 'Google',
                address: 'Seattle'
            }, {
                id: 3,
                name: 'Microsoft',
                address: 'Los Angeles'
            }]
        };
    }

    componentDidMount() {
        UserStore.addChangeListener(this._onRegister.bind(this));

        $.get('/venders', function (result) {
            if (result.code == Codes.SUCCESS) {
                this.setState({
                    venders: result.venders
                })
            }
        }.bind(this));
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onRegister.bind(this));
    }

    render() {
        let search = location.search, regex = /^\?admin=(\w+)&role=(\w+)$/, admin = regex.exec(search), role = regex.exec(search);
        console.log(`admin=${admin}, role=${role}`);
        let venders = this.state.venders;
        let operation = function (cell, row) {
            return '<button class="btn btn-danger">删除</button> ';
        }
        return (
            <Grid>
                <BootstrapTable data={venders} pagination={true} striped={true} hover={true}>
                    <TableHeaderColumn dataField="id" isKey={true} hidden>商家ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">商家名称</TableHeaderColumn>
                    <TableHeaderColumn dataField="address">商家地址</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={operation}>操作</TableHeaderColumn>
                </BootstrapTable>
                <Button bsStyle="primary" className="menu-oper pull-right"
                        onClick={this._showAddVenderModal.bind(this)}>添加商户</Button>
                {role === UserConstants.SYSADMIN_ROLE ?
                    <Button bsStyle="success" className="menu-oper pull-right"
                            onClick={this._showRegisterVenderAdminModal.bind(this)}>注册商户管理员</Button> : ''}

            </Grid>

        );
    }

    _showAddVenderModal() {
        React.render(<AdminVenderModal title='添加商户'/>, document.getElementById('modal_section'));
    }

    _showRegisterVenderAdminModal() {
        React.render(<RegisterVenderModal title='注册商户管理员'/>, document.getElementById('modal_section'));
    }

    _onRegister(code) {
        console.log(`code : ${code}`);
        if (code == Codes.SUCCESS) {
            alert('成功');
            window.location.href = 'manageVender.html';
        } else {
            alert('失败');
        }

    }

}