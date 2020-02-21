import { AppUtil } from '@lib/com-lib'

const getData = (component) => {
  AppUtil.getApiData('/map/bikelist', {
    params: {
      query: component.getFormValue(component.filterForm)
    },
    callback: res => {
      const { bike_position_geo, bike_route_geo, service_area_geo } = res
      const positions = { bike_position_geo, bike_route_geo, service_area_geo }
      component.setState({total: bike_position_geo.length})
      // 渲染地图
      renderMap(window.BMap, positions)
    }
  })
}

const renderMap = (BMap, positions) => {
  const map = new BMap.Map('bike-map')
  drawBikeList(map, positions.bike_position_geo)
  drawBikeRoute(map, positions.bike_route_geo)
  drawServiceArea(map, positions.service_area_geo)
}

const drawBikeList = (map, positions) => {
  if (positions.length) {
    positions.forEach(item => {
      // 绘制停放点
      const point = item.split(',')
      addMakerForMap(map, point, '/assets/map/bike.jpg')
    })
  }
}

const drawBikeRoute = (map, positions) => {
  if (positions.length) {
    const [startPoint, endPoint] = [positions[0].split(','), positions[positions.length - 1].split(',')]
    // 绘制起始点
    addMakerForMap(map, startPoint, '/assets/map/start_point.png')
    // 绘制结束点
    addMakerForMap(map, endPoint, '/assets/map/end_point.png', true)
    // 绘制路线图
    addPolylineForMap(map, positions)
  }
}

const drawServiceArea = (map, positions) => {
  if (positions.length) {
    // 绘制服务区
    addPolylineForMap(map, positions, { color: '#ce0000' })
  }
}

const addMakerForMap = (map, position, iconUrl, center = false) => {
  const { BMap } = window
  const point = new BMap.Point(position[0], position[1])
  const imageSize = new BMap.Size(36, 42)
  const anchorSize = new BMap.Size(18, 42)
  const icon = new BMap.Icon(iconUrl, imageSize, {
    imageSize,
    anchor: anchorSize
  })
  const marker = new BMap.Marker(point, { icon })
  map.addOverlay(marker)
  // 将结束点作为中心点
  center && map.centerAndZoom(point, 10)
}

const addPolylineForMap = (map, positions, options = {}) => {
  const { BMap } = window
  const points = getPolyPoints(positions)
  const polyline = new BMap.Polyline(points, {
    strokeColor: options.color || '#1869ad',
    strokeWeight: options.weight || 2,
    strokeOpacity: options.opacity || 1
  })
  map.addOverlay(polyline)
}

const getPolyPoints = (positions) => {
  const { BMap } = window
  const points = []
  positions.forEach(item => {
    if (item.lon && item.lat) {
      points.push(new BMap.Point(item.lon, item.lat))
    } else {
      points.push(new BMap.Point(item.split(',')[0], item.split(',')[1]))
    }
  })
  return points
}

export default {
  getData
}