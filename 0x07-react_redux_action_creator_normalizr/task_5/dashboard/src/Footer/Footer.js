import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { getFooterCopy, getFullYear } from 'utils/utils';
import { AppContext } from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <div className={css(styles.footer)}>
      {user.isLoggedIn && <a href="#">Contact us</a>}
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

// styles
const styles = StyleSheet.create({
  footer: {
    height: '64px',
    minHeight: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderTop: 'var(--primary-2) solid 2px',
    fontStyle: 'italic',
  },
});

export default Footer;
