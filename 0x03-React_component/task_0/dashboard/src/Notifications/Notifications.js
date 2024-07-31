import React from 'react';
import PropTypes from 'prop-types';

import NotificationItem from './NotificationItem';

import closeIcon from 'assets/close-icon.jpg';
import NotificationItemShape from './NotificationItemShape';

import './Notifications.css';

function Notifications({ displayDrawer, listNotifications }) {
  let elements = [
    <li key="no" className="Notifications-li">
      No new notification for now
    </li>,
  ];

  if (listNotifications.length) {
    elements = listNotifications.map((notif) => {
      const { id, type, value, html } = notif;

      return (
        <NotificationItem key={id} type={type} value={value} html={html} />
      );
    });
  }

  function onClickClose() {
    console.log('Close button has been clicked');
  }

  return (
    <div className="Notifications-cont">
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <p className="Notifications-title">
            Here is the list of notifications
          </p>
          <button
            className="Notifications-close"
            onClick={onClickClose}
            aria-label="Close"
          >
            <img
              className="Notifications-close-img"
              src={closeIcon}
              alt="Close"
            />
          </button>

          <ul>{elements}</ul>
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
