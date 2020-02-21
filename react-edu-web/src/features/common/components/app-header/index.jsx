import React from 'react'
import { header_title, header_menus }from '@/features/common/constants/header.conf'
import './index.less'

export default () => (
  <div className="header">
    <nav className="navbar navbar-custom">
      <div className="navbar-header">
        <img src="/static/img/logo.png" className="logo" alt={header_title.logo}/>
        <a href={header_title.url} className="navbar-brand">{header_title.text}</a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        {
          header_menus.map(item => (
            <li key={item.name}>
              <a href={item.url}>
                <i className={`fa fa-${item.icon}`}></i>{item.text}
              </a>
            </li>
          ))
        }
        <li key="badge">
          <a href="#">
            <i className="fa fa-bell"></i><span className="badge">20</span>
          </a>
        </li>
        <li key="quit">
          <a href="#">
            <i className="fa fa-sign-out"></i>退出
          </a>
        </li>
      </ul>
    </nav>
  </div>
)