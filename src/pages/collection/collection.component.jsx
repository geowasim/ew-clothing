import React from 'react'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { collectionSelector } from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'

import './collection.styles.scss'

const CollectionPage = ({ collection,match }) => {
  // console.log('CollectionPage',collection)
  console.log('params',match.params)
  const { title, items } = collection;
  console.log('Items',items)
  return (
  <div className='collection-page'>
      <h2 className='title'> {title} </h2>
      <div className='items'>
        {
          items.map(item=> <CollectionItem key={item.id} item={item} />)
        }
      </div>
  </div>
)}

const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps) (CollectionPage);


//this component depends on /shop/collectionId (dynamic url)
//so it's related to match.param.collectionId that we will use it to pull the component up to state as a part (contian the title )
//we can't map on id because shop/{title} not title/:id (1,2)
//the best solution to data normalization and add a title lower case to be they key for maping