import React from 'react';
import OrderActions from '../actions/OrderActions';
import OrderConstants from '../constants/OrderConstants';
import { Button } from 'react-bootstrap';

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
                    <Button bsStyle='success' type='submit' id='create_submit'>确认创建</Button>
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
        var value=event.target.value;
        if(value.length>OrderConstants.ORDER_NAME_LIMIT){
            this.setState({
                orderName_validate:false,
                orderName: event.target.value
            });
        }
        else{
            this.setState({
                orderName_validate:true,
                orderName: event.target.value
            });
        }
    }

    _descInputChange(event){
        var value=event.target.value;
        if(value.length>OrderConstants.ORDER_DESC_LIMIT){
            this.setState({
                orderDesc_validate:false,
                orderDescription: event.target.value
            });
        }
        else{
            this.setState({
                orderDesc_validate:true,
                orderDescription: event.target.value
            });
        }
    }

}