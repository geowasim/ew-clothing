import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { isCollectionFetchingSelector } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import  CollectionsOverView  from '../collections-overview/collections-overview.component'
import { compose } from 'redux';


const mapStateToProps = createStructuredSelector({
  isLoading : isCollectionFetchingSelector
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverView);

export default CollectionsOverviewContainer;