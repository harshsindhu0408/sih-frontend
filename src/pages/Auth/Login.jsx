import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const style = {
    overflow: "hidden",
    marginTop: "10px",
    paddingBottom: "5px",
  };
  const [showLogin, setShowLogin] = useState(true); // State to track login/registration section

  const [signInDetails, setSignInDetails] = useState({
    SignInemail: "",
    SignInPassword: "",
  });
  const [signUpDetails, setsignUpDetails] = useState({
    AgencyName: "",
    email: "",
    password: "",
    PhoneNumber: "",
    Experties: "",
  });

  const handleSignInChanges = (e) => {
    const { name, value } = e.target;
    setSignInDetails((user) => ({ ...user, [name]: value }));
    console.log(signInDetails);
  };
  const handleSignUpChanges = (e) => {
    const { name, value } = e.target;
    setsignUpDetails((user) => ({ ...user, [name]: value }));
    console.log(signUpDetails);
  };

  const handleToggleSection = () => {
    setShowLogin(!showLogin); // Toggle between login and registration
  };

  const [signInRecords, setSignInRecords] = useState([]);
  const [signUpRecords, setSignUpRecords] = useState([]);
  const handleSignInSubmit = (e) => {
    e.preventDefault();

    const newSignInRecords = { ...signInDetails };
    setSignInRecords([...signInRecords, newSignInRecords]);
    console.log(signInDetails);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const newSignUpRecords = { ...signUpDetails };
    setSignUpRecords([...signUpRecords, newSignUpRecords]);
    console.log(signUpDetails);
  };

  return (
    <>
      <div>
        <div className="background" />
        <div className="container">
          <div className="item">
            <h2 className="logo">
              <i className="bx bxl-xing" />
              Smart India Hackathon
            </h2>
            <div className="text-item">
              <h2>
                Welcome! <br />
                <span>We Rescue People in Need</span>
              </h2>
            </div>
          </div>
          <div className={`login-section ${showLogin ? "active" : ""}`}>
            <div className="form-box login">
              <form onSubmit={handleSignInSubmit}>
                <h2>{showLogin ? "Sign Up" : "Sign In"}</h2>
                <div className="input-box">
                  <span className="icon">
                    <i className="bx bxs-envelope" />
                  </span>
                  <input
                    type="email"
                    autoComplete="off"
                    name="SignInemail"
                    id="SignInemail"
                    value={signInDetails.email}
                    onChange={handleSignInChanges}
                    required={true}
                  />
                  <label htmlFor="">Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="bx bxs-lock-alt" />
                  </span>
                  <input
                    type="password"
                    autoComplete="off"
                    name="SignInPassword"
                    id="SignInPassword"
                    value={signInDetails.password}
                    onChange={handleSignInChanges}
                    required={true}
                  />
                  <label htmlFor="">Password</label>
                </div>
                <div className="remember-password">
                  <label>
                    <input type="checkbox" />
                    Remember Me
                  </label>
                  <Link to="/">Forget Password</Link>
                </div>
                <button className="btn">Login In</button>
                <div className="create-account">
                  <p>
                    {showLogin
                      ? "Create A New Account? "
                      : "Already Have An Account? "}
                    <button
                      className="toggle-button"
                      onClick={handleToggleSection}
                    >
                      {showLogin ? "Sign Up" : "Sign In"}
                    </button>
                  </p>
                </div>
              </form>
            </div>
            <div className="flex flex-col form-box register">
              <h2 style={style}>Sign Up</h2>
              <form className="signUp" onSubmit={handleSignUpSubmit}>
                <div className="input-box">
                  <input
                    type="text"
                    name="AgencyName"
                    id="AgencyName"
                    value={signUpDetails.AgencyName}
                    onChange={handleSignUpChanges}
                    autoComplete="off"
                    required={true}
                  />
                  <label>Agency Name</label>
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={signUpDetails.email}
                    onChange={handleSignUpChanges}
                    autoComplete="off"
                    required={true}
                  />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="bx bxs-lock-alt" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={signUpDetails.password}
                    onChange={handleSignUpChanges}
                    autoComplete="off"
                    required={true}
                  />
                  <label>Password</label>
                </div>
                <div className="input-box">
                  <input
                    type="number"
                    name="PhoneNumber"
                    id="PhoneNumber"
                    value={signUpDetails.PhoneNumber}
                    onChange={handleSignUpChanges}
                    autoComplete="off"
                    required={true}
                  />
                  <label>Phone Number</label>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    name="Experties"
                    id="Experties"
                    value={signUpDetails.Experties}
                    onChange={handleSignUpChanges}
                    autoComplete="off"
                    required={true}
                  />
                  <label>Experties</label>
                </div>
                <div className="remember-password">
                  <label htmlFor="">
                    <input type="checkbox" required={true} />I agree with this
                    statement
                  </label>
                </div>
                <button className="btn">Register</button>
                <div className="create-account">
                  <p>
                    {showLogin
                      ? "Create A New Account? "
                      : "Already Have An Account? "}
                    <button
                      className="toggle-button"
                      onClick={handleToggleSection}
                    >
                      {showLogin ? "Sign In" : "Sign Up"}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
