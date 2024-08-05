import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import logo from 'assets/holberton_logo.jpg';

function Header() {
  return (
    <div className={css(styles.header)}>
      <img className={css(styles.headerImg)} src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </div>
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
});

export default Header;
