import { React, PureRenderMixin, Link, uuid } from '@/imports/react-lib';

import './style.less';

export default class ListItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const item = this.props.data;
    item.id = item.id || uuid.v4();

    return (
      <div className='list-item clear-fix'>
        <Link to={`/detail/${item.id}`}>
          <div className='list-item-left float-left'>
            <img src={require(`.${item.img}`)} alt={item.title} />
          </div>
          <div className='list-item-right'>
            <div className='list-item-title clear-fix'>
              <h3 className='float-left'>{item.title}</h3>
              <span className='float-right'>{item.distance}</span>
            </div>
            <p className='list-item-subtitle'>
              {item.subTitle}
            </p>
            <div className='list-item-price clear-fix'>
              <span className='item-price float-left'>￥{item.price}</span>
              <span className='item-number float-right'>已售 {item.number}</span>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}