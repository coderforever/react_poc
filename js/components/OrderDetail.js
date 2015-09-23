import React from 'react';
import OrderStore from '../stores/OrderStore';
import UserConstants from '../constants/UserConstants';
import OrderActions from '../actions/OrderActions';
import Codes from '../constants/Codes';

export default class OrderDetail extends React.Component {

    componentDidMount() {
        OrderStore.addChangeListener(this._onUpdate.bind(this));
    }

    componentWillUnmount() {
        OrderStore.removeChangeListener(this._onUpdate.bind(this));
    }

    render() {
        let search = location.search, regex = /^\?id=(\d+)$/, results = regex.exec(search), role=this.props.role;

        if (results != null && results.length == 2) {
            let order = OrderStore.getOrder(results[1], role);
            let actions=order.actions;
            let actionButtons=[];
            for(let i=0;i<actions.length;i++){
                actionButtons.push(<a className='normal_btn' onClick={()=>this._triggerAction(results[1], actions[i].id, role)} href='javascript:;'>{actions[i].name}</a>);
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

    _triggerAction(orderID, actionID, role){
        OrderActions.updateOrder({
            orderID: orderID,
            actionID: actionID,
            token: localStorage['token'],
            role: role
        });
    }

    _onUpdate(code) {
        if (code == Codes.SUCCESS) {
            alert('订单操作成功!');
            window.location.href = UserConstants.LOGIN_SUCCESS_URL[this.props.role];
        } else {
            alert('订单操作失败!');
        }
    }
}