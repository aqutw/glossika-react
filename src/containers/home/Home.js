import React from 'react';

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
import Header from '../Header';
import Footer from '../Footer';

import '../../../css/home.css';

export class Home extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="homePage">
      <Header />
      <Hero /><Intro /><Feature />
      <FeatureScrollBg /><FeatureMemory /><FeatureFluency />
      <FeatureBridging /><FeatureChallenge />
      <FeatureProgress /><FeatureMore />
      <Footer />
      </div>)
  }
}

export default Home
