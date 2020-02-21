import React from 'react'
import { render } from 'm2-react'
import { Root } from 'm2-redux'
import AppRouter from '@/features/app/router'
import AppStore from '@/features/app/redux/store'

render(
  <Root {...AppStore} {...AppRouter}/>
)

// 多个组件使用components参数
/*
render({
  components: [
    // <Loading key="loading"/>,
    <Root {...AppStore} {...AppRouter} key="root"/>
  ]
})
*/
