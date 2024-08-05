import React, { Fragment } from 'react';

import './Login.css';

function Login() {
  return (
    <Fragment>
      <p className="App-body-p">Login to access the full dashboard</p>
      <form className="form">
        {/* Email */}
        <div className="form-input-cont">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input className="form-input" type="email" name="email" id="email" />
        </div>

        {/* Password */}
        <div className="form-input-cont">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button className="form-button">OK</button>
      </form>
    </Fragment>
  );
}

export default Login;