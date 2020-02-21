import { React, M2Component, Link } from '@lib/react-lib'
import { Row, Col } from '@lib/vendor-lib'
import { app_style_simple_header } from '@lib/static-lib' // eslint-disable-line

export default class SimpleHeader extends M2Component {
  componentInitialState() {
    this.state = {
      userName: 'Miracle'
    }
  }

  render() {
    const { userName } = this.state
    return (
      <div className="simple-header">
        <Row className="header-top">
          <Col span={6} className="logo">
            <img src="/assets/logo.svg" alt=""/>
            <h1 className="logo-text">共享单车App</h1>
          </Col>
          <Col span={18}>
            <span>欢迎，{userName}</span>
            <Link to="/exit" className="exit">退出</Link>
          </Col>
        </Row>
      </div>
    )
  }
}