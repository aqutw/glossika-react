import React from 'react';
import { connect } from 'react-redux';

import Hero from './Hero';
import Intro from './Intro';
import Feature from './Feature';
import FeatureScrollBg from './FeatureScrollBg';
import FeatureMemory from './FeatureMemory';

function mapStateToProps(state) {
  return {

  };
}

export class Home extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (<div><Hero /><Intro /><Feature />
      <FeatureScrollBg /><FeatureMemory /></div>)
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Home)
