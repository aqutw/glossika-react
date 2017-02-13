import React from 'react';

export class BlogFooter extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (<footer className="site-footer clearfix">
            <section className="copyright"><a href="http://www.glossika.com/">Glossika Language Training</a> © 2017</section>
            <section className="poweredby"><a href="https://glossika.com/blog">The Glossika Blog</a>, brought to you by <a href="https://ghost.org">Ghost</a></section>
        </footer>
    );
  }
}

export default BlogFooter
