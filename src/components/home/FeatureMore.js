import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class FeatureMore extends React.Component {
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
        <h1>More From Our Users...</h1>

        
        <blockquote>
            <p>I’m an applied&nbsp;linguistics&nbsp;MA student, I fully support this method. Keep it up.</p>
            <cite>—Ross Sundberg</cite>
        </blockquote>
        
        <blockquote>
            <p>I have been learning Thai for more than 4 years but with Glossika I have made 400% more faster progress</p>
            <cite>—Ferry van Maurik</cite>
        </blockquote>
        
        <blockquote>
            <p>I'll definitely be buying Glossika for the next few languages I am learning in the future.</p>
            <cite>—Ian Taylor</cite>
        </blockquote>
        
    </div>

    <twitterwidget className="twitter-tweet twitter-tweet-rendered" id="twitter-widget-0" data-tweet-id="741458117460905984" style={{'position': 'static', 'visibility': 'visible', 'display': 'block', 'transform': 'rotate(0deg)', 'max-width': '100%', 'width': '500px', 'min-width': '220px', 'margin-top': '10px', 'margin-bottom': '10px'}}></twitterwidget>
</section>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(FeatureMore)
