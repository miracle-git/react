import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

class Loading extends React.Component {
  render() {
    return (<div className="loading">{this.props.hasMore ? '正在加载中' : '已加载完成'}</div>)
  }
}

Loading.propTypes = {
  hasMore: PropTypes.bool.isRequired
}

export default Loading
