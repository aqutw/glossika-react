import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export class FAQ extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><Header />
      <section id="top" className="gl-FAQ_Header">
    <h1>Frequently Asked Questions</h1>
    <div>
        <h2>I have a question about...</h2>
        <ul>
            
            <li><a href="#faq-languages">New Languages</a></li>
            
            <li><a href="#faq-products">Product Details</a></li>
            
            <li><a href="#faq-triangulation">Triangulation Packages</a></li>
            
            <li><a href="#faq-orders">Placing an Order / An Existing Order</a></li>
            
        </ul>
    </div>
</section><hr />
<section id="faq-languages" className="gl-FAQ_Body">
    <h2>New Languages</h2>
    <ul>
        
        <li>
            <h3>Would you consider publishing a course in ___ language?</h3>
            <p>We love all languages! If you or someone you know wants to cooperate on a new language, we're interested - just let us know.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Do you have any estimate for when ___ language will be ready?</h3>
            <p>Generally speaking, it's very difficult for us to say exactly when a new language will be ready. Our production process has quite a few moving parts, including translation, verification and proofreading, audio recording, audio post-production, and text post-production including romanizations and IPA phonics. Please check back on our website for updates, or send us an email and let us know that you want to be notified when a specific language is updated.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>I have some friends that are interested in your projects, how can they contribute to Glossika?</h3>
            <p>Please have all interested parties send an email to training@glossika.com with the language they want to publish and their qualifications.</p>
        </li>

        

        
    </ul>
    <a href="#top">Back to top</a>
</section><hr />
<section id="faq-products" className="gl-FAQ_Body">
    <h2>Product Details</h2>
    <ul>
        
        <li>
            <h3>Why can't I pre-order ___ language anymore?</h3>
            <p>We appreciate the support our customers show by placing pre-orders for products currently in production. We have recently updated our policy to wait until our new products are at least 90% complete before taking pre-orders, in order to avoid misunderstandings about when the products will be released.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Is the Intro level for ___ language available yet?</h3>
            <p>Currently the only products available in the Intro series are the Glossika Chinese Pronunciation manual (for English speakers) and the Glossika English Pronunciation Manual (for Chinese speakers). We will be adding more courses in this series in the future.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Is your product good for beginners?</h3>
            <p>Absolutely, although we do advise true beginners (with no experience) to do some additional research on their new language at the beginning. Wikipedia is a great resource, but any self-learning books or language textbooks will do just fine. The important thing is to listen often - remember, the more you listen, the faster you'll pick it up!</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>You have lots of products, where should I start first?</h3>
            <p>If you aren't studying for any special purpose such as conducting business or short-term travel, for general-purpose language acquisition we recommend Fluency 1-3, the first 3 courses of our general-purpose series in one convenient package.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>What is the difference between Japanese and Japanese for Teenagers?</h3>
            <p>Japanese for Teenagers is intended for Japanese second language teens and young adults who are looking for a more informal style of speech that they will hear among close friends. The regular Japanese product is for most other learners who will be speaking a more polite version of the language - suitable for use with one's teachers, elders, acquaintances, and strangers.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Can the PDF text be searched or copied?</h3>
            <p>Glossika PDFs are secured with Adobe Acrobat version 10 PDF copy protection. The text is fully searchable, but the version 10 copy protection scheme disables copy-paste and printing of the PDF contents.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Software Requirements. (I can't open the PDF. / I am asked for a password when I try to open the PDF.)</h3>
            <p>Glossika PDFs are only officially supported for use with Adobe Acrobat version 10 and above. Adobe Acrobat Reader version 10 or above is available for Windows, Mac OS, Android, and iOS. If you would like to sync your files and progress between multiple devices, at this time we suggest using Google Play Books as it works seamlessly across all popular platforms. iBooks does <strong>not</strong> support Adobe version 10 PDFs.</p><p>Please check the following table for compatibility. If you are using another platform or PDF reader software, your mileage may vary.</p><table style={{fontSize:'0.8em'}}><thead><tr><th>PDF Reader</th><th>Windows</th><th>Mac OS</th><th>iOS</th><th>Android</th><th>Linux</th></tr></thead><tbody><tr><td>Adobe Acrobat 10+</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>-</td></tr><tr><td>Google Play Books</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr><tr><td>Google Chrome</td><td>✔</td><td>✔</td><td>✘</td><td>✔</td><td>✔</td></tr><tr><td>Google Drive</td><td>✔</td><td>✔</td><td>✘</td><td>✔</td><td>✔</td></tr><tr><td>Google PDF Reader</td><td>-</td><td>-</td><td>✘</td><td>✔</td><td>-</td></tr><tr><td>Foxit Reader 7</td><td>✔</td><td>✔</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Foxit MobilePDF 3</td><td>-</td><td>-</td><td>✔</td><td>✔</td><td>-</td></tr><tr><td>SumatraPDF 3</td><td>✔</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Safari</td><td>-</td><td>✘</td><td>✔</td><td>-</td><td>-</td></tr><tr><td>iBooks</td><td>-</td><td>✘</td><td>✘</td><td>-</td><td>-</td></tr><tr><td>Preview</td><td>-</td><td>✘</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Nitro Reader</td><td>✘</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Skim</td><td>-</td><td>✘</td><td>-</td><td>-</td><td>-</td></tr><tr><td>calibre</td><td>✘</td><td>✘</td><td>-</td><td>-</td><td>✘</td></tr><tr><td>Mendeley Desktop</td><td>✘</td><td>✘</td><td>-</td><td>-</td><td>✘</td></tr></tbody></table>
        </li>

        

        
    </ul>
    <a href="#top">Back to top</a>
</section><hr />
<section id="faq-triangulation" className="gl-FAQ_Body">
    <h2>Triangulation Packages</h2>
    <ul>
        
        <li>
            <h3>What is triangulation package? Does this mean that different languages are mixed in the same files, or is it more a way to 'bundle' a few languages together with a less expensive price?</h3>
            <p>The triangulation package allows you to learn or review 2 or more languages at the same time by combining multiple languages into a single audio file.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>I already own ___ language package. What would be my price if I order the Triangulation Package that includes ___ language?</h3>
            <p>We are happy to offer a 20% discount for triangulation packages that include a language you have previously purchased. Please email us for a coupon code.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>If I ordered a 3-Language Triangulation package, are the 3 languages Source, Target 1, Target 2? Or is it Source and then Target 1, Target 2, Target 3?</h3>
            <p>The 3-Language Triangulation package includes a total of 3 languages: one source and two targets.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Would it be possible to receive some example files?</h3>
            <p>Of course! Send us an email at training@glossika.com, and tell us which 3 languages you'd like to try.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Does it contain all the material from the chosen languages or less material than if I bought each one of them separately?</h3>
            <p>Every course in the same series has the same material. Triangulation for Fluency 1-3 contains the same material as the individual languages, but the audio is joined together. You'll hear Source &gt; Target 1 &gt; Target 2 in the same file.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Does it require any previous knowledge of these languages?</h3>
            <p>The Triangulation Package works best when you already have at least some familiarity with the languages, and we recommend using your native language as the source language.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Is it possible to order printed copies of the triangulation PDFs?</h3>
            <p>Unfortunately not. Due to minimum order requirements from our printing house and the unlikeliness of selling a large volume of Triangulation Packages for every combination of languages, we are unable to provide paperback copies. However, we hope to make this possible in the future.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Is it advisable to only choose similar languages in a triangulation pack (Spanish and Catalan), or would it be fine to mix languages which are not similar to one another?</h3>
            <p>You can mix and match language families, but we really like listening to audio from different languages of the same family. Listening to two similar languages side by side allows you to more easily keep them separate in your mind.</p>
        </li>

        

        
    </ul>
    <a href="#top">Back to top</a>
</section><hr />
<section id="faq-orders" className="gl-FAQ_Body">
    <h2>Placing an Order / An Existing Order</h2>
    <ul>
        
        <li>
            <h3>My download links have expired. Can I get new download links?</h3>
            <p>Yes. Please send us an email at training@glossika.com and include your order number.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>How is the product delivered?</h3>
            <p>Ebooks and audio files will be delivered as download links sent via email. Paperback books will be delivered via international post.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>How much do I need to pay for international shipping?</h3>
            <p>International post is free for all orders.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>What is the size of the download?</h3>
            <p>The download includes more than 120 hours of high quality audio, and the complete package is anywhere from 3-6 GB (varies by language).</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>Do I get a discount by buying 2 (or more) courses at once?</h3>
            <p>No, but please check back regularly for special offers!</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>I previousy purchased an audio-only course, can I buy the PDF or book to go with it?</h3>
            <p>Yes, please send us an email with your order number for details.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>How long does it take to download the sound files?</h3>
            <p>Download time will depend on your own internet connection speed. A 3 GB download over a 10 MBps broadband connection will download in approximately 5 minutes, while a 1 MBps connection will take about 1 hour.</p>
        </li>

        
        <hr />
        

        
        <li>
            <h3>I am not living in Taiwan, can I pay via bank transfer?</h3>
            <p>We do not yet accept international wire transfers. You can pay with all major credit cards or Paypal on our secure online shop.</p>
        </li>

        

        
    </ul>
    <a href="#top">Back to top</a>
</section><hr />
<section id="top" className="gl-FAQ_Header">
    <h1>Frequently Asked Questions</h1>
    <div>
        <h2>I have a question about...</h2>
        <ul>
            
            <li><a href="#faq-languages">New Languages</a></li>
            
            <li><a href="#faq-products">Product Details</a></li>
            
            <li><a href="#faq-triangulation">Triangulation Packages</a></li>
            
            <li><a href="#faq-orders">Placing an Order / An Existing Order</a></li>
            
        </ul>
    </div>
</section><hr />
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
</section><hr />
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
</section><hr />
<Footer /></div>
    );
  }
}

export default FAQ
