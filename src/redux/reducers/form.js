export default function formReducer(state = {isFirstForm: true, isLastForm: false, formIndex: 0, formComplete: false}, action) {
    switch (action.type) {
        case 'UPDATE_FORM_INDEX':
            return {
                ...state,
                formIndex: action.formIndex
            } 
        case 'UPDATE_IS_FIRST_FORM':
            return {
                ...state,
                isFirstForm: action.isFirstForm
            } 
        case 'UPDATE_IS_LAST_FORM':
            return {
                ...state,
                isLastForm: action.isLastForm
            } 
        case 'COMPLETED_FORM':
            return {
                ...state,
                formComplete: action.formComplete
            }
        default:
            return state;
    }
}
