import { React, PureRenderMixin } from '@/imports/react-lib';
import { HomeAdvList } from '@/imports/com-lib';
import { getAdvData } from '@/imports/api-lib';

export default class AdvList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      items: []
    };
  }

  render() {
    return <HomeAdvList data={this.state.items} />;
  }

  componentDidMount() {
    // 获取广告数据
    getAdvData()
      .then(res => res.json())
      .then(json => {
        // 处理获取之后的数据
        if(json.length) {
          this.setState({ items: json })
        }
      })
      .catch(ex => {
        // 发生错误
        if(__DEV__) {
          console.error('首页广告获取数据失败', ex.message);
        }
      });
  }
}