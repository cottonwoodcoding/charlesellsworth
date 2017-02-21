import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Tour from './components/Tour';
import Login from './components/Login';
import Watch from './components/Watch';
import Listen from './components/Listen';
import Wildcat from './components/Wildcat';
import Press from './components/Press';
import PressRelease from './components/PressRelease';
import Subscribers from './components/Subscribers';
import NoMatch from './components/NoMatch';

export default (
  <Route>
    <Route component={App} >
      <Route path="/" component={Home} />
      <Route path="/tour" component={Tour} />
      <Route path="/watch" component={Watch} />
      <Route path="/login" component={Login} />
      <Route path="/listen" component={Listen} />
      <Route path="/wildcat" component={Wildcat} />
      <Route path="/press" component={Press} />
      <Route path="/press_release" component={PressRelease} />
      <Route path="/subscribers" component={Subscribers} />
      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)

