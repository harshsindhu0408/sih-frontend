import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
      <div className="box">
        <form>
          <h2>Sign In</h2>
          <div className="inputBox">
            {/* <AiOutlineMail/> */}
            <input type="email " required="true"></input>
            <label for="">Email</label>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="true"></input>
            <label for="">Password</label>
            <i></i>
          </div>
          <div className="links">
            <a href="#">Forgot Password</a>
            <a href="#">Sign Up</a>
          </div>
          <input type="submit" value="Login"/>
        </form>
      </div>
    </>
  )
}

export default Login
