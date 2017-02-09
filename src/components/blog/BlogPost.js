import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class BlogPost extends React.Component {
  static propTypes = {
    post: React.PropTypes.object // TODO: shape --> https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;
    return (
      <article key={post.title} className="post tag-glossika-blog-english tag-chinese-new-year tag-chinese">
    <header className="post-header">
        <h2 className="post-title"><a href="/blog/how-will-the-year-of-rooster-2017-affect-you/">{post.title}</a></h2>
    </header>
    <section className="post-excerpt">
        <p>{post.content} <a className="read-more" href="/blog/how-will-the-year-of-rooster-2017-affect-you/">»</a></p>
    </section>
    <footer className="post-meta">
      {post.tag.map(tag => {
        return (<a key={tag} href="/blog/author/michael/">{tag}</a>);
      })}
        <time className="post-date" dateTime="2017-01-25">{post.time}</time>
      }
    </footer>
</article>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(BlogPost)
