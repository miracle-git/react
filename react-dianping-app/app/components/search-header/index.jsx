import { React, PureRenderMixin } from '@/imports/react-lib';
import { Back, SearchInput } from '@/imports/com-lib';

import './style.less';

export default class SearchHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id='search-header' className='clear-fix'>
        <Back backRouter={this.props.backRouter}/>
        <SearchInput value={this.props.keyword}/>
      </div>
    )
  }
}