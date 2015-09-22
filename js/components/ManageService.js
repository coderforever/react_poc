/**
 * Created by apple on 15/9/21.
 */
import React from 'react';
import UserConstants from '../constants/UserConstants';
import ServiceStore from '../stores/ServiceStore';
import Codes from '../constants/Codes';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Col, Grid, Row, Glyphicon, Button } from 'react-bootstrap';
import $ from 'jquery';
import AdminServiceModal from './AdminServiceModal';

export default class ManageService extends React.Component {

    constructor() {
        super();
        this.state = {
            userType: UserConstants.SYSADMIN_ROLE,
            services: []
        };
    }

    componentDidMount() {
        ServiceStore.addChangeListener(this._onAddService.bind(this));

        $.get('/services', function (result) {
            if (result.code == Codes.SUCCESS) {
                this.setState({
                    services: result.services
                });
            }
        }.bind(this));
    }

    componentWillUnmount() {
        ServiceStore.removeChangeListener(this._onAddService.bind(this));
    }

    render() {

        let services = this.state.services;
        let operation = function (cell, row) {
            return '<Button bsStyle="danger">删除</Button> ';
        }
        return (

            <Grid>
                <BootstrapTable data={services} pagination={true} striped={true} hover={true}>
                    <TableHeaderColumn dataField="id" isKey={true} hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">名称</TableHeaderColumn>
                    <TableHeaderColumn dataField="description">描述</TableHeaderColumn>
                    <TableHeaderColumn dataField="category">类别</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={operation}>操作</TableHeaderColumn>
                </BootstrapTable>
                <Button bsStyle="success" className="pull-right" onClick={this._showModal.bind(this)}>添加服务</Button>

            </Grid>

        );
    }

    _showModal() {
        React.render(<AdminServiceModal title='新增服务'/>, document.getElementById('modal_section'));
    }

    _onAddService(code) {
        console.log(`code : ${code}`);
        if (code == Codes.SUCCESS) {
            alert('成功');
            window.location.href = 'manageService.html';
        } else {
            alert('失败');
        }
    }

}