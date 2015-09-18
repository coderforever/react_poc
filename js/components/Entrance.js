import React from 'react';
import { Col, Grid, Row, Glyphicon } from 'react-bootstrap';

export default class Entrance extends React.Component {

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={8}>
                        <a herf='#'>
                            <div className='my-profile'><span className='module-name'>我的信息</span></div>
                        </a>
                    </Col>
                    <Col xs={4}>
                        <a href='/customerOrderList.html'>
                            <div className='my-order'><span className='module-name'>我的订单</span></div>
                        </a>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={4}>
                        <a herf='#'>
                            <div className='service'><span className='module-name'>汽车服务</span></div>
                        </a>
                    </Col>
                    <Col xs={4}>
                        <a herf='#'>
                            <div className='service'><span className='module-name'>手机服务</span></div>
                        </a>
                    </Col>
                    <Col xs={4}>
                        <a herf='#'>
                            <div className='service'><span className='module-name'>其他服务</span></div>
                        </a>
                    </Col>
                </Row>

            </Grid>
        );
    }

}