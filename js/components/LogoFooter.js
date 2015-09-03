import React from 'react';
import { Navbar } from 'react-bootstrap';

export default class LogoFooter extends React.Component {

    render() {
        return (
            <Navbar fixedBottom>
                <div className='text-center'>
                    <span>OOTP Corporation</span>
                </div>
            </Navbar>
        )
    }
}