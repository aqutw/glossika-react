import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/nav-actions';

function mapStateToProps(state) {
  return {

  };
}

export class BlogNav extends React.Component {
  static propTypes = {
    navCloseAction: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navCloseAction } = this.props;

    return (
      <div className="nav">
    <h3 className="nav-title">Menu</h3>
    <a href="#" className="nav-close" onClick={navCloseAction}>
        <span className="hidden">Close</span>
    </a>
    <ul>
            <li className="nav-glossika-home" role="presentation"><a href="https://glossika.com/">Glossika Home</a></li>
            <li className="nav-courses" role="presentation"><a href="https://glossika.com/courses/">Courses</a></li>
            <li className="nav-fluency-series" role="presentation"><a href="https://glossika.com/blog/tag/fluency/">Fluency Series</a></li>
            <li className="nav-en-english-edition nav-current" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-english/">EN English Edition</a></li>
            <li className="nav-zh-" role="presentation"><a href="https://glossika.com/blog/tag/zhongwen-banben/">ZH 中文版</a></li>
            <li className="nav-ar-" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-lnskh-lrby/">AR النسخة العربية</a></li>
            <li className="nav-de-deutsche-ausgabe" role="presentation"><a href="https://glossika.com/blog/tag/deutsche-ausgabe/">DE Deutsche Ausgabe</a></li>
            <li className="nav-es-versin-espaola" role="presentation"><a href="https://glossika.com/blog/tag/version-espanola/">ES Versión española</a></li>
            <li className="nav-fr-dition-franaise" role="presentation"><a href="https://glossika.com/blog/tag/edition-francaise/">FR Édition française</a></li>
            <li className="nav-ja-" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-nihongohan/">JA 日本語版</a></li>
            <li className="nav-pl-polska-wersja" role="presentation"><a href="https://glossika.com/blog/tag/polska-wersja/">PL Polska wersja</a></li>
            <li className="nav-id-versi-bahasa-indonesia" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-versi-bahasa-indonesia/">ID Versi bahasa indonesia</a></li>
            <li className="nav-kr-" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-hangugeo-beojeon/">KR 한국어 버전</a></li>
            <li className="nav-pb-verso-portugus" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-versao-portugues/">PB versão Português</a></li>
            <li className="nav-ru-" role="presentation"><a href="https://glossika.com/blog/tag/russkaja-viersija/">RU Русская версия</a></li>
    </ul>
    <a className="subscribe-button icon-feed" href="https://glossika.com/blog/rss/">Subscribe</a>
</div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(BlogNav)
