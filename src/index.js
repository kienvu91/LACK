//@flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/pages/Layout';
import YearStep from './components/pages/YearStep';
import CountryStep from './components/pages/CountryStep';
import VariableStep from './components/pages/VariableStep';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from 'react-router-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();



const app = document.getElementById('root');
export const history = syncHistoryWithStore(browserHistory, store)

const router = (
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={CountryStep} />
      <Route path="survey" component={YearStep} />
      <Route path="variable" component={VariableStep} />
    </Route>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      {router}
    </MuiThemeProvider>
  </Provider>,
  app);
