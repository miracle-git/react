import React from 'react'
import { TabBar } from '@/features/common/components'
import { BannerHeader, CategoryList, RetailerList } from '@/features/home/components'
import './index.less'

export default () => (
  <div className="home-page">
    <BannerHeader/>
    <CategoryList/>
    <RetailerList/>
    <TabBar/>
  </div>
)
