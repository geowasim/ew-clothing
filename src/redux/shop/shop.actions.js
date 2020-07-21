import ShopActionTypes from "./shop.types";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)) )
  }
}

  



/**
 * !fetchCollectionsStartAsync
 * this is the function that we will pass into the component to begin the process (thunk process) 
 * we will do inside it all fetch job that we assigned before in ShopPage (componentDidMount)
 */
  /** 
   *  * before updating the shopaction with fetch by thunk
   */
// export const updateCollections = (collectionsMap) => ({
//   type: ShopActionTypes.UPDATE_COLLECTIONS,
//   payload : collectionsMap
// })







//Update shopActions to match the three cases (start, success, failure), 

// Thunks are action creator that returns a function that gets the dispatch "very similar to the map"

// dispatch the props instead of creating an action that returns an action object.

// That's all we're doing.


// We're going to write a function that returns a function that gets dispatch in it so that whenever dispatch is called it will fire multiple actions.
