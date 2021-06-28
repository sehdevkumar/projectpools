import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { signup } from '../../Store/Actions/AuthActions';
import './Signup.css'
function Signup() {

    const dispatch = useDispatch();
    const response = useSelector(state => state.authReducer);
    const [getError,setError] = useState("");

    useEffect(()=>{
        if(!response.loggedIn){
          setError(response.error);
        }
    },[response])
    

    const [getInputs,setInputs] = useState({
      name:"",
      email:"",
      password:"",
      passwordrepeat:""
    })

    const inputHandler = (e)=>{
    
       const name = e.target.name;
       const value = e.target.value;
       setInputs({
         ...getInputs,[name]:value
       })
    }

    const submithtmlform = (e)=>{
          e.preventDefault();
          console.log(getInputs)
          const {name,email,password,passwordrepeat} = getInputs
          dispatch(signup(name,email,password,passwordrepeat))
    }


    return (
      <>
        <form>
          <div className="container">
            <h1>Register</h1>
            <p>Please fill in this htmlform to create an account.</p>
            <p style={{ color: "red" }}>{getError}*</p>
            <hr />

            <label>
              <b>Full Name</b>
            </label>
            <input
              type="text"
              onChange={inputHandler}
              value={getInputs.name}
              placeholder="Enter Fullname"
              name="name"
              id="fullname"
              required
            />

            <label>
              <b>Email</b>
            </label>
            <input
              type="text"
              onChange={inputHandler}
              value={getInputs.email}
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />

            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              onChange={inputHandler}
              value={getInputs.password}
              placeholder="Enter Password"
              name="password"
              id="password"
              required
            />

            <label>
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              onChange={inputHandler}
              value={getInputs.passwordrepeat}
              placeholder="Repeat Password"
              name="passwordrepeat"
              id="passwordrepeat"
              required
            />
            <hr />

            <button type="submit" onClick={submithtmlform} className="registerbtn">
              Register
            </button>
          </div>
        </form>
      </>
    );
}

export default Signup
