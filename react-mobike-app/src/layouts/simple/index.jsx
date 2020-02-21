import { React } from '@lib/react-lib'
import { AppSimpleHeader } from '@lib/com-lib'
import { Row } from '@lib/vendor-lib'
import { layout_style_simple } from '@lib/static-lib' // eslint-disable-line

export default ({children}) => {
  return [
    <Row className="container" key="header">
      <AppSimpleHeader />
    </Row>,
    <Row className="content" key="content">
      {children}
    </Row>
  ]
}