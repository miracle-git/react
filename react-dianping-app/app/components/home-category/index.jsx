import { React, PureRenderMixin, ReactSwipe, Link } from '@/imports/react-lib';

import './style.less';

export default class HomeCategory extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      currentIndex: 0
    };
  }

  render() {
    const swipeOptions = {
      auto: 2000,
      callback: (index) => {
        this.setState({currentIndex: index})
      }
    };

    return (
      <div id='home-category'>
        <ReactSwipe swipeOptions={swipeOptions}>
          <div className='carousel-item'>
            <ul className='clear-fix'>
              <Link to='/search/jid'>
                <li className='float-left jid'>景点</li>
              </Link>
              <Link to='/search/ktv'>
                <li className='float-left ktv fix-top'>KTV</li>
              </Link>
              <Link to='/search/gow'>
                <li className="float-left gow">购物</li>
              </Link>
              <Link to='/search/shfw'>
                <li className="float-left shfw">生活服务</li>
              </Link>
              <Link to='/search/jsyd'>
                <li className="float-left jsyd">健身运动</li>
              </Link>
              <Link to='/search/mif'>
                <li className="float-left mif">美发</li>
              </Link>
              <Link to='/search/qiz'>
                <li className="float-left qiz">亲子</li>
              </Link>
              <Link to='/search/xckc'>
                <li className="float-left xckc">小吃快餐</li>
              </Link>
              <Link to='/search/zzc'>
                <li className="float-left zzc">自助餐</li>
              </Link>
              <Link to='/search/jub'>
                <li className="float-left jub">酒吧</li>
              </Link>
            </ul>
          </div>
          <div className='carousel-item'>
            <ul className='clear-fix'>
              <Link to='/search/mis'>
                <li className="float-left mis">美食</li>
              </Link>
              <Link to='/search/diy'>
                <li className="float-left diy">电影</li>
              </Link>
              <Link to='/search/jud'>
                <li className="float-left jud">酒店</li>
              </Link>
              <Link to='/search/xxyl'>
                <li className="float-left xxyl">休闲娱乐</li>
              </Link>
              <Link to='/search/wim'>
                <li className="float-left wim">外卖</li>
              </Link>
              <Link to='/search/hug'>
                <li className="float-left hug">火锅</li>
              </Link>
              <Link to='/search/lir'>
                <li className="float-left lir">丽人</li>
              </Link>
              <Link to='/search/djcx'>
                <li className="float-left djcx">度假出行</li>
              </Link>
              <Link to='/search/zlam'>
                <li className="float-left zlam">足疗按摩</li>
              </Link>
              <Link to='/search/zby'>
                <li className="float-left zby">周边游</li>
              </Link>
            </ul>
          </div>
          <div className='carousel-item'>
            <ul className='clear-fix'>
              <Link to='/search/rbc'>
                <li className="float-left rbc">日本菜</li>
              </Link>
              <Link to='/search/spa'>
                <li className="float-left spa fix-top">SPA</li>
              </Link>
              <Link to='/search/jih'>
                <li className="float-left jih">结婚</li>
              </Link>
              <Link to='/search/xxpx'>
                <li className="float-left xxpx">学习培训</li>
              </Link>
              <Link to='/search/xic'>
                <li className="float-left xic">西餐</li>
              </Link>
              <Link to='/search/hcjp'>
                <li className="float-left hcjp">火车机票</li>
              </Link>
              <Link to='/search/sok'>
                <li className="float-left sok">烧烤</li>
              </Link>
              <Link to='/search/jiz'>
                <li className="float-left jiz">家装</li>
              </Link>
              <Link to='/search/chw'>
                <li className="float-left chw">宠物</li>
              </Link>
              <Link to='/search/all'>
                <li className="float-left qbu">全部分类</li>
              </Link>
            </ul>
          </div>
        </ReactSwipe>
        <div className='slide-container'>
          <ul>
            <li className={this.state.currentIndex === 0 ? 'selected' : ''}></li>
            <li className={this.state.currentIndex === 1 ? 'selected' : ''}></li>
            <li className={this.state.currentIndex === 2 ? 'selected' : ''}></li>
          </ul>
        </div>
      </div>
    )
  }
}