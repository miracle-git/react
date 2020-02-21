import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Card, Row, Col, Modal } from '@lib/vendor-lib'
import { view_style_ui } from '@lib/static-lib' // eslint-disable-line

export default class UIGallery extends M2Component {
  componentInitialProps() {
    this.baseImgUrl = '/assets/gallery/'
    this.imgCols = 6
    this.imgList = []
    for (let i = 0; i < 25; i++) {
      const item = `${this.baseImgUrl}${i + 1}.png`
      if (i % this.imgCols === 0) {
        this.imgList.push([item])
      } else {
        this.imgList[this.imgList.length - 1].push(item)
      }
    }
  }

  componentInitialMethods() {
    this.getGalleryList = () => {
      return this.imgList.map(items => items.map((item, index) => (
        <Card cover={<img src={item} alt=""/>} key={index} onClick={()=>this.handleGallery(item)}>
          <Card.Meta {...AppUtil.getGalleryData()}/>
        </Card>
      )))
    }
    this.handleGallery = (item) => {
      this.setState({
        currentGalleryImg: item,
        showGalleryModal: true
      })
    }
  }

  componentInitialState() {
    this.state = {
      currentGalleryImg: '',
      showGalleryModal: false
    }
  }

  render() {
    return (
      <div className="ui-container gallery-container">
        <Row gutter={5}>
          {
            this.getGalleryList().map((item, index) => (
              <Col md={this.imgCols} key={index}>{item}</Col>
            ))
          }
        </Row>
        <Modal visible={this.state.showGalleryModal}
               wrapClassName="gallery-modal"
               onCancel={()=>this.setState({showGalleryModal:false})}
               maskClosable={false}
               footer={false}>
          <img src={this.state.currentGalleryImg} alt=""/>
        </Modal>
      </div>
    )
  }
}