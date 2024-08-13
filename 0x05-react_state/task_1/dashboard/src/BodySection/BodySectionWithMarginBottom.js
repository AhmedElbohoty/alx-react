import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import BodySection from './BodySection';

function BodySectionWithMarginBottom(props) {
  return (
    <div className={`${css(styles.bodySectionWithMargin)}`}>
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

// styles
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
});

export default BodySectionWithMarginBottom;
