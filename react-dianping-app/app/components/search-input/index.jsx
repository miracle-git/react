import { React, PureRenderMixin, hashHistory } from '@/imports/react-lib';

import './style.less';

export default class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
       value: ''
    };
  }

  render() {
    return (
      <div className='search-container'>
        <i className='icon-search'></i>
        <input type='text' placeholder='请输入关键字'
               value={this.state.value}
               onChange={this.changeHandler.bind(this)}
               onKeyUp={this.searchHandler.bind(this)}/>
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    });
  }

  changeHandler(event) {
    this.setState({
      value: event.target.value
    });
  }

  searchHandler(event) {
    const value = this.state.value;
    if (event.keyCode === 13 && value.trim()) {
      hashHistory.push(`/search/all/${encodeURIComponent(value)}`);
    }
  }
}