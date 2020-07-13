import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions'
import { currentUserSelector } from './redux/user/user.selector';


class App extends React.Component {

  unsubscribeFromAuth=null;

  componentDidMount(){
    const { setCurrentUser  } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot(snapShot=>{
            setCurrentUser({
                id:snapShot.id,
                ...snapShot.data()
            });
          });
        } 
      setCurrentUser(userAuth)


    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header /> 
        {/* after redux connect we removed the props
        currentUser={this.state.currentUser} */
        }
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
            this.props.currentUser?
            ( <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage/>
            )

          } />
        </Switch>
      </div>
    );
  }
}
//mapStateToProps retrive the data from the store

const mapStateToProps = createStructuredSelector ({
  currentUser: currentUserSelector,

})

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch( setCurrentUser(user) ) 
})
export default connect(mapStateToProps, mapDispatchToProps)(App);











// if(userAuth) {
      //   const userRef = await createUserProfileDocument (userAuth)

      //   userRef.onSnapshot(snapShot => {
      //     this.setState({   
      //       currentUser: {
      //         id: snapShot.id,
      //         ...snapShot.data()
      //       }
      //     })
      //   });
      // }
      //this.setState ({currentUser: userAuth})//without it signout will not work till page refresh



      //db
  // componentDidMount (){
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged( async user=>{
  //     createUserProfileDocument(user)
  //     console.log(user)
  //   })
  // }


  //Auth
  // componentDidMount(){
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged( user=>{
  //     this.setState({ currentUser: user });
      
  //     console.log(user)
  //   })
  // }