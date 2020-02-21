import { React } from '@lib/react-lib'
import { app_style } from '@lib/static-lib' // eslint-disable-line

export default ({children}) => {
  return (
    <div className="app-container">
      {children}
    </div>
  )
}