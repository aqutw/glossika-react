import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import BlogDetail from './components/blog/BlogDetail';
import Course from './components/course/Course';
import CourseDetail from './components/course/CourseDetail';
import Help from './components/help/Help';
import FAQ from './components/faq/FAQ';
import SignUp from './components/signup/SignUp';
import NotFound from './components/NotFound';
import reducers from './reducers';
import Async from './middlewares/async';

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
