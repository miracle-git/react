import { React } from '@lib/react-lib'
import './index.less'

export default ({children}) => {
  return (
    <div className="simple-layout">
      <img src="/assets/logo.png" alt="" className="logo"/>
      {children}
    </div>
  )
}