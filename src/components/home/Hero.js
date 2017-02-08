import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class Hero extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="home-hero">
    <div className="content">
        <img src="img/logo.png" alt="Logo Image" />
        <h1>Fluency is Confidence</h1>
        <p>We deliver it by building muscle memory through sound patterns. Start speaking today!</p>
    </div>
    <div className="scrolldown">
        <svg>
            <path className="arrow-1" d="M0 0 L30 30 L60 0"></path>
            <path className="arrow-2" d="M0 20 L30 50 L60 20"></path>
            <path className="arrow-3" d="M0 40 L30 70 L60 40"></path>
        </svg>
    </div>
</header>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Hero)
