import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {

  };
}

export class SignUp extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gl-AuthPage">
      <link rel="stylesheet" href="/css/auth.css" />
    <div className="gl-AuthCard">
    <div className="gl-AuthCard_front">
    <h2>Sign Up For Glossika</h2>
    <form id="gl-AuthCard_Form">
        <p>Let's get started! Enter your email address to sign up.</p>
        <p className="gl-FormError"></p>
        <input type="hidden" name="csrftoken" value="oAtBqJg9-Fjxvo7q12NybmLCBc6yk9hVe_0s" />
        <fieldset>
            <label htmlFor="email">Your email address:</label>
            <input type="email" name="email" placeholder="john@example.com" pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" required="" />
            <button id="gl-AuthCard_Submit" type="submit">Signup</button>
        </fieldset>
    </form>
    <br />
    <p>Already have an account? <Link to="/login">Log in now.</Link></p>
</div>
<div className="gl-AuthCard_back">
    <h2>Thank You!</h2>
    <p>Please check your inbox and spam folder. Your registration link will be valid for the next 30 minutes.</p>
    <p><Link to="/">Go back to glossika.com</Link></p>
</div>

    </div>
</div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(SignUp)
