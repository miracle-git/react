import React from 'react'
import PropTypes from 'prop-types'
import { event } from '@/features/app/utils/event'
import { Loading } from '@/features/common/components'
import './index.less'

class ScrollView extends React.Component {
  fields = {
    mounted: false
  }

  state = {
    page: 1,
    loading: false,
    hasMore: true
  }

  async getItemsData(params = null) {
    this.fields.mounted = true
    const { updateItems } = this.props
    const { page } = this.state
    const { mounted } = this.fields
    let config = { page }
    if (params && params.reload) {
      config = { ...params, page: 1 }
      this.setState({ page: 1 })
    }
    const result = await this.props.loadData(config)
    if (result) {
      mounted && updateItems(result, () => this.setState({ loading: false, hasMore: true }))
    }
  }

  componentWillMount() {
    event.add('scroll', this, { load: this.getItemsData.bind(this) })
  }

  componentDidMount() {
    this.getItemsData()
  }

  componentWillUnmount() {
    event.remove('scroll', this, { load: this.getItemsData.bind(this) })
  }

  render() {
    return (
      <div className="mt-scroll-view">
        {this.props.children}
        <Loading hasMore={this.state.hasMore}/>
      </div>
    )
  }
}

ScrollView.propTypes = {
  loadData: PropTypes.func.isRequired,
  updateItems: PropTypes.func.isRequired
}

export default ScrollView
