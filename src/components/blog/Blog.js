import React from 'react';
import { connect } from 'react-redux';
import BlogWrap from './BlogWrap';
import BlogPost from './BlogPost';
import * as BlogActions from '../../actions/blog-actions';


function mapStateToProps(state) {
  console.warn(state)
  return {
    aryBlogArticles: state.blog.posts,
  };
}

export class Blog extends React.Component {
  static propTypes = {
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
    const { aryBlogArticles } = this.props;

    return (
      <BlogWrap>{aryBlogArticles.map(v=>{
        return (<BlogPost key={v.title} post={v} />);
      })}</BlogWrap>
    );
  }
}

export default connect(
  mapStateToProps,
  {...BlogActions}
)(Blog)
