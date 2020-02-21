import React from 'react'
import './index.less'

class UserSettingPage extends React.Component {
  state = {
  }

  componentWillMount() {
    // this.props.getDataList()
  }

  render() {
    return (
      <div className="body user-settings-page">
        <form action="" className="form-horizontal">
          <div className="form-group">
            <label htmlFor="" className="col-md-3 control-label">姓名</label>
            <div className="col-md-5">
              <p className="form-control-static">Miracle</p>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-md-3 control-label">头像</label>
            <div className="col-md-2 preview">
              <img src="/static/img/default.png" style={{border: '1px solid #e0e0e0'}} alt="头像"/>
              <input type="file" id="upfile"/>
              <div className="cover">
                <i className="fa fa-upload"></i>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-md-3 control-label">性别</label>
            <div className="col-md-3">
              <label className="radio-inline">
                <input type="radio"/> 男
              </label>
              <label className="radio-inline">
                <input type="radio"/> 女
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-md-3 control-label">用户名</label>
            <div className="col-md-5">
              <input type="text" className="form-control input-sm"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-md-3 control-label">手机号码</label>
            <div className="col-md-5">
              <input type="text" className="form-control input-sm"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-md-3 control-label">Email</label>
            <div className="col-md-5">
              <input type="text" className="form-control input-sm"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-md-3 control-label">加入日期</label>
            <div className="col-md-5">
              <input type="date" className="form-control input-sm"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-md-3 control-label">出生日期</label>
            <div className="col-md-5">
              <input type="date" className="form-control input-sm"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-md-3 control-label">住址</label>
            <div className="col-md-5">
              <select name="" className="form-control input-sm">
                <option value="">安徽省</option>
                <option value="">江苏省</option>
                <option value="">广东省</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">黄山市</option>
                <option value="">上海市</option>
                <option value="">广州市</option>
              </select>
              <select name="" className="form-control input-sm">
                <option value="">徽州区</option>
                <option value="">徐汇区</option>
                <option value="">天河区</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-md-3 control-label">自我介绍</label>
            <div className="col-md-5 ckeditor">
              <textarea name="" rows="15" className="form-control input-sm"></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-8">
              <a href="#" className="btn btn-danger pull-right">保 存</a>
              <a href="#" className="btn btn-link btn-success pull-right">修改密码？</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default UserSettingPage
