import { React, PureRenderMixin } from '@/imports/react-lib';
import { Stars } from '@/imports/com-lib';

export default class OrderItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      commentStatus: 0, // 0-未评价 1-评价中 2-已评价
      star: {}
    };
  }

  render() {
    const item = this.props.data;

    return (
      <div className='order-item-container'>
        <div className='order-item clear-fix'>
          <div className='order-item-left float-left'>
            <img src={require(`.${item.img}`)}/>
          </div>
          <div className='order-item-right float-right'>
            {
              this.state.commentStatus === 0 ?
                  <button className='btn' onClick={this.commentHandler.bind(this)}>评价</button> :
                  this.state.commentStatus === 1 ? '' :
                      <button className='btn btn-unselected'>已评价</button>
            }
          </div>
          <div className='order-item-middle'>
            <span>商家: {item.title}</span>
            <span>数量: {item.count}</span>
            <span>价格: ￥{item.price}</span>
          </div>
        </div>
        {
          this.state.commentStatus === 1 &&
          (
            <div className='order-comment-container'>
              <textarea rows='5' ref='comment'></textarea>
              <Stars onSubmitStar={this.submitStarHandler.bind(this)}/>
              <button className='btn btn-submit' onClick={this.submitHandler.bind(this)}>提交</button>
              <button className='btn btn-unselected' onClick={this.cancelHandler.bind(this)}>取消</button>
            </div>
          )
        }
      </div>
    )
  }

  componentDidMount() {
    // 获取评价状态
    this.setState({
      commentStatus: this.props.data.commentStatus
    });
  }

  commentHandler() {
    // 更新评价状态
    this.setState({
      commentStatus: 1 // 评价中
    });
  }

  submitStarHandler(number) {
    const id = this.props.data.id;
    let star = this.state.star;
    star[id] = number;
    this.setState({
      star
    });
  }

  submitHandler() {
    // 提交评价
    const id = this.props.data.id;
    const comment = this.refs.comment.value.trim();
    const star = this.state.star[id] || 0;
    // 获取评价内容
    if(!comment || !star) {
      alert('请提交评论内容或星级评价！');
      return;
    }

    // 调用评价Api
    this.props.onSubmitComment(id, comment, star, this.commentSuccess.bind(this));
  }

  commentSuccess() {
    // 更新评价状态
    this.setState({
      commentStatus: 2 // 已评价
    });
  }

  cancelHandler() {
    this.setState({
      commentStatus: 0
    });
  }
}