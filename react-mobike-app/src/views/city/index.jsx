import { React, M2Component } from '@lib/react-lib'
import { DataService, CityService, CityData } from '@lib/com-lib'
import { CityFilter, CityOpen } from '@lib/app-lib'
import { Card, Button, Modal, Table } from '@lib/vendor-lib'
import { app_style_list } from '@lib/static-lib' // eslint-disable-line

export default class CityList extends M2Component {
  componentInitialMethods() {
    super.componentInitialMethods()

    this.handleOpenCity = (visible = true) => {
      this.setState({
        showOpenCityModal: visible
      })
      if (!visible) {
        this.resetForm(this.cityOpenForm)
      }
    }
  }

  componentInitialState() {
    this.state = {
      cityList: [],
      items: [],
      page: 1,
      pagination: null,
      showOpenCityModal: false
    }
  }

  componentDidMount() {
    DataService.getCityList(this)
    CityService.getList(this)
  }

  render() {
    return (
      <div className="list-container">
        <Card className="query-filter">
          <CityFilter cities={this.state.cityList}
                      query={()=>CityService.getList(this)}
                      wrappedComponentRef={form=>this.filterForm=form}/>
        </Card>
        <div className="query-result">
          <Card>
            <Button type="primary"
                    onClick={()=>this.handleOpenCity()}>开通城市</Button>
          </Card>
          <Table bordered
                 columns={CityData.columns}
                 dataSource={this.state.items}
                 pagination={this.state.pagination}/>
        </div>
        <Modal title="开通城市"
               maskClosable={false}
               visible={this.state.showOpenCityModal}
               onOk={(e) => CityService.confirm(this, e)}
               onCancel={()=>this.handleOpenCity(false)}>
          <CityOpen cities={this.state.cityList}
                    wrappedComponentRef={form=>this.cityOpenForm=form}/>
        </Modal>
      </div>
    )
  }
}