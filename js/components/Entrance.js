import React from 'react';
import { Col, Grid, Row, Glyphicon } from 'react-bootstrap';

export default class Entrance extends React.Component {

    render() {
        const phoneIcon = <Glyphicon glyph='phone'/>;
        const passwordIcon = <Glyphicon glyph='lock'/>;
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={8}>
                        <div className='my-profile'><span className='module-name'>我的信息</span></div>
                    </Col>
                    <Col xs={4}>
                        <div className='my-order'><span className='module-name'>我的订单</span></div>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={4}>
                        <div className='service'><span className='module-name'>汽车服务</span></div>
                    </Col>
                    <Col xs={4}>
                        <div className='service'><span className='module-name'>手机服务</span></div>
                    </Col>
                    <Col xs={4}>
                        <div className='service'><span className='module-name'>其他服务</span></div>
                    </Col>
                </Row>

            </Grid>
        );
    }

}