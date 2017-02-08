import React from 'react';
import { connect } from 'react-redux';

import Hero from './Hero';
import Intro from './Intro';
import Feature from './Feature';
import FeatureScrollBg from './FeatureScrollBg';
import FeatureMemory from './FeatureMemory';
import FeatureFluency from './FeatureFluency';
import FeatureBridging from './FeatureBridging';
import FeatureChallenge from './FeatureChallenge';
import FeatureProgress from './FeatureProgress';
import FeatureMore from './FeatureMore';

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
      <FeatureScrollBg /><FeatureMemory /><FeatureFluency />
      <FeatureBridging /><FeatureChallenge />
      <FeatureProgress /><FeatureMore />
      </div>)
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Home)
