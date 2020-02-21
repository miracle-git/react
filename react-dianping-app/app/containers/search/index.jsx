import { React, PureRenderMixin, connect} from '@/imports/react-lib';
import { SearchHeader } from '@/imports/com-lib';
import SearchResult from './widgets/search-result';

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const params = this.props.params;
    return (
      <div id='search-result'>
        <SearchHeader keyword={params.keyword}/>
        <SearchResult keyword={params.keyword} category={params.category} cityName={this.props.userinfo.cityName}/>
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
)(Search)