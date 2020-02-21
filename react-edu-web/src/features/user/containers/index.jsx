import React from 'react'
import './index.less'

class UserPage extends React.Component {
  state = {
  }

  componentWillMount() {
    // this.props.getDataList()
  }

  render() {
    return (
      <div className="body user-page">
        <ol className="breadcrumb">
          <li><a href="#">用户管理</a></li>
          <li className="active">用户列表</li>
        </ol>
        <div className="panel panel-default user-list">
          <div className="panel-body">
            <form action="" className="form-inline">
              <select name="" className="form-control input-sm">
                <option value="">按年龄</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">按性别</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">按地区</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">按日期</option>
              </select>
              <button className="btn btn-danger btn-sm">筛选</button>
              <div className="input-group pull-right">
                <input type="text" className="form-control input-sm"/>
                <span className="input-group-btn">
                  <button className="btn btn-danger btn-sm">搜索</button>
                </span>
              </div>
            </form>
          </div>
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>编号</th>
                <th>注册账号</th>
                <th>昵称</th>
                <th>年龄</th>
                <th>性别</th>
                <th>地区</th>
                <th>手机号码</th>
                <th>积分</th>
                <th>注册时间</th>
                <th>登录时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>yjh@itlike.com</td>
                <td>旋之华</td>
                <td>28</td>
                <td>男</td>
                <td>上海市</td>
                <td>18917286702</td>
                <td>1999</td>
                <td>2019/05/01 10:12:32</td>
                <td>2020/05/10 12:16:19</td>
                <td className="actions">
                  <a href="#" className="btn btn-info btn-xs">查看</a>
                  <a href="#" className="btn btn-warning btn-xs">锁定</a>
                </td>
              </tr>
            </tbody>
          </table>
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

export default UserPage
