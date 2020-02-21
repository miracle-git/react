import { React, PureRenderMixin } from '@/imports/react-lib';

import './style.less';

export default class UserInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id='user-info-container' className='clear-fix'>
        <p>
          <i className='icon-user'></i>&nbsp;
          {this.props.userName}
        </p>
        <p>
          <i className='icon-map-marker'></i>&nbsp;
          {this.props.cityName}
        </p>
      </div>
    )
  }
}