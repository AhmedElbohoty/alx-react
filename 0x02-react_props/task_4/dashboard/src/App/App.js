import React from 'react';
import PropTypes from 'prop-types';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

import './App.css';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications displayDrawer />
      <div className="App">
        <Header />
        {!isLoggedIn && <Login />}
        {isLoggedIn && <CourseList />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};
export default App;
