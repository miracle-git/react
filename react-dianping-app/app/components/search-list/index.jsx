import { React, PureRenderMixin } from '@/imports/react-lib';
import { Loading, ListItem as SearchItem } from '@/imports/com-lib';

import './style.less';

export default class SearchList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id='search-list-container'>
        {
          this.props.data.length ?
          (
            <div className='search-result-items'>
              {
                this.props.data.map((item, index) => {
                  return <SearchItem key={index} data={item} />
                })
              }
            </div>
          ) : <Loading />
        }
      </div>
    )
  }
}