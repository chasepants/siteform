export default function userReducer(state = {first_name: "", last_name: "", username: "", address: "", phone: ""}, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                first_name: action.user.first_name,
                last_name: action.user.last_name,
                username: action.user.username,
                id: action.user.id
            } 
        default:
            return state;
    }
}