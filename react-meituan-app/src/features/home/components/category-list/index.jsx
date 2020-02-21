import React from 'react'
import { connect } from 'm2-redux'
import { getCategoryList } from '@/features/home/redux/actions'
import './index.less'

@connect({ reducers: 'home', actions: { getCategoryList }})
class CategoryList extends React.Component {
  componentDidMount() {
    const { categories } = this.props.home
    if (categories && !categories.data.length) {
      this.props.getCategoryList()
    }
  }

  renderItem(item) {
    return (
      <div key={item.code} className="category-item">
        <img className="category-icon" src={item.url} alt=""/>
        <p className="category-name">{item.name}</p>
      </div>
    )
  }

  render() {
    const { categories } = this.props.home

    return (
      <div className="mt-category-list">
        {
          categories.data && categories.data.map(item => this.renderItem(item))
        }
      </div>
    )
  }
}

export default CategoryList
