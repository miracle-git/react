import { React, PureRenderMixin } from '@/imports/react-lib';

import './style.less';

export default class CityList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      cities: ['北京', '上海', '广州', '深圳', '成都', '杭州', '武汉', '重庆', '天津', '南京', '长沙', '西安']
    };
  }

  render() {
    return (
      <div className='section-container'>
        <h2>热门城市</h2>
        <ul className='city-list clear-fix'>
          {
            this.state.cities.map((item, index) => {
              return <li key={index}><span onClick={this.props.onChangeCity.bind(this, item)}>{item}</span></li>
            })
          }
        </ul>
      </div>
    )
  }
}