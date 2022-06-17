import { LOGIN, SIGNUP, AUTHENTICATE, LOGOUT } from "../actions/auth"

const initState = {
    token: null,
    userId: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case AUTHENTICATE:
            return{
                token: action.token,
                userId: action.userId
            }
        case LOGIN:
            return{
                token: action.token,
                userId: action.userId
            }
        case LOGOUT:
            return initState
        case SIGNUP:
            return{
                token: action.token,
                userId: action.userId
            }
        default: return state
    }
}