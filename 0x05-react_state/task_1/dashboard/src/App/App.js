import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import { getLatestNotification } from 'utils/utils';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() },
];

function App({ logOut, isLoggedIn }) {
  const [displayDrawer, setDisplayDrawer] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  function handleKeydown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  function handleDisplayDrawer() {
    setDisplayDrawer(true);
  }

  function handleHideDrawer() {
    setDisplayDrawer(false);
  }

  return (
    <Fragment>
      <Notifications
        displayDrawer={displayDrawer}
        listNotifications={listNotifications}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
      <div className={`${css(styles.App)}`}>
        <Header />

        <div className={`${css(styles.AppBody)}`}>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis at tempora odio.
            </p>
          </BodySection>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

// Styles
const styles = StyleSheet.create({
  App: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
  },
  AppBody: { padding: '48px' },
});

export default App;
