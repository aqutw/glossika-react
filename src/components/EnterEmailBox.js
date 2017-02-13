import React from 'react';

export class EnterEmailBox extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mc-pop-signup" style={{display:'block'}}>
    <header>
        <button type="button" className="mc-pop-close-btn">
            <span className="fa fa-times fa-lg"></span>
        </button>
        <h1>Free Guide!</h1>
    </header>
    <section className="form-container">
        <form id="mailchimp-form">
            <input type="hidden" name="csrftoken" value="PXo7Xbws-VhFtQw7NI5KZmCdJMAcOMom6Gx8" />
            <input type="hidden" name="list_id" value="300474d086" />
            <p id="form-error"></p>
            
                <p></p><p>Still searching for the <strong>best proven method</strong> to tackle a new language? We have the answer for you <i className="fa fa-smile-o"></i></p><p>Download our PDF now and get in on the secret methods used by polyglots!</p><p></p>
                <label for="email">Enter your email:</label>
                <input type="email" name="email" placeholder="john@example.com" pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" required="" />
                <label className="fineprint">I want to register at glossika.com and subscribe to the Glossika Newsletter.</label>
            
            <button type="submit" id="mailchimp-submit">Subscribe</button>
        </form>
    </section>
    <section className="form-success">
        <p>Done! Check your inbox (and possibly spam folder) for your confirmation email.</p>
        <p><a href="/login">Log in</a> to manage your subscription preferences.</p>
        <button type="button" className="mc-pop-close-btn">Close</button>
    </section>
</div>
    );
  }
}

export default EnterEmailBox;
