import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import NotificationItem from './NotificationItem';

import closeIcon from 'assets/close-icon.jpg';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
  }

  shouldComponentUpdate(next) {
    return next.listNotifications.length > this.props.listNotifications.length;
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
      <div className={css(styles.notificationsCont)}>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <p className={css(styles.notificationsTitle)}>
              Here is the list of notifications
            </p>
            <button
              className={css(styles.notificationsClose)}
              onClick={this.onClickClose}
              aria-label="Close"
            >
              <img
                className={css(styles.notificationsCloseImg)}
                src={closeIcon}
                alt="Close"
              />
            </button>

            <ul>
              {listNotifications.length === 0 && (
                <li key="no">No new notification for now</li>
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

// Styles
const styles = StyleSheet.create({
  notificationsCont: {
    position: 'fixed',
    top: '8px',
    right: '8px',
  },
  menuItem: {
    textAlign: 'right',
  },
  notifications: {
    position: 'relative',
    padding: '24px 48px 24px 24px',
    marginTop: '8px',
    border: '2px dashed red',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      background: '#ffffff',
      border: 'none',
    },
  },
  notificationsTitle: {
    marginBottom: '8px',
    '@media (max-width: 900px)': {
      height: 56,
      margin: '16px 0',
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px',
    },
  },
  notificationsClose: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    height: '32px',
    width: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'lightgray solid 1px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  notificationsCloseImg: {
    width: '16px',
    height: '16px',
  },
});

export default Notifications;
