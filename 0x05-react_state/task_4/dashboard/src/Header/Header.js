import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';

import logo from 'assets/holberton_logo.jpg';

import { AppContext } from '../App/AppContext';

function Header() {
  const { user, logOut } = useContext(AppContext);
  return (
    <>
      <div className={css(styles.header)}>
        <img className={css(styles.headerImg)} src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      {user.isLoggedIn && (
        <div id="logoutSection" className={css(styles.logout)}>
          Welcome <strong>{user.email}</strong>{' '}
          <button className={css(styles.logoutBtn)} onClick={logOut}>
            (logout)
          </button>
        </div>
      )}
    </>
  );
}

// styles
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--primary-2)',
    borderBottom: 'var(--primary-2) solid 2px',
  },
  headerImg: {
    width: '224px',
    height: '224px',
    marginRight: '16px',
  },
  logout: {
    padding: '16px',
    borderBottom: 'var(--primary-2) solid 2px',
  },
  logoutBtn: {
    cursor: 'pointer',
  },
});

export default Header;
