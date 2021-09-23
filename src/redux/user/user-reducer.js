// {
//     type:
//     payload:
// }
import userActionTypes  from "./user.types";

const INTIAL_STATE = {
    currentUser:null
}

// WHEN I ADD INTIALSTATE TO THE FUNCTION CALL THAT MEAN IF state has no value in it
// it will take that inital_state as default value
//state can be intialize value or the previous value
const userReducer = (state = INTIAL_STATE ,action) => {

    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            }
            
        default:
            return state;
            
    }
}

export default userReducer;