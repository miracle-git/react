import { React, PureRenderMixin } from '@/imports/react-lib';

import './style.less';

export default class UserBuyFav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id='buy-fav-container' className='clear-fix'>
        <div className='buy-fav-item float-left'>
          {
            // 判断是否收藏显示不同状态的按钮
            this.props.isFav ?
                <button className='selected' onClick={this.props.onFav}>已收藏</button> :
                <button onClick={this.props.onFav}>收藏</button>
          }
        </div>
        <div className='buy-fav-item float-right'>
          <button onClick={this.props.onBuy}>购买</button>
        </div>
      </div>
    )
  }
}