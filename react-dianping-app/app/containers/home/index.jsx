import { React, PureRenderMixin, connect } from '@/imports/react-lib';
import { HomeHeader, HomeCategory } from '@/imports/com-lib';
import HomeAdvList from './widgets/adv-list';
import HomeFavList from './widgets/fav-list';
import { userinfoActionTypes as actionTypes } from '@/imports/app-lib';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} />
        <HomeCategory />
        <HomeAdvList />
        <HomeFavList cityName={this.props.userinfo.cityName} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)