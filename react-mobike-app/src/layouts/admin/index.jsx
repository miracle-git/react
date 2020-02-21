import { React } from '@lib/react-lib'
import { AppHeader, AppFooter, AppSidebar } from '@lib/com-lib'
import { Row, Col } from '@lib/vendor-lib'
import { layout_style_admin } from '@lib/static-lib' // eslint-disable-line

export default ({children}) => {
  return (
    <Row className="container">
      <Col span={4} className="left">
        <AppSidebar/>
      </Col>
      <Col span={20} className="main">
        <AppHeader/>
        <Row className="content">
          {children}
        </Row>
        <AppFooter/>
      </Col>
    </Row>
  )
}