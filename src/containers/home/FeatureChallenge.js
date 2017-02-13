import React from 'react';

export class FeatureChallenge extends React.Component {
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
        <h1>Challenge Yourself!</h1>
        <p></p><p>There are hundreds of languages with more than a million speakers. But we only see books and materials for the the most common written ones: English, Mandarin, French, German, etc. Unlike textbook methods, the Glossika method works really well even with unwritten languages and dialects. We're always adding languages, so why not try something new?</p><p>Can't decide what to learn? Check out our <a href="/courses/">courses</a> — we've rated every language by pronunciation difficulty for English speakers.</p><p></p>
    </div>
</section>
    );
  }
}

export default FeatureChallenge;
