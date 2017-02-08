import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';

function mapStateToProps(state) {
  return {

  };
}

export class Help extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><Header />help<Footer /></div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Help)
