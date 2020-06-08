const INTIAL_STATE = {
  currentUser :null
}

const userReucer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReucer;