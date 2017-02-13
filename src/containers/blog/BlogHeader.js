import React from 'react';
import { connect } from 'react-redux';
import * as NavActions from '../../actions/nav-actions';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {

  };
}

export class BlogHeader extends React.Component {
  static propTypes = {
    navOpenAction: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navOpenAction } = this.props;
    return (
      <header className="main-header tag-head " style={{backgroundImage: 'url(https://glossika-blog.s3.amazonaws.com/2017/Jan/are_f123_small-1483694842565.jpg)'}}>
    <nav className="main-nav overlay clearfix">
        <Link className="blog-logo" to="/"><img src="https://glossika-blog.s3.amazonaws.com/2015/Jul/logo_64x64-1437366840405.png" alt="The Glossika Blog" /></Link>
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
    );
  }
}

export default connect(
  mapStateToProps,
  {...NavActions}
)(BlogHeader)
