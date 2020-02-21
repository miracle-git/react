import React from 'react'
import './index.less'

class CourseListPage extends React.Component {
  state = {
  }

  componentWillMount() {
    // this.props.getDataList()
  }

  render() {
    return (
      <div className="body course-list-page">
        <ol className="breadcrumb">
          <li><a href="#">课程管理</a></li>
          <li className="active">课程列表</li>
        </ol>
        <div className="courses">
          <div className="search">
            <form action="" className="form-inline">
              <select name="" className="form-control input-sm">
                <option value="">按学科</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">按类型</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">按价格</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">按热度</option>
              </select>
              <button className="btn btn-danger btn-sm">过滤</button>
              <div className="input-group pull-right">
                <input type="text" className="form-control input-sm"/>
                <span className="input-group-btn">
                  <button className="btn btn-danger btn-sm">搜索</button>
                </span>
              </div>
            </form>
          </div>
          <div className="course">
            <div className="pic">
              <img src="/static/img/course_1.png" alt=""/>
            </div>
            <div className="info">
              <a className="#">大前端—Vue项目实战—商城</a>
              <ul className="list-unstyled">
                <li>
                  <span>讲师：Miracle</span>
                  <span>类别：web大前端</span>
                </li>
                <li>
                  <span>课时：123</span>
                  <span>学员：111111</span>
                </li>
                <li>
                  <span>浏览：123333</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="course">
            <div className="pic">
              <img src="/static/img/course_2.png" alt=""/>
            </div>
            <div className="info">
              <a href="javascript:;">大前端—Vue项目实战—商城</a>
              <ul className="list-unstyled">
                <li>
                  <span>讲师：Miracle</span>
                  <span>类别：web大前端</span>
                </li>
                <li>
                  <span>课时：123</span>
                  <span>学员：111111</span>
                </li>
                <li>
                  <span>浏览：123333</span>
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="course">
            <div className="pic">
              <img src="/static/img/course_3.png" alt=""/>
            </div>
            <div className="info">
              <a href="javascript:;">大前端—Vue项目实战-商城</a>
              <ul className="list-unstyled">
                <li>
                  <span>讲师：Miracle</span>
                  <span>类别：web大前端</span>
                </li>
                <li>
                  <span>课时：123</span>
                  <span>学员：111111</span>
                </li>
                <li>
                  <span>浏览：123333</span>
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="course">
            <div className="pic">
              <img src="/static/img/course_4.png" alt=""/>
            </div>
            <div className="info">
              <a href="javascript:;">大前端—Vue项目实战—商城</a>
              <ul className="list-unstyled">
                <li>
                  <span>讲师：Miracle</span>
                  <span>类别：web大前端</span>
                </li>
                <li>
                  <span>课时：123</span>
                  <span>学员：111111</span>
                </li>
                <li>
                  <span>浏览：123333</span>
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="course">
            <div className="pic">
              <img src="/static/img/course_1.png" alt=""/>
            </div>
            <div className="info">
              <a href="javascript:;">大前端—Vue项目实战—商城</a>
              <ul className="list-unstyled">
                <li>
                  <span>讲师：Miracle</span>
                  <span>类别：web大前端</span>
                </li>
                <li>
                  <span>课时：123</span>
                  <span>学员：111111</span>
                </li>
                <li>
                  <span>浏览：123333</span>
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="center">
          <ul className="pagination">
            <li><a href="#">上一页</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">下一页</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CourseListPage
