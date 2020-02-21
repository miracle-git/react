import { React, PureRenderMixin } from '@/imports/react-lib';
import { Back }from '@/imports/com-lib';

import './style.less';

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id='common-header'>
        <Back backRouter={this.props.backRouter}/>
        <h1 className='title'>{this.props.title}</h1>
      </div>
    )
  }
}