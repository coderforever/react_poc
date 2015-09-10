import React from 'react';
import { Link } from 'react-router';
import OrderActions from '../actions/OrderActions';
import UserConstants from '../constants/UserConstants';

export default class OrderList extends React.Component {
    render() {
        let id = this.props.oid, name = this.props.name, description = this.props.description, detailLink = (this.props.role == UserConstants.CUSTOMER_ROLE ? 'customerOrderDetail.html' : 'venderOrderDetail.html');

        return (
            <div className='orderItem'>
                <div className='orderItem_name'>{name}</div>
                <div className='orderItem_description'>{description}</div>
                <div className='orderItem_operations'>
                    <Link to={'/detail/id'+`/${id}`} className='normal_btn'> 查看详情</Link>
                </div>
            </div>
        );
    }

    _deleteOrder(id) {
        console.log('Delete order: ' + id);
        OrderActions.deleteOrder(id);
    }

    _rejectOrder(id) {
        console.log('Reject order: ' + id);
    }

    _confirmOrder(id) {
        console.log('Confirm order: ' + id);
    }

    _completeOrder(id) {
        console.log('Complete order: ' + id);
    }

    _acceptOrder(id) {
        console.log('Accept order: ' + id);
    }
}