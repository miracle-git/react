// 所有第三方组件
import * as antd from 'antd'
import * as wysiwyg from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import 'moment/locale/zh-cn'

// 常用第三方组件模块
export const moment = require('moment')
export const zh_CN = require('antd/lib/locale-provider/zh_CN').default
export const M2Core = require('@/shared/m2-core')
export const [
  Alert,
  Row, 
  Col,
  Carousel,
  Button,
  Badge,
  Icon,
  Input,
  InputNumber,
  TextArea,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Divider,
  Card,
  Select,
  SelectOption,
  SelectOptionGroup,
  Switch,
  DatePicker,
  DateRangePicker,
  TimePicker,
  Menu,
  SubMenu,
  Modal,
  Message,
  Notification,
  Spin,
  Tabs,
  TabPane,
  Table,
  Tree,
  TreeNode,
  Transfer,
  Pagination,
  Upload,
  Form,
  FormItem,
  LocaleProvider
] = [
  antd.Alert,
  antd.Row, 
  antd.Col,
  antd.Carousel,
  antd.Button,
  antd.Badge,
  antd.Icon,
  antd.Input,
  antd.InputNumber,
  antd.Input.TextArea,
  antd.Checkbox,
  antd.Checkbox.Group,
  antd.Radio,
  antd.Radio.Group,
  antd.Divider,
  antd.Card,
  antd.Select,
  antd.Select.Option,
  antd.Select.OptGroup,
  antd.Switch,
  antd.DatePicker,
  antd.DatePicker.RangePicker,
  antd.TimePicker,
  antd.Menu,
  antd.Menu.SubMenu,
  antd.Modal,
  antd.message,
  antd.notification,
  antd.Spin,
  antd.Tabs,
  antd.Tabs.TabPane,
  antd.Table,
  antd.Tree,
  antd.Tree.TreeNode,
  antd.Transfer,
  antd.Pagination,
  antd.Upload,
  antd.Form,
  antd.Form.Item,
  antd.LocaleProvider
]
export const [
  echarts,
  ReactEcharts
] = [
  require('echarts/lib/echarts'),
  require('echarts-for-react').default
]
export const [
  draftjs,
  Editor
] = [
  draftToHtml,
  wysiwyg.Editor
]
export const [
  DataType,
  DataFetch,
  DataUtil,
  DataStorage,
  UrlUtil,
  DataSeparator,
  DateFormatter,
  DataRegexPattern,
  TableColumnWidth,
  LetterCase,
  StorageType,
  RequestMethod
] = [
  M2Core.DataType,
  M2Core.DataFetch,
  M2Core.DataUtil,
  M2Core.DataStorage,
  M2Core.UrlUtil,
  M2Core.DATA_SEPARATOR,
  M2Core.DATE_FORMATTER,
  M2Core.DATA_REGEX_PATTERN,
  M2Core.TABLE_COLUMN_WIDTH,
  M2Core.LETTER_CASE,
  M2Core.STORAGE_TYPE,
  M2Core.REQUEST_METHOD
]