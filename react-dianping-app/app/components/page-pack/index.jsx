import { React, PureRenderMixin } from '@/imports/react-lib';

import './style.less';

export default class PageBack extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <span className='back-icon' onClick={this.onBackHandler.bind(this)}>
        <i className='icon-chevron-left'></i>
      </span>
    )
  }

  onBackHandler() {
    window.history.back();
  }
}