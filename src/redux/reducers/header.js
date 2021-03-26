export default function headerReducer(state = "", action) {
    switch (action.type) {
      case 'ADD_HEADER':
        return {
          ...state,
          header: action.header
        } 
      default:
          return state;
    }
}