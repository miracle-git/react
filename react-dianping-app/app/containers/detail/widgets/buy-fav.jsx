import { React, PureRenderMixin, connect, bindActionCreators, hashHistory } from '@/imports/react-lib';
import { favoriteActions } from '@/imports/app-lib';
import { UserBuyFav } from '@/imports/com-lib';

class BuyAndFav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      isFav: false // 当前商品是否已收藏
    };
  }

  render() {
    return (
      <UserBuyFav isFav={this.state.isFav}
                  onBuy={this.buyHandler.bind(this)}
                  onFav={this.favHandler.bind(this)}/>
    )
  }

  componentDidMount() {
    this.checkFavState();
  }

  // 检查收藏状态
  checkFavState() {
    const id = this.props.id;
    const favorite = this.props.favorite;

    favorite.some(item => {
      if(item.id === id) {
        // 已被收藏
        this.setState({
          isFav: true
        })
        // 跳出循环
        return true;
      }
    });
  }

  // 检查登录状态
  checkIsLogined() {
    const id = this.props.id;
    const userName = this.props.userinfo.userName;

    if(!userName) {
      // 跳转到登录页面
      hashHistory.push(`/login/${encodeURIComponent(`/detail/${id}`)}`);
      return false;
    }

    return true;
  }

  buyHandler() {
    // 验证登录
    if(!this.checkIsLogined()) return;
    // 执行购买（此处省去...）
    // 跳转到用户中心页
    hashHistory.push('/user');
  }

  favHandler() {
    // 验证登录
    if (!this.checkIsLogined()) return;
    // 判断收藏状态
    const id = this.props.id;
    const favoriteActions = this.props.favoriteActions;
    if (this.state.isFav) {
      // 已收藏
      favoriteActions.remove({id});
    } else {
      // 未收藏
      favoriteActions.add({id});
    }
    // 修改收藏状态
    this.setState({
      isFav: !this.state.isFav
    });
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    favorite: state.favorite
  };
}

function mapDispatchToProps(dispatch) {
  return {
    favoriteActions: bindActionCreators(favoriteActions, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BuyAndFav)