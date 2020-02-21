import React from 'react'
import { NavBar } from '@/features/common/components'
import { CategoryFilter, RetailerList } from '@/features/product/components'
import './index.less'

export default () => (
  <div className="category-page">
    <NavBar title="分类"/>
    <CategoryFilter/>
    <RetailerList/>
  </div>
)
