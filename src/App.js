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
  state= {
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
    console.log(this.props, 'here Redux')
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
