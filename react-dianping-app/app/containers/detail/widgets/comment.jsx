import { React, PureRenderMixin } from '@/imports/react-lib';
import { LoadMore, CommentList } from '@/imports/com-lib';
import { getCommentData } from '@/imports/api-lib';

export default class Comment extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentßUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      items: [], // 存储列表
      more: false, // 记录是否还有更多数据加载
      loading: false, // 记录是否处于"加载中..."还是"加载更多..."
      currentPage: 1 // 记录当前页的页码(默认第一页)
    };
  }

  render() {
    return (
        <div id='comment-list-container' className='section-container'>
          <CommentList data={this.state.items} />
          {
            this.state.more && <LoadMore loading={this.state.loading} onLoadMore={this.loadMoreHandler.bind(this)} />
          }
        </div>
    )
  }

  componentDidMount() {
    // 获取列表数据(默认加载第一页)
    const promise = getCommentData(this.props.id);
    this.loadData(promise);
  }

  // 加载更多数据
  loadMoreHandler() {
    // 记录状态
    this.setState({
      loading: true
    });

    // 获取下一页的数据
    const nextPage = this.state.currentPage + 1;
    const promise = getCommentData(this.props.id, nextPage);
    this.loadData(promise);

    // 将当前页向下加1并将loading置为false
    this.setState({
      currentPage: nextPage,
      loading: false
    });
  }

  loadData(promise) {
    promise.then(res => res.json())
        .then(json => {
          // 处理获取之后的数据(将当前的数据拼接到上一页数据)
          json && this.setState({ items: this.state.items.concat(json.data), more: json.more });
        })
        .catch(ex => {
          // 发生错误
          if(__DEV__) {
            console.error('获取评论列表数据失败', ex.message);
          }
        });
  }
}