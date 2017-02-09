import React from 'react';
import { connect } from 'react-redux';
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';
import BlogNav from './BlogNav';
import BlogPost from './BlogPost';
import * as NavActions from '../../actions/nav-actions';
import * as BlogActions from '../../actions/blog-actions';


function mapStateToProps(state) {
  console.warn(state)
  return {
    navOpenClose: state.nav.navOpenClose,
    aryBlogArticles: state.blog.posts,
  };
}

export class Blog extends React.Component {
  static propTypes = {
    navOpenAction: React.PropTypes.func.isRequired,
    fetchPosts: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log('this.props', this.props);
    const { navOpenClose, navOpenAction, navCloseAction, aryBlogArticles } = this.props;
    const IS_NAV_OPEN = navOpenClose==='open';
    const navClassName = IS_NAV_OPEN ? 'nav-opened' : 'nav-closed';

    return (
      <div className={"tag-template tag-glossika-blog-english " + (navClassName)}>
      <link rel="stylesheet" type="text/css" href="/blog/assets/css/screen.css?v=b70e34aa0e" />
    <link rel="stylesheet" type="text/css" href="/blog/assets/css/blog.css?v=b70e34aa0e" />
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400" />
      <BlogNav />
      <span className="nav-cover"></span>
      <div className="site-wrapper">
      <BlogHeader />
      <main className="content" role="main">
      {this.props.children}
      </main>
    </div>{/*site-wrapper*/}
    <BlogFooter />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {...NavActions, ...BlogActions}
)(Blog)
