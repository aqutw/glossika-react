import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export class Help extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><Header />
      <section className="gl-HowTo_Header">
    <h1>The Glossika Method</h1>
    <p>Think you're too busy to learn a language? Think again.</p>
</section>
      <hr />
      <section className="gl-HowTo_GSR">
    <h1>For Busy People &amp; Casual Learners</h1>
    <h2>20 minutes per day, 3 months per book</h2>
    <h3>Steps:</h3>
    <ol>
        <li>
            <h4><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M18 36h-4v28h4c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2z" fill="#000000"></path>
<path d="M46 36c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h4v-28h-4z" fill="#000000"></path>
<path d="M64 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 3.838 0.677 7.518 1.916 10.928-1.217 2.075-1.916 4.492-1.916 7.072 0 7.053 5.215 12.887 12 13.857v-27.714c-1.995 0.285-3.854 0.99-5.485 2.024-0.337-1.67-0.515-3.398-0.515-5.167 0-14.359 11.641-26 26-26s26 11.641 26 26c0 1.77-0.177 3.498-0.514 5.169-1.631-1.034-3.491-1.74-5.486-2.026v27.715c6.784-0.971 12-6.805 12-13.857 0-2.58-0.699-4.996-1.916-7.071 1.239-3.41 1.916-7.091 1.916-10.929z" fill="#000000"></path>
</svg> Listen.</h4>
            <p>Use the MP3 files from the folder 'GLOSSIKA-XX-GSR'. Keep going and don't worry if you miss something on the first day, you will hear each sentence more than a dozen times over the next 5 days.</p>
        </li>
    </ol>

    <p><em>(That's it, just 1 step.)</em></p>
</section>
      <hr />
      <section className="gl-HowTo_GMS">
    <h1>For Intensive Study</h1>
    <h2>1-2 hours per day, 1 month per book</h2>
    <p>Step 0 is optional and good for students with very little or no experience in the target language. We've also included a handy chart for you to keep track of Steps 1-4 listed below. Download: <a href="https://s3.amazonaws.com/glossika-downloads/GMS+Self+Study+Planner+(EN).pdf">GMS Self Study Planner (EN).pdf</a></p>

    <h3>Steps:</h3>
    
    <ol start="0">
        <li>
            <h4>Prepare. (GMS-A)</h4>
            <p>Follow the text as you listen to the GMS-A files (in 'GLOSSIKA-XX-GMS-A'). Listen to as many sentences as you can, and keep going even when you miss a sentence or two. Try to focus on the sounds and matching them to the text.</p>
        </li>
        <li>
            <h4><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M18 36h-4v28h4c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2z" fill="#000000"></path>
<path d="M46 36c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h4v-28h-4z" fill="#000000"></path>
<path d="M64 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 3.838 0.677 7.518 1.916 10.928-1.217 2.075-1.916 4.492-1.916 7.072 0 7.053 5.215 12.887 12 13.857v-27.714c-1.995 0.285-3.854 0.99-5.485 2.024-0.337-1.67-0.515-3.398-0.515-5.167 0-14.359 11.641-26 26-26s26 11.641 26 26c0 1.77-0.177 3.498-0.514 5.169-1.631-1.034-3.491-1.74-5.486-2.026v27.715c6.784-0.971 12-6.805 12-13.857 0-2.58-0.699-4.996-1.916-7.071 1.239-3.41 1.916-7.091 1.916-10.929z" fill="#000000"></path>
</svg> Listen. (GMS-A)</h4>
            <p>Try to repeat the target sentence with the speaker the second time you hear it.</p>
        </li>
        <li>
            <h4><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M54 0c5.523 0 10 4.477 10 10 0 2.251-0.744 4.329-2 6l-4 4-14-14 4-4c1.671-1.256 3.749-2 6-2zM4 46l-4 18 18-4 37-37-14-14-37 37zM44.724 22.724l-28 28-3.447-3.447 28-28 3.447 3.447z" fill="#000000"></path>
</svg>
 Write. (GMS-C)</h4>
            <p>Write down the sentences as quickly as you can, but hit pause when you need to. Check your answers against the text.</p>
        </li>
        <li>
            <h4><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M30 44c5.523 0 10-4.477 10-10v-24c0-5.523-4.477-10-10-10s-10 4.477-10 10v24c0 5.523 4.477 10 10 10zM44 28v6c0 7.732-6.268 14-14 14s-14-6.268-14-14v-6h-4v6c0 9.265 7 16.894 16 17.889v8.111h-8v4h20v-4h-8v-8.111c9-0.995 16-8.624 16-17.889v-6h-4z" fill="#000000"></path>
</svg>
 Record. (GMS-C)</h4>
            <p>Listen to each sentence and record it yourself. <strong>Record from what you hear, not from reading the text.</strong> You can use your mobile phone or computer to do the recording. Play it back, and try to find the differences between the original and your recording.</p>
        </li>
        <li>
            <h4><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="72" height="64" viewBox="0 0 72 64">
<path d="M68 56.323c0 2.844 1.627 5.307 4 6.511v0.996c-0.664 0.091-1.342 0.139-2.031 0.139-4.251 0-8.084-1.783-10.795-4.642-1.639 0.436-3.375 0.672-5.174 0.672-9.941 0-18-7.163-18-16s8.059-16 18-16c9.941 0 18 7.163 18 16 0 3.459-1.235 6.662-3.335 9.279-0.427 0.926-0.665 1.957-0.665 3.044zM32 0c17.404 0 31.562 11.288 31.99 25.345-3.074-1.37-6.474-2.095-9.99-2.095-5.972 0-11.614 2.090-15.884 5.886-4.428 3.936-6.866 9.215-6.866 14.864 0 2.792 0.596 5.493 1.733 7.987-0.327 0.008-0.654 0.013-0.983 0.013-1.697 0-3.363-0.108-4.989-0.315-6.874 6.874-15.078 8.106-23.011 8.287v-1.682c4.284-2.099 8-5.921 8-10.29 0-0.61-0.047-1.208-0.135-1.794-7.237-4.767-11.865-12.047-11.865-20.206 0-14.359 14.327-26 32-26z" fill="#000000"></path>
</svg>
 Interpret. (GMS-B)</h4>
            <p>Try to recall the target sentence in the gap after you hear it in English. Try to say it out loud, and pause if necessary.</p>
        </li>
    </ol>
</section>
      <Footer /></div>
    );
  }
}

export default Help
