import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { loadingBarMiddleware } from 'react-redux-loading-bar'
import App from './containers/app';
import Home from './containers/home/Home';
import Blog from './containers/blog/Blog';
import BlogDetail from './containers/blog/BlogDetail';
import Course from './containers/course/Course';
import CourseDetail from './containers/course/CourseDetail';
import Help from './containers/help/Help';
import FAQ from './containers/faq/FAQ';
import SignUp from './containers/signup/SignUp';
import NotFound from './containers/NotFound';
import reducers from './reducers';
import Async from './middlewares/async';
import Test1 from './middlewares/test1';
import Test2 from './middlewares/test2';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="blog" component={Blog} />
        <Route path="blog/:blogSlug" component={BlogDetail} />
        <Route path="courses" component={Course} />
        <Route path="courses/:courseName" component={CourseDetail} />
        <Route path="howto" component={Help} />
        <Route path="faq" component={FAQ} />
        <Route path="register" component={SignUp} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#container'));
