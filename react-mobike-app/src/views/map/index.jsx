import { React, M2Component } from '@lib/react-lib'
import { DataService, MapService } from '@lib/com-lib'
import { BikeMapFilter } from '@lib/app-lib'
import { Card } from '@lib/vendor-lib'
import { app_style_list, view_style_map } from '@lib/static-lib' // eslint-disable-line

export default class BikeMap extends M2Component {
  componentInitialState() {
    this.state = {
      cityList: [],
      total: 0
    }
  }

  componentDidMount() {
    DataService.getCityList(this)
    MapService.getData(this)
  }

  render() {
    const { cityList, total } = this.state

    return (
      <div className="list-container bike-map-container">
        <Card className="query-filter">
          <BikeMapFilter cities={cityList}
                         query={()=>MapService.getData(this)}
                         wrappedComponentRef={form=>this.filterForm=form}/>
        </Card>
        <div className="query-result">
          <p className="bike-map-title">在服务区内共<span className="total">{total}</span>辆车可使用</p>
          <div id="bike-map" className="bike-map"></div>
        </div>
      </div>
    )
  }
}