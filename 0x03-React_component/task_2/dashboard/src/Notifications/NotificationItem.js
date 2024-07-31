import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value, markAsRead }) {
  if (html) {
    return (
      <li
        className="Notifications-li"
        dangerouslySetInnerHTML={{ __html: html }}
        onClick={markAsRead}
      ></li>
    );
  }

  return (
    <li
      className="Notifications-li"
      data-notification-type={type}
      onClick={markAsRead}
    >
      {value}
    </li>
  );
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
export default NotificationItem;
