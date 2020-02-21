import React from 'react'
import { connect } from 'm2-redux'
import { getDataList, getDataItem } from '@/features/model/redux/actions'
import './index.less'

@connect({ reducers: 'home', actions: { getDataList, getDataItem } })
class ModelListPage extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="body model-list-page">
        <ol className="breadcrumb">
          <li><a href="#">建模管理</a></li>
          <li className="active">建模列表</li>
        </ol>
        <div className="page-title">
          <a href="#" className="btn btn-danger btn-sm pull-right">添加模块</a>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <form action="" className="form-inline">
              <select name="" className="form-control input-sm">
                <option value="">按课程</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">按学科</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">按热度</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">按日期</option>
              </select>
              <button className="btn btn-primary btn-sm">排序</button>
            </form>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>序号</td>
                <th>模块名称</th>
                <th>模块类型</th>
                <th>上架时间</th>
                <th>下架时间</th>
                <th>访问次数</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LK001</td>
                <td>玩转H5+C3</td>
                <td>录播课程</td>
                <td>2010/10/01</td>
                <td>2020/10/07</td>
                <td>1900</td>
                <td className="actions">
                  <a href="#" className="btn btn-primary btn-xs">编辑</a>
                  <a href="#" className="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
              <tr>
                <td>LK002</td>
                <td>玩转H5+C3</td>
                <td>录播课程</td>
                <td>2010/10/01</td>
                <td>2020/10/07</td>
                <td>1900</td>
                <td className="actions">
                  <a href="#" className="btn btn-primary btn-xs">编辑</a>
                  <a href="#" className="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
              <tr>
                <td>LK003</td>
                <td>玩转H5+C3</td>
                <td>录播课程</td>
                <td>2010/10/01</td>
                <td>2020/10/07</td>
                <td>1900</td>
                <td className="actions">
                  <a href="#" className="btn btn-primary btn-xs">编辑</a>
                  <a href="#" className="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
              <tr>
                <td>LK004</td>
                <td>玩转H5+C3</td>
                <td>录播课程</td>
                <td>2010/10/01</td>
                <td>2020/10/07</td>
                <td>1900</td>
                <td className="actions">
                  <a href="#" className="btn btn-primary btn-xs">编辑</a>
                  <a href="#" className="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
              <tr>
                <td>LK005</td>
                <td>玩转H5+C3</td>
                <td>录播课程</td>
                <td>2010/10/01</td>
                <td>2020/10/07</td>
                <td>1900</td>
                <td className="actions">
                  <a href="#" className="btn btn-primary btn-xs">编辑</a>
                  <a href="#" className="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
              <tr>
                <td>LK006</td>
                <td>玩转H5+C3</td>
                <td>录播课程</td>
                <td>2010/10/01</td>
                <td>2020/10/07</td>
                <td>1900</td>
                <td className="actions">
                  <a href="#" className="btn btn-primary btn-xs">编辑</a>
                  <a href="#" className="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
              <tr>
                <td>LK007</td>
                <td>玩转H5+C3</td>
                <td>录播课程</td>
                <td>2010/10/01</td>
                <td>2020/10/07</td>
                <td>1900</td>
                <td className="actions">
                  <a href="#" className="btn btn-primary btn-xs">编辑</a>
                  <a href="#" className="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
              <tr>
                <td>LK008</td>
                <td>玩转H5+C3</td>
                <td>录播课程</td>
                <td>2010/10/01</td>
                <td>2020/10/07</td>
                <td>1900</td>
                <td className="actions">
                  <a href="#" className="btn btn-primary btn-xs">编辑</a>
                  <a href="#" className="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
              <tr>
                <td>LK009</td>
                <td>玩转H5+C3</td>
                <td>录播课程</td>
                <td>2010/10/01</td>
                <td>2020/10/07</td>
                <td>1900</td>
                <td className="actions">
                  <a href="#" className="btn btn-primary btn-xs">编辑</a>
                  <a href="#" className="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
              <tr>
                <td>LK010</td>
                <td>玩转H5+C3</td>
                <td>录播课程</td>
                <td>2010/10/01</td>
                <td>2020/10/07</td>
                <td>1900</td>
                <td className="actions">
                  <a href="#" className="btn btn-primary btn-xs">编辑</a>
                  <a href="#" className="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="center">
          <ul className="pagination pull-right">
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

export default ModelListPage
