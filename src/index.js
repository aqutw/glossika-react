import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Course from './components/course/Course';
import Help from './components/help/Help';
import FAQ from './components/faq/FAQ';
import SignUp from './components/signup/SignUp';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="blog" component={Blog} />
        <Route path="courses" component={Course} />
        <Route path="howto" component={Help} />
        <Route path="faq" component={FAQ} />
        <Route path="register" component={SignUp} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#container'));
