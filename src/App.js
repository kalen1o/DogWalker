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
import Registration from './screens/Registration';
import CreatePet from './screens/CreatePet';
import SignIn from './screens/SignIn';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaw, faBars, faSearch, faBone, faIdCard, faUserCircle, faQuestionCircle, faEnvelope, faDog, faUserCog, faUserTimes } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faPaw, faBars, faSearch, faBone, faIdCard, faUserCircle, faQuestionCircle, faEnvelope, faDog, faUserCog, faUserTimes);

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
    return (
      <BrowserRouter history = {createHistory()}>
        <Header />
          <Switch>
            <Route path="/signup" component = { SignUp } exact />
            <Route path="/registration" component = { Registration } exact />
            <Route path="/create-pet" component = { CreatePet } exact />
            <Route path="/signin" component = { SignIn } exact />
          </Switch>
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
