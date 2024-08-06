import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { html, type, value, markAsRead } = this.props;

    if (html) {
      return (
        <li
          className={`${getStyle(type)} ${css(styles.li)}`}
          dangerouslySetInnerHTML={{ __html: html }}
          onClick={markAsRead}
        ></li>
      );
    }

    return (
      <li
        className={`${getStyle(type)} ${css(styles.li)}`}
        data-notification-type={type}
        onClick={markAsRead}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => console.log('empty func'),
};

// Styles
const styles = StyleSheet.create({
  li: {
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '#000000 solid 1px',
      padding: '10px 8px',
      fontSize: '20px',
    },
  },
  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },
});

function getStyle(type) {
  if (type === 'default') return css(styles.default);

  if (type === 'urgent') return css(styles.urgent);

  return '';
}

export default NotificationItem;
