import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useDispatch, useSelector } from 'react-redux';

import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import { logOut, logIn } from '../store/appSlice/slice';
import { selectIsUserLoggedIn } from '../store/appSlice/selectors';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsUserLoggedIn);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  function handleKeydown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      dispatch(logOut());
    }
  }

  function login(email, password) {
    dispatch(logIn({ email, password }));
  }

  return (
    <>
      {isLoggedIn && <Notifications />}
      <div className={`${css(styles.App)}`}>
        <Header />

        <div className={`${css(styles.AppBody)}`}>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={login} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
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
    </>
  );
}

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
