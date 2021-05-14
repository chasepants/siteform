export default function pricingReducer(state = "", action) {
    switch (action.type) {
      case 'ADD_PRICING':
        return {
          ...state,
          pricing: action.pricing
        } 
      default:
          return state;
    }
}