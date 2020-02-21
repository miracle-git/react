import { React, PureRenderMixin } from '@/imports/react-lib';
import { Loading, DetailItem } from '@/imports/com-lib';
import { getDetailData } from '@/imports/api-lib';

export default class DetailInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      item: null
    };
  }

  render() {
    return (
      <div id='detail-info'>
        {
          this.state.item ? <DetailItem item={this.state.item}/> : <Loading/>
        }
      </div>
    )
  }

  componentDidMount() {
    // 获取详情
    getDetailData(this.props.id)
        .then(res => res.json())
        .then(json => {
          // 处理获取之后的数据
          if(json) {
            this.setState({ item: json })
          }
        })
        .catch(ex => {
          // 发生错误
          if(__DEV__) {
            console.error('获取详情数据失败', ex.message);
          }
        });
  }
}