import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Header from './components/Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faPaw, faBars);

function App() {
  return (
    <BrowserRouter history = {createHistory()}>
      <Header />
    </BrowserRouter>
  );
}

export default App;
