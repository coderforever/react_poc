import React from 'react';

export default class OrderMenu extends React.Component {

    render() {
        return (
            <div className='orderMenuBar'>
                <div className='menuGroup'>
                    <a className='menuItem' href='/orderList.html'>订单管理</a>
                    <a className='menuItem' href='/newOrder.html'>创建订单</a>
                    <a className='menuItem personInfo'><span className="glyphicon glyphicon-user"></span></a>
                </div>
            </div>
        );
    }
}