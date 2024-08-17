import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import NotificationItem from './NotificationItem';

import closeIcon from 'assets/close-icon.jpg';
import NotificationItemShape from './NotificationItemShape';

function Notifications({
  displayDrawer = false,
  listNotifications = [],
  handleDisplayDrawer = () => {},
  handleHideDrawer = () => {},
}) {
  function markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  return (
    <div className={css(styles.notificationsCont)}>
      {!displayDrawer && (
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          Your notifications
        </div>
      )}
      {displayDrawer && (
        <div className={css(styles.notifications)}>
          <p className={css(styles.notificationsTitle)}>
            Here is the list of notifications
          </p>
          <button
            className={css(styles.notificationsClose)}
            onClick={handleHideDrawer}
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
                    markAsRead={() => markAsRead(id)}
                  />
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

const opacityAnimation = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounceAnimation = {
  '0%': { transform: 'translateY(0px)' },
  '33%': { transform: 'translateY(-5px)' },
  '66%': { transform: 'translateY(5px)' },
  '100%': { transform: 'translateY(0px)' },
};

// Styles
const styles = StyleSheet.create({
  notificationsCont: {
    position: 'fixed',
    top: '8px',
    right: '8px',
  },
  menuItem: {
    padding: '8px',
    textAlign: 'right',
    backgroundColor: '#fff8f8',
    zIndex: 999,
    ':hover': {
      animationName: [opacityAnimation, bounceAnimation],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
      cursor: 'pointer',
    },
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

// Class version
// handleDisplayDrawer: () => {}
// class Notifications extends Component {
//   constructor(props) {
//     super(props);
//     this.markAsRead = this.markAsRead.bind(this);
//   }

//   markAsRead(id) {
//     console.log(`Notification ${id} has been marked as read`);
//   }

//   render() {
//     const {
//       displayDrawer,
//       listNotifications,
//       handleDisplayDrawer,
//       handleHideDrawer,
//     } = this.props;

//     return (
//       <div className={css(styles.notificationsCont)}>
//         {!displayDrawer && (
//           <div
//             className={css(styles.menuItem)}
//             onClick={handleDisplayDrawer}
//           >
//             Your notifications
//           </div>
//         )}
//         {displayDrawer && (
//           <div className={css(styles.notifications)}>
//             <p className={css(styles.notificationsTitle)}>
//               Here is the list of notifications
//             </p>
//             <button
//               className={css(styles.notificationsClose)}
//               onClick={handleHideDrawer}
//               aria-label="Close"
//             >
//               <img
//                 className={css(styles.notificationsCloseImg)}
//                 src={closeIcon}
//                 alt="Close"
//               />
//             </button>

//             <ul>
//               {listNotifications.length === 0 && (
//                 <li key="no">No new notification for now</li>
//               )}
//               {listNotifications.length !== 0 &&
//                 listNotifications.map((notif) => {
//                   const { id, type, value, html } = notif;

//                   return (
//                     <NotificationItem
//                       key={id}
//                       type={type}
//                       value={value}
//                       html={html}
//                       markAsRead={() => this.markAsRead(id)}
//                     />
//                   );
//                 })}
//             </ul>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
