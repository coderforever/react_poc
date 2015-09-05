import React from 'react';
import OrderActions from '../actions/OrderActions';
import OrderConstants from '../constants/OrderConstants';

export default class NewOrder extends React.Component {
    constructor(){
        super();
        this.state={
            orderName: '',
            orderDescription: '',
            orderName_validate:true,
            orderDesc_validate:true
        };
    }

    render(){
        console.log(this.state);
        return (
            <div className='create_div'>
                <form onSubmit={this._submitOrder.bind(this)}>
                    <label htmlFor='orderName_input' className='submit_label'>订单名称: </label><br/>
                    <input type='text' placeholder={'请输入订单名称（不超过'+OrderConstants.ORDER_NAME_LIMIT+'字）'} value={this.state.orderName} id='orderName_input' className={this.state.orderName_validate ? '' : 'error'} onChange={this._nameInputChange.bind(this)}/><br/>
                    <label htmlFor='orderDesc_input' className='submit_label'>描述信息: </label><br/>
                    <textarea placeholder={'请输入描述信息（不超过'+OrderConstants.ORDER_DESC_LIMIT+'字）'} value={this.state.orderDescription} id='orderDesc_input' className={this.state.orderDesc_validate ? '' : 'error'} onChange={this._descInputChange.bind(this)}/><br/>
                    <button type='submit' id='create_submit' className='normal_btn'>确认创建</button>
                </form>
            </div>
        );
    }

    _submitOrder(event){
        // prevent form submit by default
        event.preventDefault();

        if(this.state.orderName_validate && this.state.orderDesc_validate){
            OrderActions.createOrder({
                name: this.state.orderName,
                description: this.state.orderDescription
            });
        }
    }

    _nameInputChange(event){
        let value=event.target.value;
        this.setState({
            orderName_validate:value.length<=OrderConstants.ORDER_NAME_LIMIT,
            orderName: value
        });
    }

    _descInputChange(event){
        let value=event.target.value;
        this.setState({
            orderDesc_validate:value.length<=OrderConstants.ORDER_DESC_LIMIT,
            orderDescription: value
        });
    }

}