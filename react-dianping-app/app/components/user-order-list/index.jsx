import { React, PureRenderMixin } from '@/imports/react-lib';
import { Loading } from '@/imports/com-lib';
import OrderItem from './item';

import './style.less';

export default class UserOrderList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id='order-list-container' className='section-container'>
        <h2>您的订单</h2>
        {
          this.props.data.length ?
          (
            <div className='order-list'>
              {
                this.props.data.map((item, index) => {
                  return <OrderItem key={index} data={item} onSubmitComment={this.props.onSubmitComment}/>
                })
              }
            </div>
          ) : <Loading />
        }
      </div>
    )
  }
}