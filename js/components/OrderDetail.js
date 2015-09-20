import React from 'react';
import OrderStore from '../stores/OrderStore';
import UserConstants from '../constants/UserConstants';

export default class OrderDetail extends React.Component {

    render() {
        let search = location.search, regex = /^\?id=(\d+)$/, results = regex.exec(search), role=this.props.role;

        if (results != null && results.length == 2) {
            let order = OrderStore.getOrder(results[1], role);
            let actions=order.actions;
            let actionButtons=[];
            for(let i=0;i<actions.length;i++){
                actionButtons.push(<a className='normal_btn' onClick={()=>this._triggerAction(actions[i].id)} href='javascript:;'>{actions[i].name}</a>);
            }
            return (
                <div className='orderDetail'>
                    <div className='orderTitle'>{order.service}</div>
                    <div className='orderDesc'>
                        <table cellspacing='10'>
                            <tr>
                                <th>创建时间：</th>
                                <td>{order.create_time}</td>
                            </tr>
                            <tr>
                                <th>状态：</th>
                                <td>{order.process}</td>
                            </tr>
                            <tr>
                                <th>{role==UserConstants.CUSTOMER_ROLE ? '供应商':'买家'}：</th>
                                <td>{role==UserConstants.CUSTOMER_ROLE ? order.vender:order.user}</td>
                            </tr>
                        </table>
                    </div>
                    <div className='orderAcceptOps'>
                        {actionButtons}
                    </div>
                    <div className='orderDenialOps'>
                        <a className='red_btn' onClick={()=>this._deleteOrder(id)} href='javascript:;'>删除</a>
                        <a className='red_btn' onClick={()=>this._rejectOrder(id)} href='javascript:;'>拒绝订单</a>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className='orderDetail'>
                    <div className='errorMsg'>订单详情页面的URL地址不正确！</div>
                </div>
            );
        }
    }

    _deleteOrder(id) {
        console.log('Delete order: ' + id);
        OrderActions.deleteOrder(id);
    }

    _rejectOrder(id) {
        console.log('Reject order: ' + id);
    }

    _triggerAction(action_id){
        console.log('Action: '+action_id);
    }
}