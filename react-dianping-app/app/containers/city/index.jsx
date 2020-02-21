import { React, PureRenderMixin, connect, bindActionCreators, hashHistory } from '@/imports/react-lib';
import { LocalStore, CacheKeys, userinfoActions } from '@/imports/app-lib';
import { Header, CurrentCity, CityList } from '@/imports/com-lib';

class City extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <Header title='选择城市'/>
        <CurrentCity cityName={this.props.userinfo.cityName}/>
        <CityList onChangeCity={this.changeCityHandler.bind(this)}/>
      </div>
    )
  }

  changeCityHandler(newCity) {
    // 修改redux
    const userinfo = this.props.userinfo;
    userinfo.cityName = newCity;
    this.props.userinfoActions.update(userinfo);
    // 修改localstore
    LocalStore.setItem(CacheKeys.CURRENT_CITY_NAME, newCity);
    // 跳转到首页
    hashHistory.push('/');
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)