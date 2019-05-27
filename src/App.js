import React, { Component } from 'react';
import './App.css';
import { compose } from 'recompose';
import { withAuthentication } from './config/Session';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Provider, connect}   from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './store/reducers/searchReducer';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Header from './components/Header';
import SignUp from './screens/SignUp';
import MainContent from './components/MainContent/MainContent';

import Footer from './components/Footer/Footer';


import Registration from './screens/Registration';
import SignIn from './screens/SignIn';
import PasswordForgetPage from './screens/PasswordForget';
import Account from './screens/Account';
import Search from './screens/Search';
import Walker from './screens/Walker';
import DogBoarding from './components/DogBoarding/DogBoarding';
import HouseSitting from './components/HouseSitting/HouseSitting';
import DropInVisit from './components/DropInVisit/DropInVisit';
import DoggyDay from './components/DoggyDay/DoggyDay';
import Walking from './components/Walking/Walking';
import About from './screens/About';
import PrivacyStatement from './screens/PrivacyStatement';
import TermsOfService from './screens/TermOfService';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaw, faBars, faSearch, faBone, faIdCard, faUserCircle, faQuestionCircle, faEnvelope, faUserCog, faUserTimes, faEye, faEyeSlash, faDownload } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faPaw, faBars, faSearch, faBone, faIdCard, faUserCircle, faQuestionCircle, faEnvelope, faUserCog, faUserTimes, faEye, faEyeSlash, faDownload);

const store = createStore(searchReducer, applyMiddleware(thunk))

toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
})

class App extends Component {
  state = {
    authWalker: null
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authWalker => {
        authWalker
          ? this.setState({ authWalker })
          : this.setState({ authWalker: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
      <BrowserRouter history = {createHistory()}>
        <Header />
        <div className="content-wrapper">
          <Switch>
            <Route path="/" component = { MainContent } exact />
            <Route path="/signup" component = { SignUp } exact />
            <Route path="/registration" component = { Registration } exact />
            <Route path="/signin" component = { SignIn } exact />
            <Route path="/password-forget" component = { PasswordForgetPage } exact />
            <Route path="/account" component = { Account } exact />
            <Route path="/search" component = { Search } exact />
            <Route path="/walker/:uid" component = { Walker } exact />
            <Route path="/Dog-Boarding" component = { DogBoarding } exact />
            <Route path="/House-Sitting" component = { HouseSitting } exact />
            <Route path="/Drop-In-Visits" component = { DropInVisit } exact />
            <Route path="/Doggy-Day-Care" component = { DoggyDay } exact />
            <Route path="/Dog-Walking" component = { Walking } exact />
            <Route path="/aboutus" component = { About } exact />
            <Route path="/privacy" component = { PrivacyStatement } exact /> 
            <Route path="/terms" component = { TermsOfService } exact />
          </Switch>
          </div>
          <Footer />
      </BrowserRouter>
    );
  }

}

App = compose(
  withAuthentication,
  connect(state => ({search: state.searchParam}), null)
)(App)

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWrapper;
