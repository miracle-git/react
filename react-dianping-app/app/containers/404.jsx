import { React, PureRenderMixin } from '@/imports/react-lib';

export default class NotFound extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <p>404</p>
      </div>
    )
  }
}