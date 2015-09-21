/**
 * Created by apple on 15/9/21.
 */
import React from 'react';
import { Panel, Glyphicon, Input, Button, DropdownButton } from 'react-bootstrap';
import $ from 'jquery';

export default class GrantVender extends React.Component {

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

        return (
            <Panel/>
        );
    }

}