import React from 'react'
import AppContainer from '@/features/app/containers'
import AppHeader from '@/features/common/components/app-header'
import AppSidebar from '@/features/common/components/app-sidebar'
import './index.less'

export default ({children}) => (
  <AppContainer>
    <AppHeader/>
    <div className="main">
      <AppSidebar/>
      <div className="container-fluid">{children}</div>
    </div>
  </AppContainer>
)
