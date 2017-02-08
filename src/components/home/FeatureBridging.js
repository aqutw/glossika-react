import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class FeatureBridging extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <section className="feature scrollbg-ipa">
    <div className="content">
        <h1>Bridging the Gap Between Text and Speech</h1>
        <p className="bold-first">In English, we're so accustomed to our own spelling that we can read and write with very little effort. But in a new language, making the jump from spelling to sound is usually one of the biggest stumbling blocks to clear pronunciation.</p>
        <p>The fact is that you don’t need to learn how to read and write (nothing can replace comprehensible input), but reading and writing can be a valuable tool if you take the time to learn them. Phonics is a useful tool for language development, but how exactly do you do phonics when you can’t even read the script? Not to worry - we provide two different levels of detailed phonics, a romanization using the alphabet, and the International Phonetic Alphabet for people who are serious about pronunciation.</p>
    </div>
</section>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(FeatureBridging)
