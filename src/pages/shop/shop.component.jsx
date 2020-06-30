import React from 'react';//collections
import { Route } from 'react-router-dom' 

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  console.log('shopPage',match)
  return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
)}

export default ShopPage;

//since we want to go froword from shop to shop/hats ,, shop/jackets,, so we have to create route for the components in the shop page