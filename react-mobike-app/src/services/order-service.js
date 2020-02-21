import { React } from '@lib/react-lib'
import { DataService, AppUtil } from '@lib/com-lib'
import { OrderData } from '@lib/com-lib'
import { DataUtil, UrlUtil, Button, Divider } from '@lib/vendor-lib'

const getList = (component) => {
  DataService.getList('/order/list', component, {
    itemsName: 'orderList',
    params: {
      page: component.state.page,
      query: component.getFormValue(component.filterForm)
    }
  })
}

const getFixTable = () => {
  const columns = DataUtil.addActionColumn(OrderData.columns, (_, item) => (
    <span className="action">
      <Button onClick={() => UrlUtil.redirect(`/app/order/${item.order_no}`)} className="link-button">详情</Button>
      <Divider type="vertical"/>
      <Button className="link-button red">结束</Button>
    </span>
  ))
  
  return DataUtil.getFixColumns(columns, {
    leftCols: ['order_no', 'bike_no', 'user_name'],
    rightCols: ['action']
  })
}

const getDetail = (component) => {
  const orderId = component.props.match.params.id
    AppUtil.getApiData('/order/detail', {
      params: {
        orderId
      },
      callback: res => {
        const { bike_position_geo, service_area_geo } = res
        const positions = { bike_position_geo, service_area_geo }
        component.setState({
          orderItem: {
            ...positions,
            detailItems: mapOrderItem(res)
          }
        })
        // 渲染地图
        renderMap(window.BMap, positions)
      }
    })
}

const mapOrderItem = (res) => {
  OrderData.details.map(item => {
    item.cols.map(col => {
      if (col.render) {
        col.value = col.render(res[col.key])
      } else {
        col.value = res[col.key]
      }
      return col
    })
    return item
  })

  return OrderData.details
}

const renderMap = (BMap, positions) => {
  const map = new BMap.Map('order-map')
  const { BMAP_ANCHOR_TOP_RIGHT } = window
  map.centerAndZoom('北京', 10)
  map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_RIGHT}))
  map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT}))
  // 绘制车辆路线图 
  drawBikeRoute(map, positions.bike_position_geo)
  // 绘制服务区
  drawServiceArea(map, positions.service_area_geo)
}

const addMakerForMap = (map, position, iconUrl) => {
  const { BMap } = window
  const point = new BMap.Point(position.lon, position.lat)
  const imageSize = new BMap.Size(36, 42)
  const anchorSize = new BMap.Size(18, 42)
  const icon = new BMap.Icon(iconUrl, imageSize, {
    imageSize,
    anchor: anchorSize
  })
  const marker = new BMap.Marker(point, { icon })
  map.addOverlay(marker)
}

const getPolyPoints = (positions) => {
  const { BMap } = window
  const points = []
  positions.forEach(item => points.push(new BMap.Point(item.lon, item.lat)))
  return points
}

const addPolylineForMap = (map, positions) => {
  const { BMap } = window
  const points = getPolyPoints(positions)
  const polyline = new BMap.Polyline(points, {
    strokeColor: '#1869ad',
    strokeWidth: 2,
    strokeOpacity: 1
  })
  map.addOverlay(polyline)
}

const addPolygonForMap = (map, positions) => {
  const { BMap } = window
  const points = getPolyPoints(positions)
  const polygon= new BMap.Polygon(points, {
    strokeColor: '#ce0000',
    strokeWeight: 2,
    strokeOpacity: 1,
    fillColor: '#ff8605',
    fillOpacity: .4
  })
  map.addOverlay(polygon)
}

const drawBikeRoute = (map, positions) => {
  if (positions.length) {
    const [startPoint, endPoint] = [positions[0], positions[positions.length - 1]]
    // 绘制起始点
    addMakerForMap(map, startPoint, '/assets/map/start_point.png')
    // 绘制结束点
    addMakerForMap(map, endPoint, '/assets/map/end_point.png')
    // 绘制路线图
    addPolylineForMap(map, positions)
    // 将结束点作为中心点
    map.centerAndZoom(endPoint, 10)
  }
}

const drawServiceArea = (map, positions) => {
  addPolygonForMap(map, positions)
}

export default {
  getList,
  getDetail,
  getFixTable
}