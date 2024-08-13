import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function BodySection({ children, title }) {
  return (
    <div className={css(styles.bodySection)}>
      <h2 className={css(styles.bodySectionH2)}>{title}</h2>
      {children}
    </div>
  );
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

// styles
const styles = StyleSheet.create({
  bodySection: {},
  bodySectionH2: {
    marginBottom: '24px',
    fontSize: '24px',
  },
});

export default BodySection;
