export default function breadCrumbReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_BREAD_CRUMB':
        return [
          ...state, action.breadCrumb
        ]
      default:
          return state;
    }
}