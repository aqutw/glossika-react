import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class Intro extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="home-intro" className="feature">
    <div className="content">
        <h1>What is Glossika?</h1>

        <div className="video">
            <iframe src="https://www.youtube.com/embed/F8xj_zO3hu0" frameBorder="0" allowFullScreen="">
            </iframe>
        </div>
    </div>
</section>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Intro)
