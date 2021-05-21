export default function userReducer(state = {first_name: "", last_name: "", username: "", address: "", phone: ""}, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                first_name: action.first_name,
                last_name: action.last_name,
                username: action.username
            } 
        default:
            return state;
    }
}