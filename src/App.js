import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Header from './components/Header';
import SignUp from './screens/SignUp';
import Registration from './screens/Registration'
import MainContent from './components/MainContent/MainContent';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaw, faBars, faSearch, faBone, faIdCard, faUserCircle, faQuestionCircle, faEnvelope, faDog } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faPaw, faBars, faSearch, faBone, faIdCard, faUserCircle, faQuestionCircle, faEnvelope, faDog);

function App() {
  console.log(window.innerWidth)
  return (
    <BrowserRouter history = {createHistory()}>
      <Header />
        <Switch>
          <Route path="/signup" component = { SignUp } exact />
          <Route path="/registration" component = { Registration } exact />
        </Switch>
      <MainContent />
    </BrowserRouter>
  );
}

export default App;
