import { React, PureRenderMixin, hashHistory } from '@/imports/react-lib';

import './style.less';

export default class Back extends React.Component {
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
    if (this.props.backRouter) {
      hashHistory.push(this.props.backRouter);
    } else {
      window.history.back();
    }
  }
}