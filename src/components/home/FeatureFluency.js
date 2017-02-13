import React from 'react';

export class FeatureFluency extends React.Component {
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
        <h1>Fluency Is Within Reach</h1>

        <h2><em>fluency (n.)</em></h2>

        <blockquote>
            To speak a language smoothly and confidently – in a flowing way. (From Latin <em>fluens</em>, “flowing”).
        </blockquote>

        <p className="bold-first">You may have heard the common myth that children are better language learners than adults - but it’s simply not true! Science shows that children have the most opportunity to learn languages, because we keep our speech at a level that we expect them to understand. But children are perfectly capable of speaking fluently, even with their limited range of vocabulary and expression.</p>
        <p>Don’t expect to master a language in a week or a month - a nearly impossible task - but you can still express yourself fluently using what you’ve already learned, even from the very beginning! We carefully select every sentence in our courses to gradually build vocabulary and grammatical concepts naturally, through repeated exposure in different contexts. Check out our courses for a detailed list of what topics are covered in each series.</p>
    </div>
</section>
    );
  }
}

export default FeatureFluency
