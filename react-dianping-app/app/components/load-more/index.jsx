import { React, PureRenderMixin } from '@/imports/react-lib';

import './style.less';

export default class LoadMore extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className='load-more' ref='wrapper'>
        {
          this.props.loading ? <span>加载中...</span> : <span onClick={this.props.onLoadMore.bind(this)}>加载更多</span>
        }
      </div>
    )
  }

  componentDidMount() {
    let timeout;
    window.addEventListener('scroll', () => {
      if(this.props.loading) return;
      if(timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        const wrapper = this.refs.wrapper;
        if(wrapper && wrapper.getBoundingClientRect) {
          const top = wrapper.getBoundingClientRect().top;
          // 当"加载更多"已在可视范围之内时，则触发下拉加载更多事件
          if(top && top < window.screen.height) {
            this.props.onLoadMore();
          }
        }
      }, 50);
    }, false);
  }
}