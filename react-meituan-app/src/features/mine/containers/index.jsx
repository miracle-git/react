import React from 'react'
import { TabBar }  from '@/features/common/components'
import './index.less'

export default () => (
  <div className="mine-page">
    <div className="header">
      <img className="avatar-img" src="http://i.waimai.meituan.com/static/img/default-avatar.png" alt="avatar"/>
      <p className="nick-name">Miracle &gt;</p>
    </div>
    <div className="content">
      <ul className="items">
        <li className="address">收货地址管理</li>
        <li className="voucher">商家代金券</li>
      </ul>
      <ul className="items">
        <li className="feedback">意见反馈</li>
        <li className="question">常见问题</li>
      </ul>
      <div className="tel">客服电话： 010-66668888</div>
      <div className="time">服务时间： 9:00-23:00</div>
    </div>
    <TabBar/>
  </div>
)
