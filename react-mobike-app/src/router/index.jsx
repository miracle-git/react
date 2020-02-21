import { React, HashRouter as Router, Route, Switch, Redirect } from '@lib/react-lib'
import { AppAdminLayout as AdminLayout, AppSimpleLayout as SimpleLayout } from '@lib/com-lib'
import { App as AppContainer, Home, Button, Modal, Loading, Notify, Message, Tab, 
  Gallery, Carousel, RichText, Login, Register, BasicTable, AdvanceTable, CityList, 
  OrderList, OrderDetail, UserList, BikeMap, BarChart, PieChart, LineChart, PermList
} from '@lib/app-lib'
import { LocaleProvider, zh_CN } from '@lib/vendor-lib'

export default () => {
  return (
    <Router>
      <LocaleProvider locale={zh_CN}>
        <AppContainer>
          <Switch>
            <Route path="/app" render={() => 
              <SimpleLayout>
                <Route path="/app/order/:id" component={OrderDetail}/>
              </SimpleLayout>
            }/>
            <Route path="/" render={() =>
              <AdminLayout>
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/ui/button" component={Button}/>
                  <Route path="/ui/modal" component={Modal}/>
                  <Route path="/ui/loading" component={Loading}/>
                  <Route path="/ui/notify" component={Notify}/>
                  <Route path="/ui/message" component={Message}/>
                  <Route path="/ui/tab" component={Tab}/>
                  <Route path="/ui/gallery" component={Gallery}/>
                  <Route path="/ui/carousel" component={Carousel}/>
                  <Route path="/ui/rich-text" component={RichText}/>
                  <Route path="/form/login" component={Login}/>
                  <Route path="/form/register" component={Register}/>
                  <Route path="/table/basic" component={BasicTable}/>
                  <Route path="/table/advance" component={AdvanceTable}/>
                  <Route path="/city/list" component={CityList}/>
                  <Route path="/order/list" component={OrderList}/>
                  <Route path="/user/list" component={UserList}/>
                  <Route path="/map/bike" component={BikeMap}/>
                  <Route path="/chart/bar" component={BarChart}/>
                  <Route path="/chart/pie" component={PieChart}/>
                  <Route path="/chart/line" component={LineChart}/>
                  <Route path="/perm/list" component={PermList}/>
                  <Redirect to="/home"/>
                </Switch>
              </AdminLayout>
            }/>
          </Switch>
        </AppContainer>
      </LocaleProvider>
    </Router>
  )
}