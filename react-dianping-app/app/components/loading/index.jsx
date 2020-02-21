import { React, PureRenderMixin } from '@/imports/react-lib';

import './style.less';

export default class Loading extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>{ this.props.message || '加载中...' }</div>
    )
  }
}