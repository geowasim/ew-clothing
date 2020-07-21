import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'

import { collectionsToArraySelector } from '../../redux/shop/shop.selector'
import { CollectionsOverviewContainer } from './collections-overview.styles';


// import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => 
  (
    <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
  )


const mapStateToProps = createStructuredSelector({
  collections: collectionsToArraySelector
})
export default connect(mapStateToProps)(CollectionsOverview)

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