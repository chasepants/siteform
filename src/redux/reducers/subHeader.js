export default function subHeaderReducer(state = "", action) {
    switch (action.type) {
      case 'ADD_SUB_HEADER':
        return {
          ...state,
          text: action.header
        } 
      default:
          return state;
    }
}