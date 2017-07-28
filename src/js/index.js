import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import thunk from 'redux-thunk';
import 'babel-polyfill';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  LOGIN: `${ publicPath }login`,
  REGISTER: `${ publicPath }register`,
};

ReactDOM.render((
  <Provider store={ store }>
    <BrowserRouter>
      <div className='App'>
        <App />
        <Switch>
          <Route path={ routeCodes.LOGIN } component={ Login } />
          <Route path={ routeCodes.REGISTER } component={ Register } />
        </Switch>
      </div>
   </BrowserRouter>
 </Provider>
), document.getElementById('root'));
