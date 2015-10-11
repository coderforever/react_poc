import React from 'react';
import UserStore from '../stores/UserStore';

export default class TitleBar extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.log("title bar render");

        return (
            <div className='menuBar'>
                {this.props.name}
            </div>

        );
    }

    _refreshProfile() {

    }
}