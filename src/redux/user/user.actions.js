//function takes (type , payload ) and return big object 

import { UserActionTypes } from "./user.types";

export const setCurrentUser = user =>({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})

