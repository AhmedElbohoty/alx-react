import React, { Fragment, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  function handleChangeEmail(event) {
    const { value } = event.target;
    setEmail(value);
    checkIfEnableSubmit(value, password);
  }

  function handleChangePassword(event) {
    const { value } = event.target;
    setPassword(value);
    checkIfEnableSubmit(email, value);
  }

  function checkIfEnableSubmit(email, password) {
    if (email.trim() !== '' && password.trim() !== '') {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <Fragment>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
        {/* Email */}
        <div className={css(styles.formInputCont)}>
          <label htmlFor="email" className={css(styles.formLabel)}>
            Email:
          </label>
          <input
            className={css(styles.formInput)}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        {/* Password */}
        <div className={css(styles.formInputCont)}>
          <label htmlFor="password" className={css(styles.formLabel)}>
            Password:
          </label>
          <input
            className={css(styles.formInput)}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <input
          className={css(styles.formButton)}
          type="submit"
          value="OK"
          disabled={!enableSubmit}
        />
      </form>
    </Fragment>
  );
}

// styles
const styles = StyleSheet.create({
  p: {
    marginBottom: '8px',
  },
  form: {
    display: 'flex',
    gap: '8px',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  formInputCont: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  formInput: {
    width: '200px',
    height: '32px',
    padding: '8px',
    border: 'lightgray solid 1px',
    borderRadius: '4px',
  },
  formLabel: {
    '@media (max-width: 900px)': {
      width: '80px',
    },
  },
  formButton: {
    height: '32px',
    width: '32px',
    border: 'lightgray solid 1px',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    ':disabled': {
      cursor: 'default',
    },
  },
});

export default Login;
