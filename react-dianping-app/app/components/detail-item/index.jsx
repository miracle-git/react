import { React, PureRenderMixin } from '@/imports/react-lib';
import { Stars } from '@/imports/com-lib';

import './style.less';

export default class DetailItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const item = this.props.item;

    return (
      <div id='detail-item-container'>
        <div className='clear-fix'>
          <div className='detail-item-left float-left'>
            <img src={require(`.${item.img}`)} alt={item.title}/>
          </div>
          <div className='detail-item-right'>
            <h1>{item.title}</h1>
            <div className='price-container'>
              <Stars number={item.star} />
              <span className='price'>￥{item.price}</span>
            </div>
            <p className='detail-item-subtitle'>{item.subTitle}</p>
          </div>
        </div>
        <p className='detail-item-desc' dangerouslySetInnerHTML={{__html:item.desc}}></p>
      </div>
    )
  }
}