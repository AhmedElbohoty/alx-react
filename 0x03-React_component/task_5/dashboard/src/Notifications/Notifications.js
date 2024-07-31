import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NotificationItem from './NotificationItem';

import closeIcon from 'assets/close-icon.jpg';
import NotificationItemShape from './NotificationItemShape';

import './Notifications.css';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  onClickClose() {
    console.log('Close button has been clicked');
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
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
              onClick={this.onClickClose}
              aria-label="Close"
            >
              <img
                className="Notifications-close-img"
                src={closeIcon}
                alt="Close"
              />
            </button>

            <ul>
              {listNotifications.length === 0 && (
                <li key="no" className="Notifications-li">
                  No new notification for now
                </li>
              )}
              {listNotifications.length !== 0 &&
                listNotifications.map((notif) => {
                  const { id, type, value, html } = notif;

                  return (
                    <NotificationItem
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={() => this.markAsRead(id)}
                    />
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    );
  }
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
