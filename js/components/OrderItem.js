import React from 'react';
import { Link } from 'react-router';
import OrderActions from '../actions/OrderActions';
import UserConstants from '../constants/UserConstants';

export default class OrderList extends React.Component {
    render() {
        let id = this.props.oid, name = this.props.name, description = this.props.description;

        return (
            <div className='orderItem'>
                <div className='orderItem_name'>{name}</div>
                <div className='orderItem_description'>{description}</div>
                <div className='orderItem_operations'>
                    <Link to={'/'+this.props.role+'/order/detail/id'+`/${id}`} className='normal_btn'> 查看详情</Link>
                </div>
            </div>
        );
    }


}