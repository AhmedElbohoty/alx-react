import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useDispatch, useSelector } from 'react-redux';

import logo from 'assets/holberton_logo.jpg';

import { selectUser } from '../store/appSlice/selectors';
import { logOut } from '../store/appSlice/slice';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function onClick() {
    dispatch(logOut());
  }

  return (
    <>
      <div className={css(styles.header)}>
        <img className={css(styles.headerImg)} src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      {user.isLoggedIn && (
        <div id="logoutSection" className={css(styles.logout)}>
          Welcome <strong>{user.email}</strong>{' '}
          <button className={css(styles.logoutBtn)} onClick={onClick}>
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
