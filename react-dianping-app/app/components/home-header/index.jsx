import { React, PureRenderMixin, Link } from '@/imports/react-lib';
import { SearchInput } from '@/imports/com-lib';

import './style.less';

export default class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id='home-header' className='clear-fix'>
        <div className='home-header-left float-left'>
          <Link to='/city'>
            <span>{this.props.cityName}</span>&nbsp;
            <i className='icon-angle-down'></i>
          </Link>
        </div>
        <div className='home-header-right float-right'>
          <Link to='/login'>
            <i className='icon-user'></i>
          </Link>
        </div>
        <div className='home-header-middle'>
          <SearchInput/>
        </div>
      </div>
    )
  }
}