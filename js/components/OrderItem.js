import React from 'react';
import OrderActions from '../actions/OrderActions';
import UserConstants from '../constants/UserConstants';

export default class OrderList extends React.Component {
    render() {
        let id=this.props.oid, name=this.props.name, createTime=this.props.createTime, vender=this.props.vender, user=this.props.user, status=this.props.status, detailLink=(this.props.role==UserConstants.CUSTOMER_ROLE ? 'customerOrderDetail.html' : 'venderOrderDetail.html');
        return (
            <div className='orderItem' onClick={()=>this._linkToDetail(detailLink+'?id='+id)}>
                <div className='orderItem_name'>{name}</div>
                <div className='orderItem_description'>
                    <table>
                        <tr>
                            <th>创建时间：</th>
                            <td>{createTime}</td>
                        </tr>
                        <tr>
                            <th>状态：</th>
                            <td>{status}</td>
                        </tr>
                        <tr>
                            <th>{this.props.role==UserConstants.CUSTOMER_ROLE ? '供应商':'买家'}：</th>
                            <td>{this.props.role==UserConstants.CUSTOMER_ROLE ? vender:user}</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }

    _linkToDetail(url){
        document.location.href=url;
    }
}