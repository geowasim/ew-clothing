import { createSelector } from "reselect"


const shopSelector = state => state.shop

export const collectionsShopSelector = createSelector(
  [shopSelector],
  shop => shop.collections
)

//selectCollectionsForPreview ... Yiuha
export const collectionsToArraySelector = createSelector(
  [collectionsShopSelector],
  collections => Object.keys(collections).map(key=> collections[key])
)

export const collectionsToArrayValuesSelector = createSelector(
  [collectionsShopSelector],
  collections => Object.values(collections).map(key=> collections)
)

// a second version of selector 
// export const collectionsToArraySelector = createSelector(
//   [collectionsShopSelector],
//   collections => Object.values(collections).map(collection=> collection )
// )

//for using /hats or jackets ... to update the state
export const collectionSelector = collectionUrlParam => createSelector(
  [collectionsShopSelector],
  collections => collections[collectionUrlParam]
  )











//case 1 ----------> map using matching urlPramams id with collection map id

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   women: 4,
//   men: 5  
// }
// export const collectionSelector = collectionUrlParam => createSelector(
//   [collectionShopSelector],
//   collections => collections.find(
//     collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//   )
// )

//find collection.id matching the url parameter of our collection id map