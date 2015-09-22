/**
 * Created by apple on 15/9/21.
 */
import React from 'react';
import UserConstants from '../constants/UserConstants';
import ServiceStore from '../stores/ServiceStore';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Col, Grid, Row, Glyphicon, Button } from 'react-bootstrap';
import $ from 'jquery';

export default class ManageService extends React.Component {

    constructor() {
        super();
        this.state = {
            userType: UserConstants.SYSADMIN_ROLE,
            services: [{
                service_id: 1,
                service_name: 'mobile'
            }, {
                service_id: 2,
                service_name: 'car',
            }]
        };
    }

    componentDidMount() {
        ServiceStore.addChangeListener(this._onAddService.bind(this));

        $.get('/services', function (result) {
            if (result.code == Codes.SUCCESS) {
                this.state.services.push(result.services);
            }
        }.bind(this));
    }

    componentWillUnmount() {
        ServiceStore.removeChangeListener(this._onAddService.bind(this));
    }

    render() {

        let services = this.state.services;
        let operation = function (cell, row){
            return '<Button bsStyle="warning"></Button> ';
        }

        return (
            <Grid>
                <BootstrapTable data={services} pagination={true} striped={true} hover={true} >
                    <TableHeaderColumn dataField="service_id" isKey={true}>服务ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="service_name">服务名称</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={operation}>操作</TableHeaderColumn>
                </BootstrapTable>
                <Button bsStyle="success" className="pull-right" onClick={this._showModal.bind(this)}>添加服务</Button>

            </Grid>

        );
    }

    _showModal() {
        React.render(<ModalTmpl title='新增服务'/>, document.getElementById('modal_section'));
    }

    _onAddService(code) {
        console.log(code);
    }

}