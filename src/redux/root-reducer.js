import {combineReducers} from 'redux'
import userReucer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
  user: userReucer,
  cart: cartReducer
})
