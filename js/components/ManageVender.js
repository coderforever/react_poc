/**
 * Created by apple on 15/9/21.
 */
import React from 'react';
import UserConstants from '../constants/UserConstants';
import UserStore from '../stores/UserStore';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Col, Grid, Row, Glyphicon, Button } from 'react-bootstrap';
import $ from 'jquery';
import ModalTmpl from './ModalTmpl';

export default class ManageVender extends React.Component {

    constructor() {
        super();
        this.state = {
            userType: UserConstants.SYSADMIN_ROLE,
            venders: []
        };
    }

    componentDidMount() {
        UserStore.addChangeListener(this._onRegister.bind(this));
        $.get('/venders', function (result) {
            if (result.code == Codes.SUCCESS) {
                this.state.venders.push(result.venders);
            }
        }.bind(this));
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onRegister.bind(this));
    }

    render() {

        let modalTmpl = new ModalTmpl();

        let venders = [{
            vender_id: 1,
            vender_name: 'Apple',
            vender_address: 'San Francisco'
        }, {
            vender_id: 2,
            vender_name: 'Google',
            vender_address: 'Seattle'
        }, {
            vender_id: 3,
            vender_name: 'Microsoft',
            vender_address: 'Los Angeles'
        }]

        return (
            <Grid>
                <BootstrapTable data={venders} pagination={true} striped={true} hover={true}>
                    <TableHeaderColumn dataField="vender_id" isKey={true}>商家ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="vender_name">商家名称</TableHeaderColumn>
                    <TableHeaderColumn dataField="vender_address">商家地址</TableHeaderColumn>
                </BootstrapTable>
                <Button bsStyle="success" className="pull-right" onClick={this._showModal.bind(this)}>注册商户</Button>

            </Grid>

        );
    }

    _showModal(){
        React.render(<ModalTmpl title='新增商户' />, document.getElementById('modal_section'));
    }

    _registerVender() {

    }

    _onRegister() {

    }

}