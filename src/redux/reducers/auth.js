export default function authReducer(state = false, action) {
    switch (action.type) {
      case 'UPDATE_AUTH':
        return {
          ...state,
          auth: action.auth
        } 
      default:
          return state;
    }
}