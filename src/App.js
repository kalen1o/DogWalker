import React, { Component } from 'react';
import './App.css';
import { compose } from 'recompose';
import { withAuthentication } from './config/Session';

import {Provider, connect}   from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Header from './components/Header';
import SignUp from './screens/SignUp';
import MainContent from './components/MainContent/MainContent';

import Registration from './screens/Registration';
import CreatePet from './screens/CreatePet';
import SignIn from './screens/SignIn';
import PasswordForgetPage from './screens/PasswordForget';
import Account from './screens/Account';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaw, faBars, faSearch, faBone, faIdCard, faUserCircle, faQuestionCircle, faEnvelope, faDog, faUserCog, faUserTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faPaw, faBars, faSearch, faBone, faIdCard, faUserCircle, faQuestionCircle, faEnvelope, faDog, faUserCog, faUserTimes, faEye, faEyeSlash);

const store = createStore(rootReducer, applyMiddleware(thunk))

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
    console.log(this.state, 'here Redux')
    return (
      <BrowserRouter history = {createHistory()}>
        <Header />
        <div className="content-wrapper">
          <Switch>
            <Route path="/" component = { MainContent } exact />
            <Route path="/signup" component = { SignUp } exact />
            <Route path="/registration" component = { Registration } exact />
            <Route path="/create-pet" component = { CreatePet } exact />
            <Route path="/signin" component = { SignIn } exact />
            <Route path="/password-forget" component = { PasswordForgetPage } exact />
            <Route path="/account" component = { Account } exact />
          </Switch>
          </div>
      </BrowserRouter>
    );
  }

}

App = compose(
  withAuthentication,
  connect(state => ({auth: state.auth}), null)
)(App)

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWrapper;
