import React,{useState} from 'react'
import './Authcontainer.css'
import Signup from './Signup'
import Signin from './Signin'


function Authcontainer() {

    const [getFlip,setFlip] = useState(false)

    const signupHandler = ()=>{
          
                setFlip(false)
    } 
    const signinHandler = ()=>{
           
                setFlip(true)
    }

    return (
      <>
        <div className="tabs">
          <button
            onClick={signupHandler}
            style={
              !getFlip ? { background: "#057a6b" } : { background: "#FFFFFF" }
            }
          >
            SignUp
          </button>
          <button
            onClick={signinHandler}
            style={
              getFlip ? { background: "#057a6b" } : { background: "#FFFFFF" }
            }
          >
            SignIn
          </button>
        </div>
        <div className="form-container">
          {getFlip && <Signin />}
          {!getFlip && <Signup />}
        </div>
      </>
    );
}

export default Authcontainer
