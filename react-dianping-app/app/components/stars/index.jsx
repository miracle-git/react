import { React, PureRenderMixin } from '@/imports/react-lib';

import './style.less';

export default class Stars extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      number: 0
    };
  }

  render() {
    let number = this.state.number;
    // 如果超过5个，则执行取余运算
    if(number > 5) {
      number = number % 5;
    }

    return (
      <div className='star-container'>
        {
          [1, 2, 3, 4, 5].map((item, index) => {
            const lightCss = number >= item ? ' light' : '';
            return <i key={index} className={`icon-star${lightCss}`} onClick={this.clickHandler.bind(this,item)}></i>
          })
        }
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      number: this.props.number || 0
    });
  }

  clickHandler(item) {
    const submitStar = this.props.onSubmitStar;
    if(!submitStar) return;

    this.setState({
      number: item
    });
    submitStar(item);
  }
}