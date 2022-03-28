const initialState = {
    user: null,
    snackbar:{view: false,
        message: '',
        success:false},
    
}
//console.log(initialState.user);
const userReducer = (state = initialState, action) => {
    
    
    switch (action.type) {
        case 'user':
            console.log(action.payload);
            return {
                ...state,
                user: action.payload,   
            }
            case 'message':
            return {
                ...state,
                snackbar: action.payload,   
            }

        default:
            return state
    }
}
export default userReducer