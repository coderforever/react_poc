import React from 'react';

export default class OrderList extends React.Component {
    render(){
        let id=this.props.oid, name=this.props.name, description=this.props.description;

        return (
            <div className="orderItem">
                <div className="orderItem_name">{name}</div>
                <div className="orderItem_description">{description}</div>
            </div>
        );
    }
}