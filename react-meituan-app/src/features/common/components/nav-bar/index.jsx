import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

class NavBar extends React.Component {
  render() {
    const { back, title } = this.props
    return (
      <div className="mt-nav-bar">
        { back && <div className="nav-back-icon"/> }
        <h3 className="nav-title">{title}</h3>
      </div>
    )
  }
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool
}

NavBar.defaultProps = {
  back: true
}

export default NavBar
