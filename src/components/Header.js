import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (<div>
      <header className="gl-FixedTop">
        <div className="gl-FixedTop_Logo">
            <a href="/">
                <img src="/img/logo.png" alt="Glossika" />
                <h1>Glossika</h1>
            </a>
        </div>
        <input type="checkbox" id="nav-trigger" className="nav-trigger" />
        <label htmlFor="nav-trigger"><span className="fa fa-bars fa-2x"></span></label>
        <nav role="navigation" className="gl-FixedTop_Nav">
            <ul>
                <li><a href="/blog/tag/glossika-blog-english/">Blog</a></li>
                <li><a href="/courses/">Courses</a></li>
                <li><a href="/howto/">Help</a></li>
                <li><a href="/faq/">FAQ</a></li>
                <li>
                    <a className="gl-LabeledLink" href="#set-language">
                        <span className="fa fa-globe fa-lg"></span>
                        <span className="gl-LinkLabel">Language</span>
                        <span>(EN)</span>
                    </a>
                </li>
                    <li><a href="/register">Sign Up</a></li>
            </ul>
        </nav>
    </header>
    <div className="gl-FixedTop_Spacer"></div>
    <div id="set-language" className="gl-Modal">
    <div>
        <span className="gl-Modal_Close">
            <a href="#"><span className="fa fa-times"></span></a>
        </span>

        <div className="gl-Modal_Content">
            <h1>Choose your language</h1>
            <ul>
              <li><a href="/?lang=en">English</a></li>
              <li><a href="/?lang=de">Deutsch</a></li>
              <li><a href="/?lang=es-mx">Español (Mexicano)</a></li>
              <li><a href="/?lang=fr">Français</a></li>
              <li><a href="/?lang=ja">日本語</a></li>
              <li><a href="/?lang=zh-tw">中文(正體)</a></li>
           </ul>
        </div>
      </div>
      </div>{/*gl-Modal*/}
    </div>);
  }
}
