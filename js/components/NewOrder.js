import React from 'react';
import OrderActions from '../actions/OrderActions';
import OrderConstants from '../constants/OrderConstants';
import $ from 'jquery';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Codes from '../constants/Codes';

export default class NewOrder extends React.Component {
    constructor(){
        super();
        this.state={
            orderName: '',
            orderDescription: '',
            venderID: '',
            venderName: '请选择商铺',
            serviceID:'',
            orderName_validate:true,
            orderDesc_validate:true,
            venderID_validate:true,
            serviceID_validate:true,
            venderMenuItems:[<MenuItem eventKey='Test#1'>Test</MenuItem>]
        };
    }

    componentDidMount(){
        $.get('/venders', function(result){
            if(result.code==Codes.SUCCESS){
                for(let vender of result.venders){
                    this.state.venderMenuItems.push(<MenuItem eventKey={vender.name+'#'+vender.id}>{vender.name}</MenuItem>);
                }
            }
        }.bind(this));
    }

    render(){
        let venderSelector='';

        if(this.state.venderMenuItems.length>0){
            venderSelector=(
                <DropdownButton bsStyle={this.state.venderID_validate ? 'default':'danger'} title={this.state.venderName} onSelect={this._venderChange.bind(this)}>
                    {this.state.venderMenuItems}
                </DropdownButton>
            );
        }

        return (
            <div className='create_div'>
                <form onSubmit={this._submitOrder.bind(this)}>
                    <label htmlFor='orderName_input' className='submit_label'>订单名称: </label><br/>
                    <input type='text' placeholder={'请输入订单名称（不超过'+OrderConstants.ORDER_NAME_LIMIT+'字）'} value={this.state.orderName} id='orderName_input' className={this.state.orderName_validate ? '' : 'error'} onChange={this._nameInputChange.bind(this)}/><br/>
                    <label htmlFor='orderDesc_input' className='submit_label'>描述信息: </label><br/>
                    <textarea placeholder={'请输入描述信息（不超过'+OrderConstants.ORDER_DESC_LIMIT+'字）'} value={this.state.orderDescription} id='orderDesc_input' className={this.state.orderDesc_validate ? '' : 'error'} onChange={this._descInputChange.bind(this)}/><br/>
                    <div>
                        {venderSelector}
                    </div>
                    <button type='submit' id='create_submit' className='normal_btn'>确认创建</button>
                </form>
            </div>
        );
    }

    _submitOrder(event){
        // prevent form submit by default
        event.preventDefault();

        if(this.state.orderName_validate && this.state.orderDesc_validate  && this.state.venderID_validate){
            OrderActions.createOrder({
                name: this.state.orderName,
                remark: this.state.orderDescription,
                serviceID: this.state.serviceID
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

    _venderChange(event, key){
        let arr=key.split('#');
        this.setState({
            venderID:arr[1],
            venderName:arr[0],
            venderID_validate:arr[1]!=''
        });
    }
}