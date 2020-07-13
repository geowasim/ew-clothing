import React from 'react';//collections
import { Route } from 'react-router-dom' 
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import  CollectionsOverview  from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap)
      this.setState({ loading: false });//lec 170-171 HOC with spinner
    })

  }


  render() {
    
    const { match } = this.props;
    const { loading } =this.state
  return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverViewWithSpinner isLoading={ loading } {...props}/>} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={ loading}  {...props}/>} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch (updateCollections (collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);

//since we want to go froword from shop to shop/hats ,, shop/jackets,, so we have to create route for the components in the shop page


//get id and collection when componentDidMount

// componentDidMount() {
//   const collectionRef = firestore.collection('collections')
//   collectionRef.onSnapshot(async snapshot => {
//     console.log('DataCollection',
//       snapshot.docs.map((snapshot) => {
//         return {  id: snapshot.id,  ...snapshot.data()  }
//       })
//     ) 
//   })
// }

//----------------before using .get methof to stio listining the oberverable
// componentDidMount() {
//   const { updateCollections } = this.props
//   const collectionRef = firestore.collection('collections')
  
//   collectionRef.onSnapshot(async snapshot => {
//     const collectionMap = convertCollectionsSnapshotToMap(snapshot)
//     updateCollections(collectionMap)
//     this.setState({ loading: false });
//   })

// }

// //or 
// componentDidMount() {
//   const { updateCollections } = this.props
//   const collectionRef = firestore.collection('collections')
//   fetch('https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/collections') 
//     .then(response => response.json())
//     .then(collections => console.log())
// // we will get 8 level nested data so it's time westing
// }