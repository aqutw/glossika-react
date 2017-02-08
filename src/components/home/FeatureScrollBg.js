import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class FeatureScrollBg extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="feature scrollbg-memory">
    <div className="content">
        <h1>Sleep, Memory, and Language Acquisition</h1>

        <h2><em>language (n.)</em></h2>

        <blockquote>
            A set of <strong>sounds</strong> used to convey meaning.
        </blockquote>

        <p className="bold-first">It’s one thing to hear a phrase and say it back right away, but it’s another thing entirely to say it again on your own, a day or a week later, in a completely new situation. In order to do that, we need to understand how the brain remembers the sounds it hears. Sleep and memory are deeply connected, and deep sleep (“REM sleep”) helps your brain organize patterns found in your daily activities -- including the sounds of your new language. Repeating activities over a number of days reinforces those patterns and helps push them into your long-term memory.</p>
        <p>So what does that mean for language learning? Well, it means that cramming for hours all at once is not the best way to learn a language! For the best results, you should put in a shorter amount of time every day - we find 20 minutes to be a good starting point for most learners. This way, your brain will have plenty of time and space to digest the new material. Don’t be surprised when you wake up one morning humming some sentences in your new language as if you’d been fluent all along!</p>
    </div>
</section>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(FeatureScrollBg)
