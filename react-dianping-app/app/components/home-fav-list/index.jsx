import { React, PureRenderMixin } from '@/imports/react-lib';
import { Loading, ListItem as FavItem } from '@/imports/com-lib';

import './style.less';

export default class HomeFavList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id='home-fav-container'>
        <h2>猜你喜欢</h2>
        {
          this.props.data.length ?
          (
            <div className='fav-container'>
              {
                this.props.data.map((item, index) => {
                  return <FavItem key={index} data={item} />
                })
              }
            </div>
          ) : <Loading />
        }
      </div>
    )
  }
}