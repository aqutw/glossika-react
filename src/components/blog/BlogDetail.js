import React from 'react';
import { connect } from 'react-redux';
import BlogFooter from './BlogFooter';

function mapStateToProps(state) {
  return {

  };
}

export class BlogDetail extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>blogdetail</div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(BlogDetail)
