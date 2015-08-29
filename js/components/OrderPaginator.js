import React from 'react';
import OrderConstants from '../constants/OrderConstants';

export default class OrderPaginator extends React.Component {
    render(){
        let orderPaginator=[], page=this.props.page, count=this.props.count, onPageSelect=this.props.onPageSelect;

        if(page<=count){
            if(page>1){
                orderPaginator.push(<div className='pager' onClick={()=>onPageSelect(1)}>&lt;&lt;</div>);
                orderPaginator.push(<div className='pager' onClick={()=>onPageSelect(page-1)}>&lt;</div>);
            }
            let interval=OrderConstants.PAGER_SIZE, startPage=page, endPage=page+interval-1;
            if(endPage>count){
                endPage=count;
                let temp=page-(interval-(endPage-page+1));
                startPage=temp>=1 ? temp:1;
            }
            for(let i=startPage;i<=endPage;i++){
                let pagerClass='pager';
                if(i==page){
                    pagerClass='pager current';
                }
                orderPaginator.push(<div className={pagerClass} onClick={()=>onPageSelect(i)}>{i}</div>);
            }
            if(page<count){
                orderPaginator.push(<div className='pager' onClick={()=>onPageSelect(page+1)}>&gt;</div>);
                orderPaginator.push(<div className='pager' onClick={()=>onPageSelect(count)}>&gt;&gt;</div>);
            }
        }

        return (
            <div className='orderPaginator'>
                {orderPaginator}
            </div>
        );
    }
}