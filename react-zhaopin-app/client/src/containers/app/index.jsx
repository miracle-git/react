import { React } from '@lib/react-lib'
import './index.less'

export default ({children}) => {
  return (
    <div className="app-container">
      {children}
    </div>
  )
}