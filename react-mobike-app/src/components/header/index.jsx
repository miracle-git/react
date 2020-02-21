import { React, M2Component, Link, connect, mapDispatchToProps } from '@lib/react-lib'
import { AppConstant } from '@lib/com-lib'
import { DataStorage, DataFetch, DataUtil, StorageType, Row, Col } from '@lib/vendor-lib'
import { app_style_header } from '@lib/static-lib' // eslint-disable-line

class Header extends M2Component {
  componentInitialState() {
    this.state = {
      userName: 'Miracle',
      currentDate: '',
      weatherData: ''
    }
  }

  componentInitialMethods() {
    super.componentInitialMethods()
    this.getTimeClock = () => {
      this.timer = setInterval(() => {
        this.setState({
          currentDate: DataUtil.formatDateTime(new Date(), false)
        })
      }, 1000)
    }
    this.getWeatherData = () => {
      const location = encodeURIComponent('北京')
      const url = AppConstant.API_URLS.baidu_weather_api.format(location)
      DataFetch.jsonp(url).then(res => {
        this.setState({
          weatherData: res.results[0].weather_data[0]
        })
      })
    }
    this.getMenuName = () => {
      const cacheKey = AppConstant.CACHE_KEY.current_menu_name
      const menuName = DataStorage.get(cacheKey, StorageType.Session)
      return menuName || this.props.menuName
    }
  }

  componentDidMount() {
    this.getTimeClock()
    this.getWeatherData()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { userName, currentDate, weatherData } = this.state
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{userName}</span>
            <Link to="/exit" className="exit">退出</Link>
          </Col>
        </Row>
        <Row className="header-nav">
          <Col span={4} className="breadcrumb">
            {this.getMenuName()}
          </Col>
          <Col span={20} className="weather">
            <span className="today">{currentDate}</span>
            <span className="weather-detail">
              <img src={weatherData.dayPictureUrl} alt=""/>
              {weatherData.weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menuName: state.menuName
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)