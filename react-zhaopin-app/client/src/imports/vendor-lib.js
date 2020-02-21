// 所有第三方组件
import * as antd from 'antd-mobile'
import 'moment/locale/zh-cn'

// 常用第三方组件模块
export const moment = require('moment')
export const M2Core = require('@/m2/m2-core')
export const [
  Button,
  List,
  InputItem,
  Radio,
  RadioItem,
  WingBlank,
  WhiteSpace
] = [
  antd.Button,
  antd.List,
  antd.InputItem,
  antd.Radio,
  antd.Radio.RadioItem,
  antd.WingBlank,
  antd.WhiteSpace
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