import { React, PureRenderMixin } from '@/imports/react-lib';
import { Loading } from '@/imports/com-lib';
import CommentItem from './item';

import './style.less';

export default class CommentList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id='comment-list'>
        <h2>用户评论</h2>
        {
          this.props.data.length ?
          (
            <div className='comment-item-container'>
              {
                this.props.data.map((item, index) => {
                  return <CommentItem key={index} data={item} />
                })
              }
            </div>
          ) : <Loading />
        }
      </div>
    )
  }
}