import React from 'react';
import OrderActions from '../actions/OrderActions';
import UserConstants from '../constants/UserConstants';

export default class OrderList extends React.Component {
    render() {
        let id=this.props.oid, name=this.props.name, description=this.props.description, detailLink=(this.props.role==UserConstants.CUSTOMER_ROLE ? 'customerOrderDetail.html' : 'venderOrderDetail.html');
        return (
            <div className='orderItem' onClick={()=>this._linkToDetail(detailLink+'?id='+id)}>
                <div className='orderItem_name'>{name}</div>
                <div className='orderItem_description'>{description}</div>
            </div>
        );
    }

    _linkToDetail(url){
        document.location.href=url;
    }
}