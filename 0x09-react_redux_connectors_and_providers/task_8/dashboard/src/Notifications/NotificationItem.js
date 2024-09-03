import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';

import { selectNotificationById } from '../store/notificationSlice/selectors';
import { updateIsRead } from '../store/notificationSlice/slice';

function NotificationItem({ id }) {
  const dispatch = useDispatch();
  const notif = useSelector((s) => selectNotificationById(s, id));

  const { value, type, isRead, html } = notif.context;

  function markAsRead() {
    dispatch(updateIsRead({ id, newIsRead: true }));
  }

  function getStyle(type) {
    if (type === 'default') return css(styles.default);
    if (type === 'urgent') return css(styles.urgent);
    return '';
  }

  if (isRead) return <></>;

  if (html) {
    return (
      <li
        className={`${getStyle(type)} ${css(styles.li)}`}
        dangerouslySetInnerHTML={{ __html: html }}
        onClick={markAsRead}
      ></li>
    );
  }

  return (
    <li
      className={`${getStyle(type)} ${css(styles.li)}`}
      data-notification-type={type}
      onClick={markAsRead}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.string,
};

// Styles
const styles = StyleSheet.create({
  li: {
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '#000000 solid 1px',
      padding: '10px 8px',
      fontSize: '20px',
    },
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

export default NotificationItem;
