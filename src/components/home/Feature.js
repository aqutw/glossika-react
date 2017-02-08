import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class Feature extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="feature">
    <div className="content">
        <h1>What People Are Saying</h1>
        <div className="slick-testimonials slick-initialized slick-slider">
            <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{opacity: 1, width: '861px', transform: 'translate3d(0px, 0px, 0px)'}}><div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="-1" role="option" aria-describedby="slick-slide10" style={{width:'267px'}}>
                <figure className="intro-infobox">
                    <img src="/img/site/testimonials/testomonial01-ellenjovin.jpg" alt="" />
                    <figcaption>
                        <p>“I was so convinced of the value of this undertaking and its approach… and had a breakthrough moment… Glossika audio content tested every corner of my brain… and it reminded me of scores of small things I had learned but forgotten about the Italian language… Glossika could really transform your speaking ability in your target language.”<br /><br /><em>—Ellen  Jovin, Words &amp; Worlds of New York, has studied German, Swedish, Italian, Spanish, Portuguese, Arabic, Persian, and other languages.</em></p><p></p>
                    </figcaption>
                </figure>
            </div><div className="slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabIndex="-1" role="option" aria-describedby="slick-slide11" style={{width: '267px'}}>
                <figure className="intro-infobox">
                    <img src="/img/site/testimonials/testomonial02-stuart_jay_raj.jpg" alt="" />
                    <figcaption>
                    <p>“I love it! …seriously. What I love about Glossika is that you have put into a concentrated pill what I would have done with hundreds of books myself.”<br /><br /><em>—Stuart Jay Raj, Hyperpolyglot | Author of "Cracking Thai Fundamentals: A Thai Operating System for Your Mind"</em></p>
                    </figcaption>
                </figure>
            </div><div className="slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabIndex="-1" role="option" aria-describedby="slick-slide12" style={{width: '267px'}}>
                <figure className="intro-infobox">
                    <img src="/img/site/testimonials/testomonial03-ollyrichards.jpg" alt="" />
                    <figcaption>
                    <p>“Every language has certain grammar patterns… learn these common grammar patterns, you have a good grounding in the language. Once you recognise these common phrases… you can cope easily with many familiar situations you’ll find yourself in. In a nutshell, Glossika gives you all  this foundational stuff on a plate… which is awesome!”<br /><br /><em>—Olly Richards, I'll Teach You a Language, speaks Cantonese, Japanese, Arabic and other languages.</em></p>
                    <p></p>
                    </figcaption>
                </figure>
            </div></div></div>
        </div>
    </div>
</section>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Feature)
