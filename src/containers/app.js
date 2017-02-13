import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading-bar'

export default class App extends Component {
  render() {
    return (<div>
      <LoadingBar style={{ backgroundColor: 'red', height: '2px', zIndex:999999 }} />
      {this.props.children}
      </div>
    );
  }
}
