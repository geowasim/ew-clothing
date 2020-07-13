import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

 // Your web app's Firebase configuration and initialize ---------- 

const config = {
  apiKey: "AIzaSyBl9rM7RNVR6_natasz3HCkEujw8HLIySQ",
  authDomain: "ec-clothing.firebaseapp.com",
  databaseURL: "https://ec-clothing.firebaseio.com",
  projectId: "ec-clothing",
  storageBucket: "ec-clothing.appspot.com",
  messagingSenderId: "332200420641",
  appId: "1:332200420641:web:ba378ef3254109b8cbca60",
  measurementId: "G-YB9B1STJY6"
}


firebase.initializeApp(config)
//DB----the function we try to write allow us to take auth object and store inside database
//----------------------------------------

//-----------------------------------------------------------------
//for google authentication & database firestore
const auth = firebase.auth();
const firestore = firebase.firestore()
//----------------------------------------------------------------
//Set new provider by googleAuth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
//-----------------------------------------------------------------
//Sign In method with popup(rpovider)
const signInWithGoogle = () => auth.signInWithPopup(provider)
//-----------------------------------------------------------------
const createUserProfileDocument =  async (userAuth, addtionalData) => {
  //when we signout we got null from auth library
  //fn is checking backing if there is back valid object (userAuth)

  if(!userAuth) return;

  //if userAuth exist then we have to make query to check if user/document exis ts
  //so we need to understand what we gonna get back first 
  // queryRefrence , and querySnapshot

  //-- if user exist we match and get 
  //1- queryRefernce
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection('users')
  //to get the data from a refernce user we have to get() a snapShot from the userRef
  const snapShot = await userRef.get()
  // console.log('User Refernce snapShot',snapShot)
  //2- querySnapShot
  // we will get exist property so we can use it ....
  //snapShot is representing the data
  //user/Document Reference perfrom CURD method

  // const collecttionSnapShot = await collectionRef.get()
  // console.log('Collection snapShot',{collection : collecttionSnapShot.docs.map(doc=> doc.data())})

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date(); 

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...addtionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  // console.log('Snap Shot',snapShot)
  // console.log('Document/user Reference',userRef)
  // console.log('userAuth',userAuth)
  // console.log('add',addtionalData)
  
  return userRef
  //without it : Cannot read property 'onSnapshot' of undefined
  //In App.js
  
  
}
//------------------------------------------------------------
//shop_data from firestore to shop component
//convert the returned array from snapShot into hash object with righ routing properties
//0: {id: "1oFFr................", title: "Women", items: Array(7)}
// 1: {id: "Q6G.................", items: Array(6), title: "Men"}
// 2: {id: "Zl..................", items: Array(5), title: "Jackets"}
// 3: {id: "p...................", items: Array(8), title: "Sneakers"}
// 4: {id: "tf0Cck..............", items: Array(9), title: "Hats"}

const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  //method from array to an object using one of properties as key
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  } ,{})
}
//--------------------------------------------------------------




export {auth};
export {firestore};
export {signInWithGoogle};
export { createUserProfileDocument };
export { convertCollectionsSnapshotToMap }
export default firebase;

