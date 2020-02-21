import { React, PureRenderMixin } from '@/imports/react-lib';
import { Stars } from '@/imports/com-lib';

export default class CommentItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const item = this.props.data;

    return (
      <div className='comment-item'>
        <h3>
          <i className='icon-user'></i>
          &nbsp;
          {item.username}
        </h3>
        <Stars number={item.star}/>
        <p>{item.comment}</p>
      </div>
    )
  }
}