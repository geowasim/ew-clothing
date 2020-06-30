import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { collectionsToArraySelector } from '../../redux/shop/shop.selector'

import './collection-overview.styles.scss'

const CollectionOverview = ({ collections }) => {
  console.log(collections)
  return (
    <div className='collection-overview'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id}{...otherCollectionProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: collectionsToArraySelector
})
export default connect(mapStateToProps)(CollectionOverview)

// using Object.values 
//without creatting extra selector , we use the same selector: collectionsShopSelector
// export const CollectionOverview = () => {
//   const collections = useSelector(selectShopCollections)
//   return (
//     <div className="collections-overview">
//       {Object.values(collections).map((collection) => (
//         <CollectionPreview key={collection.id} {...collection} />
//       ))}
//     </div>
//   )
// }
//where we use the collectionShopSelector