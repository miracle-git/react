import { React, M2Component } from '@lib/react-lib'
import { Card, Carousel } from '@lib/vendor-lib'
import { view_style_ui } from '@lib/static-lib' // eslint-disable-line

export default class UICarousel extends M2Component {
  componentInitialProps() {
    this.baseImgUrl = '/assets/carousel/'
    this.textCarouselItems = ['React', 'Vue', 'Angular']
    this.imgCarouselItems = ['carousel-1.jpg', 'carousel-2.jpg', 'carousel-3.jpg']
  }

  render() {
    return (
      <div className="ui-container">
        <Card title="文字背景轮播">
          <Carousel autoplay effect="fade">
            {
              this.textCarouselItems.map((item, index) => (
                <div className="carousel-item" key={index}>
                  <h3>欢迎大家一起来学习--{item}</h3>
                </div>
              ))
            }
          </Carousel>
        </Card>
        <Card title="图片背景轮播">
          <Carousel autoplay effect="fade" className="img-carousel">
            {
              this.imgCarouselItems.map((item, index) => (
                <div className="carousel-item" key={index}>
                  <img src={`${this.baseImgUrl}${item}`} alt=""/>
                </div>
              ))
            }
          </Carousel>
        </Card>
      </div>
    )
  }
}