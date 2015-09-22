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
import ModalTmpl from './ModalTmpl';

export default class ManageVender extends React.Component {

    constructor() {
        super();
        this.state = {
            userType: UserConstants.SYSADMIN_ROLE,
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
                    venders : result.venders
                })
            }
        }.bind(this));
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onRegister.bind(this));
    }

    render() {
        let venders = this.state.venders;
        let operation = function (cell, row) {
            return '<Button bsStyle="danger">删除</Button> ';
        }
        return (
            <Grid>
                <BootstrapTable data={venders} pagination={true} striped={true} hover={true}>
                    <TableHeaderColumn dataField="id" isKey={true} hidden>商家ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">商家名称</TableHeaderColumn>
                    <TableHeaderColumn dataField="address">商家地址</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={operation}>操作</TableHeaderColumn>
                </BootstrapTable>
                <Button bsStyle="success" className="pull-right" onClick={this._showModal.bind(this)}>注册商户</Button>

            </Grid>

        );
    }

    _showModal() {
        React.render(<ModalTmpl title='新增商户'/>, document.getElementById('modal_section'));
    }

    _onRegister(code) {
        console.log(`code : ${code}`);
        if (code == Codes.SUCCESS) {
            alert('注册成功');
            window.location.href = 'manageVender.html';
        } else {
            alert('注册失败');
        }

    }

}