import React from 'react';
import { connect } from 'react-redux';
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
      <header className="main-header tag-head " style={{backgroundImage: 'url(https://glossika-blog.s3.amazonaws.com/2017/Jan/are_f123_small-1483694842565.jpg)'}}>
          <nav className="main-nav overlay clearfix">
              <a className="blog-logo" href="https://glossika.com/blog"><img src="https://glossika-blog.s3.amazonaws.com/2015/Jul/logo_64x64-1437366840405.png" alt="The Glossika Blog" /></a>
                  <a className="menu-button icon-menu" href="#" onClick={() => {
                    navOpenAction();
                  }}><span className="word">Menu</span></a>
          </nav>
          <div className="vertical">
              <div className="main-header-content inner">
                  <h1 className="page-title">Glossika Blog - English edition</h1>
                  <h2 className="page-description">
                          Glossika blog in English
                  </h2>
              </div>
          </div>
      </header>
      <main className="content" role="main">
      {aryBlogArticles.map(v=>{
        return (<BlogPost key={v.title} post={v} />);
      })}
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
