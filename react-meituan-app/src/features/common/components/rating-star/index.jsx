import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

class RatingStar extends React.Component {
  renderStar(num) {
    let numbers = [1, 1, 1, 1, 1]
    numbers = numbers.map(item => {
      if (num > item) {
        item = 1
      } else {
        item = num - 0.5 >= 0 ? 0.5 : 0
      }
      num = num - item
      return item
    });

    return numbers.reduce((stars, item, index) => {
      const cls = item === 1 ? 'full' : (item === 0.5 ? 'half' : 'empty')
      stars.push(<span key={index} className={`star star-${cls}`}/>)
      return stars
    }, [])
  }

  render() {
    const { star } = this.props

    return (
      <div className="mt-rating-star">
        {this.renderStar(star)}
      </div>
    )
  }
}

RatingStar.propTypes = {
  star: PropTypes.number.isRequired
}

export default RatingStar
