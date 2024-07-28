import React from 'react';

import closeIcon from './assets/close-icon.jpg';
import { getLatestNotification } from './utils';

import './Notifications.css';

const Notifications = () => {
  function onClickClose() {
    console.log('Close button has been clicked');
  }

  return (
    <div className="Notifications">
      <p className="Notifications-title">Here is the list of notifications</p>
      <button
        style={{ position: 'absolute', top: 8, right: 8 }}
        onClick={onClickClose}
        aria-label="Close"
      >
        <img style={{ width: 16, height: 16 }} src={closeIcon} alt="Close" />
      </button>

      <ul>
        <li className="Notifications-li" data-priority="default">
          New course available
        </li>
        <li className="Notifications-li" data-priority="urgent">
          New resume available
        </li>
        <li
          className="Notifications-li"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notifications;
