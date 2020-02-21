import { React, PureRenderMixin } from '@/imports/react-lib';
import { UserOrderList } from '@/imports/com-lib';
import { getOrderData, submitOrderComment } from '@/imports/api-lib';

export default class OrderList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      items: []
    };
  }

  render() {
    return <UserOrderList data={this.state.items} onSubmitComment={this.submitCommentHandler.bind(this)}/>;
  }

  componentDidMount() {
    const userName = this.props.userName;
    if(!userName) return;
    // 获取订单数据
    getOrderData(userName)
        .then(res => res.json())
        .then(json => {
          // 处理获取之后的数据
          if(json.length) {
            this.setState({ items: json })
          }
        })
        .catch(ex => {
          // 发生错误
          if(__DEV__) {
            console.error('获取订单列表数据失败', ex.message);
          }
        });
  }

  submitCommentHandler(orderId, comment, star, callback) {
    const promise = submitOrderComment(orderId, comment, star);
    promise.then(res => res.json())
        .then(json => {
      if(json.error === 0) {
        // 执行评价成功之后回调
        callback();
      }
    }).catch(ex => {
      // 发生错误
      if(__DEV__) {
        console.error('提交评价失败', ex.message);
      }
    });
  }
}