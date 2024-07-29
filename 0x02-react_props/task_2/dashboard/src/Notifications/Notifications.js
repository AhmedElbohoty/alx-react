import React from 'react';

import NotificationItem from './NotificationItem';

import closeIcon from 'assets/close-icon.jpg';
import { getLatestNotification } from 'utils/utils';

import './Notifications.css';

const Notifications = () => {
  function onClickClose() {
    console.log('Close button has been clicked');
  }

  return (
    <div className="Notifications">
      <p className="Notifications-title">Here is the list of notifications</p>
      <button
        className="Notifications-close"
        style={{ position: 'absolute', top: 8, right: 8 }}
        onClick={onClickClose}
        aria-label="Close"
      >
        <img style={{ width: 16, height: 16 }} src={closeIcon} alt="Close" />
      </button>

      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />

        <NotificationItem html={getLatestNotification()} />
      </ul>
    </div>
  );
};

export default Notifications;
