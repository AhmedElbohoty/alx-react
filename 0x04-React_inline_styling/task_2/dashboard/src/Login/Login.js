import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <Fragment>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        {/* Email */}
        <div className={css(styles.formInputCont)}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.formInput)}
            type="email"
            name="email"
            id="email"
          />
        </div>

        {/* Password */}
        <div className={css(styles.formInputCont)}>
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.formInput)}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button className={css(styles.formButton)}>OK</button>
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
  },
  formInputCont: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  formInput: {
    width: '200px',
    height: '32px',
    border: 'lightgray solid 1px',
    borderRadius: '4px',
  },
  formButton: {
    height: '32px',
    width: '32px',
    border: 'lightgray solid 1px',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
});

export default Login;
