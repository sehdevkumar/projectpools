import React from 'react'
import './Signup.css'

function Signin() {
    return (
      <>
        <form>
          <div className="container">
            <h1>Login</h1>
           
            <hr />

           
            <label>
              <b>Email</b>
            </label>
            <input
              type="text"
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
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            />

           
            <hr />

            <button type="submit" className="registerbtn">
               Login
            </button>
          </div>

          <div className="container signin"></div>
        </form>
      </>
    );
}

export default Signin
