import { React, PureRenderMixin } from '@/imports/react-lib';
import { Header } from '@/imports/com-lib';
import DetailInfo from './widgets/detail-info';
import BuyAndFav from './widgets/buy-fav';
import DetailComment from './widgets/comment';

export default class Detail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const id = this.props.params.id;

    return (
      <div id='detail-info-container'>
        <Header title='商户详情'/>
        <DetailInfo id={id}/>
        <BuyAndFav id={id}/>
        <DetailComment id={id}/>
      </div>
    )
  }
}