export default function bucketReducer(state = {}, action) {
    switch (action.type) {
      case 'ADD_BUCKET':
        return {
          ...state,
          bucketName: action.bucketName
        } 
      default:
          return state;
    }
}