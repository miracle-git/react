import { React, PureRenderMixin } from '@/imports/react-lib';
import { LoadMore, SearchList } from '@/imports/com-lib';
import { getSearchData } from '@/imports/api-lib';

export default class SearchResult extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = this.getDefaultState();
  }

  render() {
    return (
      <div id='search-result'>
        <SearchList data={this.state.items} />
        {
          this.state.more && <LoadMore loading={this.state.loading} onLoadMore={this.loadMoreHandler.bind(this)} />
        }
      </div>
    )
  }

  componentDidMount() {
    // 获取列表数据(默认加载第一页)
    const promise = getSearchData(this.props.cityName, this.props.category, this.props.keyword);
    this.loadData(promise);
  }

  componentDidUpdate(prevProps, prevState) {
    // 重新渲染搜索(在当前页面)
    // 同一条件下不执行搜索
    if(this.props.category === prevProps.category && this.props.keyword === prevProps.keyword) { return; }
    // 重置当前的State
    this.setState(this.getDefaultState());
    // 重新加载数据
    this.componentDidMount();
  }

  getDefaultState() {
    return {
      items: [], // 存储列表
      more: false, // 记录是否还有更多数据加载
      loading: false, // 记录是否处于"加载中..."还是"加载更多..."
      currentPage: 1 // 记录当前页的页码(默认第一页)
    };
  }

  // 加载更多数据
  loadMoreHandler() {
    // 记录状态
    this.setState({
      loading: true
    });

    // 获取下一页的数据
    const nextPage = this.state.currentPage + 1;
    const promise = getSearchData(this.props.cityName, this.props.category, this.props.keyword, nextPage);
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
            console.error('搜索列表获取数据失败', ex.message);
          }
        });
  }
}