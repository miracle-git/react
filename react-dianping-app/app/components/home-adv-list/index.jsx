import { React, PureRenderMixin } from '@/imports/react-lib';
import { Loading } from '@/imports/com-lib';

import './style.less';

export default class HomeAdvList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id='home-adv' className='section-container'>
        <h2>超值特惠</h2>
        {
          this.props.data.length ?
          (
            <div className='adv-container clear-fix'>
              {
                this.props.data.map((item, index) => {
                  return <div key={index} className='adv-item float-left'>
                    <a href={item.link} target='_blank'>
                      <img src={require(`.${item.img}`)} alt={item.title} />
                    </a>
                  </div>
                })
              }
            </div>
          ) : <Loading />
        }
      </div>
    )
  }
}