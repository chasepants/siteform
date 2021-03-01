export default function templateReducer(state = {}, action) {
    switch (action.type) {
      case 'ADD_TEMPLATE':
        return {
          ...state,
          templateName: action.templateName
        } 
      default:
          return state;
    }
}