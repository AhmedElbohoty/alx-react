import React from 'react';
import PropTypes from 'prop-types';

import NotificationItem from './NotificationItem';

import closeIcon from 'assets/close-icon.jpg';
import { getLatestNotification } from 'utils/utils';

import './Notifications.css';

function Notifications({ displayDrawer }) {
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

          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />

            <NotificationItem html={getLatestNotification()} />
          </ul>
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
