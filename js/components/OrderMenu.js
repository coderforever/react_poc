import React from 'react';

export default class OrderMenu extends React.Component {

    render() {
        return (
            <div className='orderMenuBar'>
                <div className='menuGroup'>
                    <a className='menuItem' href='/orderList.html'>订单管理</a>
                    <a className='menuItem' href='/newOrder.html'>新建订单</a>
                    <a className='menuItem'>个人信息</a>
                </div>
            </div>
        );
    }
}