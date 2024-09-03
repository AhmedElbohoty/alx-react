import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useDispatch, useSelector } from 'react-redux';

import NotificationItem from './NotificationItem';
import closeIcon from 'assets/close-icon.jpg';
import { updateDisplayDrawer } from '../store/appSlice/slice';
import { selectDisplayDrawer } from '../store/appSlice/selectors';
import {
  selectNotifications,
  selectNotifIsFetching,
} from '../store/notificationSlice/selectors';
import { fetchNotificationsThunk } from '../store/notificationSlice/thunks';

function Notifications() {
  const dispatch = useDispatch();
  const displayDrawer = useSelector(selectDisplayDrawer);
  const listNotifications = useSelector(selectNotifications);
  const isFetching = useSelector(selectNotifIsFetching);
  const [filter, setFilter] = useState(null);
  const sortedNotif = useMemo(() => {
    if (!filter) return listNotifications;

    return listNotifications.filter(({ context }) => context.type === filter);
  }, [filter, listNotifications]);

  const onClickClose = useCallback(() => {
    handleHideDrawer();
  }, [handleHideDrawer]);

  useEffect(() => {
    dispatch(fetchNotificationsThunk());
  }, []);

  function handleDisplayDrawer() {
    dispatch(updateDisplayDrawer(true));
  }

  function handleHideDrawer() {
    dispatch(updateDisplayDrawer(false));
  }

  if (isFetching) {
    return <></>;
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
            onClick={onClickClose}
            aria-label="Close"
          >
            <img
              className={css(styles.notificationsCloseImg)}
              src={closeIcon}
              alt="Close"
            />
          </button>

          <button
            className={css(
              styles.filter,
              filter === 'urgent' && styles.filterActive
            )}
            onClick={() => setFilter('urgent')}
          >
            ‼️
          </button>
          <button
            className={css(
              styles.filter,
              filter === 'default' && styles.filterActive
            )}
            onClick={() => setFilter('default')}
          >
            💠
          </button>
          <button
            className={css(styles.filter)}
            onClick={() => setFilter(null)}
          >
            Reset
          </button>

          <ul>
            {sortedNotif.length === 0 && (
              <li key="no">No new notification for now</li>
            )}
            {sortedNotif.length !== 0 &&
              sortedNotif.map((notif) => {
                const { id } = notif;

                return <NotificationItem key={id} id={id} />;
              })}
          </ul>
        </div>
      )}
    </div>
  );
}

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
      animationIterationCount: 3,
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
  filter: {
    width: '56px',
    height: '32px',
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    border: '#f0f0f0 solid 1px',
    marginRight: '8px',
    marginLeft: '8px',
    cursor: 'pointer',
  },
  filterActive: {
    borderColor: 'red',
  },
});

export default Notifications;
