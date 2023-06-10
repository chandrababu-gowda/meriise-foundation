import React from "react";

function Signup() {
  return (
    <section className="section section__login-signup">
      <div className="login-signup__selectors">
        <button className="login-signup__selector" value="login">
          Login
        </button>
        <button className="login-signup__selector" value="signup">
          Signup
        </button>
      </div>
      <form action="#" method="post">
        <input
          className="login-signup__inputs"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="login-signup__inputs"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="login-signup__inputs"
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />
      </form>
      <p>or</p>
      <div className="login-signup__apps">
        <div className="login-signup__app"></div>
        <div className="login-signup__app"></div>
        <div className="login-signup__app"></div>
      </div>
      <button className="login-signup__submit-btn" type="submit">
        Submit
      </button>
    </section>
  );
}

export default Signup;
