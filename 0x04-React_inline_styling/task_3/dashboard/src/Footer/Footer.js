import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { getFooterCopy, getFullYear } from 'utils/utils';

function Footer() {
  return (
    <div className={css(styles.footer)}>
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
    borderTop: 'var(--primary-2) solid 2px',
    fontStyle: 'italic',
  },
});

export default Footer;
