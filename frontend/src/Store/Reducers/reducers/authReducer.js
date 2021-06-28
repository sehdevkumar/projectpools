import {SIGNUP_SUCCESS,SIGNUP_FAILED} from '../../Types/Types'

const initialState = {
    userInfo:{},
    error:"",
    loggedIn:false
}

const authReducer = (state=initialState,action)=>{

    switch (action.type) {
      case SIGNUP_SUCCESS:
        return {
          ...state,
          userInfo: action.payload.user,
          loggedIn: true,
        };
      case SIGNUP_FAILED:
        return {
          ...state,
          error:action.payload.error,
        };

      default:
        return state
    }

}

export default authReducer;
