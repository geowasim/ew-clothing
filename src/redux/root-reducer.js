import {combineReducers} from 'redux'
import userReucer from './user/user.reducer'

export default combineReducers({
  user: userReucer
})
