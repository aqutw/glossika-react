import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (<footer className="gl-Footer" role="contentinfo">
    <div className="gl-Footer_Logo">
        <a href="/"><img src="/img/logo.png" alt="Logo image" /></a>
    </div>
    <div className="gl-Footer_Links">
        <ul>
            <li><h3>Learn</h3></li>
            <li><a href="/faq/">FAQ</a></li>
            <li><a href="/#try">Try Glossika</a></li>
            <li><a href="/courses/">See Our Courses</a></li>
            <li><a href="/howto/">How to Use</a></li>
        </ul>
        <ul>
            <li><h3>Get In Touch</h3></li>
            <li>
                <a href="/contact/">
                    <span className="fa fa-envelope"></span>
                    About
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/Glossika">
                    <span className="fa fa-facebook"></span>
                    Facebook
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/user/glossikatraining">
                    <span className="fa fa-youtube"></span>
                    YouTube
                </a>
            </li>
            <li>
                <a href="https://twitter.com/glossika">
                    <span className="fa fa-twitter"></span>
                    Twitter
                </a>
            </li>
        </ul>
        <ul>
            <li><a href="/legal"><h3>Legal</h3></a></li>
            <li><a href="/legal#refunds">Returns</a></li>
            <li><a href="/legal#privacy">Privacy Policy</a></li>
            <li><a href="/legal#cookies">Cookies</a></li>
            <li><a href="/legal#terms">Terms and Conditions</a></li>
        </ul>
    </div>

    <hr />

    <p>© 2017, glossika.com. All rights reserved.</p>
</footer>
    );
  }
}
