import React from 'react';
import { connect } from 'react-redux';
import BlogWrap from './BlogWrap';
import * as BlogActions from '../../actions/blog-actions';

function mapStateToProps(state) {
  console.log('curPost', state.blog.curPost);
  return {
    postTitle: state.blog.curPost.title,
    postContent: state.blog.curPost.content,
  };
}

export class BlogDetail extends React.Component {
  static propTypes = {
    fetchPostByTitle: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPostByTitle(this.props.routeParams.blogSlug);
  }

  render() {
    const {postTitle, postContent} = this.props;
    const children = [<article key="current_post" className="post tag-polska-wersja tag-nowe-technologie tag-nauce-jezykow-obcych tag-tradycyjne-systemy-dydaktyczne tag-metody-nauczania tag-nauka-jezyka tag-nauczanie">

        <header className="post-header">
            <h1 className="post-title">{postTitle}</h1>
            <section className="post-meta">
                <time className="post-date" dateTime="2017-01-25">25 January 2017</time>  on <a href="/blog/tag/polska-wersja/">Glossika blog - polska wersja</a>, <a href="/blog/tag/nowe-technologie/">Nowe technologie</a>, <a href="/blog/tag/nauce-jezykow-obcych/">nauce języków obcych</a>, <a href="/blog/tag/tradycyjne-systemy-dydaktyczne/">Tradycyjne systemy dydaktyczne</a>, <a href="/blog/tag/metody-nauczania/">metody nauczania</a>, <a href="/blog/tag/nauka-jezyka/">nauka języka</a>, <a href="/blog/tag/nauczanie/">nauczanie</a>
            </section>
        </header>

        <section className="post-content">
        {postContent}
        </section>

        <div id="fb-root" className=" fb_reset"><div style={{position:'absolute', top:'-10000px', width:'0px', height:'0px'}}><div><iframe name="fb_xdm_frame_https" frameBorder="0" allowTransparency="true" allowFullScreen="true" scrolling="no" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabIndex="-1" src="https://staticxx.facebook.com/connect/xd_arbiter/r/0eWevUAMuoH.js?version=42#channel=f1fcfdfc15a07bc&amp;origin=https%3A%2F%2Fglossika.com" style={{border:'none'}}></iframe></div></div><div style={{position:'absolute', top:'-10000px', width:'0px', height:'0px'}}><div></div></div></div>
        <div className="fb-comments fb_iframe_widget" data-href="https://glossika.com/blog/nowe-technologie-w-nauce-jezykow-obcych/" data-numposts="5" fb-xfbml-state="rendered"><span style={{width:'550px', height:'175px'}}><iframe id="fab7070d504b24" name="f781955b46aa98" scrolling="no" title="Facebook Social Plugin" className="fb_ltr" src="https://www.facebook.com/plugins/comments.php?api_key=1139051342778328&amp;channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F0eWevUAMuoH.js%3Fversion%3D42%23cb%3Dfac8c3f0434008%26domain%3Dglossika.com%26origin%3Dhttps%253A%252F%252Fglossika.com%252Ff1fcfdfc15a07bc%26relation%3Dparent.parent&amp;href=https%3A%2F%2Fglossika.com%2Fblog%2Fnowe-technologie-w-nauce-jezykow-obcych%2F&amp;locale=en_US&amp;numposts=5&amp;sdk=joey&amp;version=v2.4&amp;width=550" style={{width:'550px', overflow:'hidden', border:'none', height:'175px'}}></iframe></span></div>

        <footer className="post-footer">



            <section className="author">
                <h4><a href="/blog/author/michael/">Michael Campbell</a></h4>

                    <p>Polyglot, phonologist, linguist specialising in Formosan, PAN, Sinitic, Slavic, typology, IPA, and L2. Does GSR training daily.</p>
                <div className="author-meta">
                    <span className="author-location icon-location">Taipei, Taiwan</span>
                    <span className="author-link icon-link"><a href="http://www.glossika.com/">http://www.glossika.com/</a></span>
                </div>
            </section>


            <section className="share">
                <h4>Share this post</h4>
                <a className="icon-twitter" href="https://twitter.com/share?text=Nowe%20technologie%20w%20nauce%20j%C4%99zyk%C3%B3w%20obcych&amp;url=https://glossika.com/blog/nowe-technologie-w-nauce-jezykow-obcych/" onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;">
                    <span className="hidden">Twitter</span>
                </a>
                <a className="icon-facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://glossika.com/blog/nowe-technologie-w-nauce-jezykow-obcych/" onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;">
                    <span className="hidden">Facebook</span>
                </a>
                <a className="icon-google-plus" href="https://plus.google.com/share?url=https://glossika.com/blog/nowe-technologie-w-nauce-jezykow-obcych/" onclick="window.open(this.href, 'google-plus-share', 'width=490,height=530');return false;">
                    <span className="hidden">Google+</span>
                </a>
            </section>

        </footer>

    </article>];

    children.push(<aside key="aside" className="read-next">
    <a className="read-next-story " style={{backgroundImage:'url(https://glossika-blog.s3.amazonaws.com/2017/Jan/ar_chinese_new_year-1485339162752.jpg)'}} href="/blog/rs-lsn-lsyny/">
        <section className="post">
            <h2>previous post 1</h2>
            <p>content 1content 1content 1content 1content 1content 1content 1</p>
        </section>
    </a>
    <a className="read-next-story prev " style={{backgroundImage:'url(https://glossika-blog.s3.amazonaws.com/2017/Jan/glossika_products_ar-1484128670285.jpg)'}} href="/blog/llhj-lmsry/">
        <section className="post">
            <h2>previous post 2</h2>
            <p>content2 content2 content2 content2  </p>
        </section>
    </a>
</aside>);
    return (<BlogWrap>{children}</BlogWrap>
    );
  }
}

export default connect(
  mapStateToProps,
  {...BlogActions}
)(BlogDetail)
