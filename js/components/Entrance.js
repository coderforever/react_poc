import React from 'react';
import { Col, Grid, Row, Glyphicon } from 'react-bootstrap';

export default class Entrance extends React.Component {

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={8}>
                        <a href='/customerProfile.html'>
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
                        <a href='/newOrder.html'>
                            <div className='service'><span className='module-name'>汽车</span></div>
                        </a>
                    </Col>
                    <Col xs={4}>
                        <a href='/newOrder.html'>
                            <div className='service'><span className='module-name'>手机</span></div>
                        </a>
                    </Col>
                    <Col xs={4}>
                        <a href='/newOrder.html'>
                            <div className='service'><span className='module-name'>家居</span></div>
                        </a>
                    </Col>
                </Row>

            </Grid>
        );
    }

}