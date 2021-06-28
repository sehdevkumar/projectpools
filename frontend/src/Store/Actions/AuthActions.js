import { SIGNUP_FAILED, SIGNUP_SUCCESS } from "../Types/Types"

export const signup = (name,email,password,passwordrepeat) => async (dispatch)=>{
            
          
            try {

                  if (!name || !email || !password || !passwordrepeat) {
                    dispatch({
                      type: SIGNUP_FAILED,
                      payload: {
                        error: "Please Fill The Inputs Fields",
                      },
                    });
                    return;
                
                  } else if (password !== passwordrepeat) {
                    dispatch({
                      type: SIGNUP_FAILED,
                      payload: {
                        error: "Password Not Matched!",
                      },
                    });
                  } else if (password.length<6) {
                    dispatch({
                      type: SIGNUP_FAILED,
                      payload: {
                        error: "Password Length Should be more than 6 Characters!",
                      },
                    });
                  }else{

                      const user =  await fetch("http://localhost:5000/api/createuser",{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify({
                                name,email,password
                            })
                        });
                      const userResponse = await user.json()
                      console.log(userResponse)
                    if(user.status===200){
                      dispatch({
                        type: SIGNUP_SUCCESS,
                        payload: {
                          user: userResponse.user,
                        },
                        loggedIn: true,
                      });
                    }
                    else{
                         dispatch({
                           type: SIGNUP_FAILED,
                           payload: {
                             error: userResponse.error
                           },
                           loggedIn: false, 
                         });
                    }
                    


                  }
                    
            } catch (error) {
                 console.log(error.message)
            }
}

