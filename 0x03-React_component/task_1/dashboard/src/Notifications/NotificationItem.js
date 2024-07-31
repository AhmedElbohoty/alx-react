import React from 'react';

function NotificationItem({ type, html, value }) {
  if (html) {
    return (
      <li
        className="Notifications-li"
        dangerouslySetInnerHTML={{ __html: html }}
      ></li>
    );
  }

  return (
    <li className="Notifications-li" data-notification-type={type}>
      {value}
    </li>
  );
}

export default NotificationItem;
