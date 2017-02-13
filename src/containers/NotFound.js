import React from 'react';
import Header from './Header';
import Footer from './Footer';

export class NotFound extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><Header /><p style={{textAlign:'center', padding:'30px'}}>404 Not Found here.</p><Footer /></div>
    );
  }
}

export default NotFound;
