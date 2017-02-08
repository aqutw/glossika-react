import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';

function mapStateToProps(state) {
  return {

  };
}

export class CourseDetail extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isBook1ContentShow: false,
      isBook2ContentShow: false,
      isBook3ContentShow: false,
    };
  }

  onBookClick(type) {
    const o = {};
    o['isBook' + type + 'ContentShow'] = true;
    this.setState(o);
  }

  render() {
    const {isBook1ContentShow, isBook2ContentShow, isBook3ContentShow} = this.state;
    const inlineStyle = {
      book1: isBook1ContentShow ? {display:''} : {display:'none'}, /*TODO: Make book1~3 Components */
      book2: isBook2ContentShow ? {display:''} : {display:'none'},
      book3: isBook3ContentShow ? {display:''} : {display:'none'},
    };
    return (
      <div><link rel="stylesheet" href="/css/shop.css" /><Header />
      <header className="gl-ProductDetail_Section">
    <h1>Fluency 123 — Belarusian</h1>

    <div className="gl-ProductDetail_Section-content">
        <div className="gl-ProductDetail_Section-image">
            <img onclick="pswpLaunchGallery(0)" src="/img/samples/f123-en-bel-1-300.jpg" />
        </div>

        <div className="gl-ProductDetail_Section-text">
            <p>For busy people who need to get past the basics. Fluency 123 includes 3 separate books with:</p><ul><li>Bilingual Sentences</li><li>Language Introduction</li><li>Pronunciation Guide</li><li>Detailed Phonics</li></ul><p>Glossika's audiovisual method helps you master comprehension <em>and</em> achieve fluency. Great on its own, or the perfect companion to your ongoing studies.</p>

            <div className="gl-BuyNow">
                <h3>Buy Now</h3>
                <p>Three packages to choose from, so you can buy only what you need.</p><p>Your Glossika training starts now!</p>
                <footer>
                    <p><strong>$99.99 ~ $249.99</strong></p>
                    <p><a href="#buy">See Purchase Options</a></p>
                </footer>
            </div>
        </div>

    </div>
</header>
<hr />
<section className="gl-ProductDetail_Section">
    <h1>About the Course</h1>
    <div className="gl-ProductDetail_Section-content">
        <div className="gl-ProductDetail_Section-text">
            <ul className="gl-ProductBullets">
                
                <li>
                    <h2>Content &amp; Schedule</h2>
                    <p>3 books — 3000 sentences — 10 months of content (on suggested schedule of 20 min/day). 120+ hours Spaced Repetition Audio Training by native speaker.</p>
                </li>
                
                <li>
                    <h2>Master the Material</h2>
                    <p>Gradual progression from A1 to B2 Level (CEFR). Master 4000+ words and how to use them in the real world using collocation drills.</p>
                </li>
                
                <li>
                    <h2>Science-Based Tools</h2>
                    <p>IPA phonics shows you exactly what you're hearing, so you can say it right, right from the start. Glossika brings together the latest in language acquisition research in the fields of comprehensible input, memory, psychology, phonetics and linguistics.</p>
                </li>
                
            </ul>
        </div>
        <div className="gl-ProductDetail_Section-image">
            <img onclick="pswpLaunchGallery(5)" src="/img/samples/f123-en-bel-6-300.jpg" />
        </div>
    </div>
</section>
<section className="gl-ProductContents">
    <ul>
        
        <li>
            <h2 className="accordion-trigger" onClick={this.onBookClick.bind(this, 1)}>Fluency Book 1 Contents (Click to Expand)</h2>
            <ul className="accordion-section" style={inlineStyle.book1}>
                
                <li>Describe a thing or person</li>
                
                <li>Ask &amp; give names</li>
                
                <li>Ask &amp; answer where someone / something is and where he / she / it's from</li>
                
                <li>Ask &amp; answer relationship status</li>
                
                <li>Ask &amp; give age / price / job</li>
                
                <li>Describe what someone is doing now</li>
                
                <li>Describe what people often do</li>
                
                <li>Talk about likes / dislikes</li>
                
                <li>Describe what people don't often do</li>
                
                <li>Ask what people ever do &amp; contrast with what they're doing now</li>
                
                <li>Ask what people have / don't have</li>
                
                <li>Ask &amp; answer where / what / how someone / something was before</li>
                
                <li>Ask &amp; answer what someone did vs. what they usually do now</li>
                
                <li>Ask &amp; answer when someone did something and how they did it</li>
                
                <li>Ask &amp; answer what was happening at some at some time</li>
                
                <li>Ask &amp; answer regarding arrivals and departures</li>
                
                <li>Ask &amp; answer what someone used to do and what they do now</li>
                
                <li>Ask &amp; answer where someone used to work / live and where they do now</li>
                
                <li>Ask &amp; answer what someone did as a child</li>
                
                <li>Talk about previous and current hobbies / likes / dislikes</li>
                
                <li>Talk about your daily schedule</li>
                
                <li>Ask &amp; answer how many times someone has done something / something has happened</li>
                
                <li>Ask &amp; answer if someone has ever been somewhere / done something before</li>
                
                <li>Ask &amp; answer how long someone has been doing something</li>
                
                <li>Ask &amp; answer how much time / money someone has spent</li>
                
                <li>Ask &amp; answer since when and for how long</li>
                
                <li>Ask &amp; answer the last time something happened</li>
                
                <li>Ask &amp; answer if someone has arrived yet, where they've been</li>
                
                <li>Ask &amp; answer what someone just did / has just done</li>
                
                <li>Ask &amp; answer whether something has happened yet</li>
                
                <li>Ask &amp; answer regarding what can and cannot be done</li>
                
            </ul>

        </li>
        
        <li>
            <h2 className="accordion-trigger" onClick={this.onBookClick.bind(this, 2)}>Fluency Book 2 Contents</h2>
            <ul className="accordion-section" style={inlineStyle.book2}>
                
                <li>Ask &amp; answer whether someone has done something</li>
                
                <li>Ask &amp; answer whether something has been done (by someone)</li>
                
                <li>Ask &amp; answer how things are made or done</li>
                
                <li>Ask &amp; answer when things were built / broken / repaired / invented / cleaned / washed</li>
                
                <li>Ask &amp; answer when / how things are used</li>
                
                <li>Ask &amp; answer when people were born / invited / hurt / woken up</li>
                
                <li>Ask &amp; answer if you're allowed to do something</li>
                
                <li>Describe what happened to someone or something (what happened to them)</li>
                
                <li>Ask &amp; answer if something is needed or needs to be done</li>
                
                <li>Give reasons why</li>
                
                <li>Ask &amp; answer what's happening soon, in the near future</li>
                
                <li>Ask &amp; answer when something is going to happen</li>
                
                <li>Ask &amp; answer when something opens / closes / starts / ends / happens</li>
                
                <li>Ask &amp; answer what someone wants / intends / plans to do later</li>
                
                <li>Ask &amp; answer where someone will be at a certain time, or period of time from now</li>
                
                <li>Ask &amp; answer whether something will happen again</li>
                
                <li>Ask &amp; answer what someone shall / can / may / might / should do</li>
                
                <li>Discuss possibilities and what someone can / can't do</li>
                
                <li>Ask &amp; answer whether someone can / could / couldn't do something</li>
                
                <li>Discuss what people must / must not do (and the observation it's based on)</li>
                
                <li>Give reasons and time limits for why something should / ought to be done</li>
                
                <li>Ask &amp; answer what someone needs / has to do in the future and the past</li>
                
                <li>Ask why someone's doing something when they don't need to do it</li>
                
                <li>Ask &amp; answer what people would like to do, prefer to do and rather do instead of something else</li>
                
                <li>Tell people what to do and what not to do with warnings</li>
                
                <li>Offer suggestions to other people to do something</li>
                
                <li>Ask &amp; answer how much there is / was and how many there are / were</li>
                
                <li>Ask &amp; answer whether / how often there is / are</li>
                
                <li>Using conversational fillers and tags: why / probably / should / really / already / yet / too / but</li>
                
                <li>Ask &amp; answer what someone is supposed to be doing and where they're supposed to be</li>
                
                <li>Confirming someone's previous intentions, what they said vs what they actually did</li>
                
                <li>Ask &amp; answer: wondering why / thinking why / knowing why, and why not</li>
                
                <li>Ask &amp; answer if someone had done something</li>
                
                <li>Expressing tend / avoid / claim / mind / admit / regret / deny / suggest / decide / promise / pretend / dare, etc</li>
                
            </ul>

        </li>
        
        <li>
            <h2 className="accordion-trigger" onClick={this.onBookClick.bind(this, 3)}>
            Fluency Book 3 Contents</h2>
            <ul className="accordion-section" style={inlineStyle.book3}>
                
                <li>Expressing emotion verbs: expect / regret / remember / remind / warn / suggest / love / hate</li>
                
                <li>Expressing how to make someone do something</li>
                
                <li>Expressing trying to do something</li>
                
                <li>Expressing what needs to get done</li>
                
                <li>Ask &amp; answer what you would have done or love to have done</li>
                
                <li>Expressing by what means and in what way you can get something done</li>
                
                <li>Expressing why you don't need to get something done</li>
                
                <li>Ask &amp; answer what you have to get used to doing</li>
                
                <li>Expressing conversational verbs: feel / think of / dream of / sorry / apologize / promise / insist / prevent / look forward / accuse / keep on / keep from / suspect / enjoy / complain</li>
                
                <li>Ask &amp; answer the point in doing something and whether it's worth it</li>
                
                <li>Express the trouble it takes to do something</li>
                
                <li>Ask &amp; answer whether something is likely or bound to happen</li>
                
                <li>Expressing how: for / off / on / along / out / in / between / about</li>
                
                <li>Express what happened while doing something</li>
                
                <li>Expressing what happens after / before having done something</li>
                
                <li>Express what something means / meant when being in a certain situation</li>
                
                <li>Identifying differences between collective and uncountable nouns and the use of measure words</li>
                
                <li>Expressing some / few / a lot / a little / most / both / none / either / neither / every / each / all / whole of something or someone</li>
                
                <li>Ask &amp; answer questions about the actions that someone did / has done</li>
                
                <li>Ask &amp; answer questions about the places where something happens</li>
                
                <li>Ask &amp; answer questions about the people who want to do something</li>
                
                <li>Ask &amp; answer questions about the people (for) whom you did something</li>
                
                <li>Ask &amp; answer questions about the things you were looking for / buying / selling / talking about</li>
                
                <li>Ask &amp; answer questions about the people who have relatives / friends that you know or have met</li>
                
                <li>Express common facts</li>
                
                <li>Express something that involves or concerns something / someone else</li>
                
                <li>Express actions that happen between each other and to yourself</li>
                
                <li>What could / would / might be if something were true</li>
                
                <li>Explain a scenario, what caused it, and how it happened</li>
                
                <li>Ask &amp; answer the name of the thing / person you want to see</li>
                
                <li>Explain how something could have been done in a different way</li>
                
                <li>Describe comparisons and the use of so / such / too / more / less and too much to [be unable to] do something</li>
                
                <li>Compare how same / different something was as compared to now (like prices)</li>
                
                <li>Compare how same / different something is as compared to your own (like salaries)</li>
                
                <li>Ask &amp; answer regarding things you no longer do or won't ever do again</li>
                
                <li>Ask &amp; answer how you'll still do something even under the circumstances</li>
                
                <li>Ask &amp; answer how you'll do something despite / in spite of the circumstances</li>
                
                <li>Ask &amp; answer what will / should be done in case of a circumstance</li>
                
                <li>Explain as if something were to happen, or as if something were not enough already</li>
                
                <li>Ask &amp; answer what will happen by the time something else happens</li>
                
                <li>Ask &amp; answer in [time], just in time, on time, etc.</li>
                
                <li>Manipulate different location words to express positions and directions that you intend</li>
                
                <li>Manipulate different prepositions / postpositions to express how things get done, and in reporting events that have happened</li>
                
                <li>Express different subjects and objects of directional actions: fear / afraid / scared / scary / frighten / frightened / frightening</li>
                
                <li>Using compound verbs, adjectives, and phrases in various situations (too many to list here)</li>
                
            </ul>

        </li>
        
    </ul>
</section>
<section className="gl-ProductDetail_Comments">
</section>
<hr />
<section id="buy" className="gl-ProductDetail_Buy">
    <h1>How To Buy</h1>
    <div className="gl-ProductDetail_Buy-note">
        <h2>Product details:</h2>
        <p>Audio MP3 and Ebook PDF documents will be available for download after purchase. You will be notified by email when your download links are ready. Most courses are available for instant download. Products that include physical books also include free worldwide shipping.</p>
    </div>


    <div className="gl-PriceListWrapper">
        <ul className="gl-PriceList">
            
            
            <li className="gl-PriceList_Item-highlight">
            
                <header>
                    
                    <div className="gl-HighlightRibbon">
                        <h1>Popular!</h1>
                    </div>
                    
                    <h2>Ebook Package</h2>
                </header>

                <section>
                    <ul>
                        <li><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M18 36h-4v28h4c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2z" fill="#000000"></path>
<path d="M46 36c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h4v-28h-4z" fill="#000000"></path>
<path d="M64 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 3.838 0.677 7.518 1.916 10.928-1.217 2.075-1.916 4.492-1.916 7.072 0 7.053 5.215 12.887 12 13.857v-27.714c-1.995 0.285-3.854 0.99-5.485 2.024-0.337-1.67-0.515-3.398-0.515-5.167 0-14.359 11.641-26 26-26s26 11.641 26 26c0 1.77-0.177 3.498-0.514 5.169-1.631-1.034-3.491-1.74-5.486-2.026v27.715c6.784-0.971 12-6.805 12-13.857 0-2.58-0.699-4.996-1.916-7.071 1.239-3.41 1.916-7.091 1.916-10.929z" fill="#000000"></path>
</svg><p>MP3</p></li>
                        
                        <li><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M50 0h-40c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6h40c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6zM30 62c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM48 56h-36v-48h36v48z" fill="#000000"></path>
</svg><p>Ebook</p></li>
                        
                    </ul>
                </section>

                <footer>
                    <span className="gl-ItemPrice-regular">$99.99</span>
                    <span className="gl-ItemPrice-discount">$94.99</span>
                    <form action="/cart/add" method="post" className="gl-Cart_Item-add">
                        <input type="hidden" name="csrftoken" value="9xbKMFyf-2id3QqG3l3PcNLwp7wp9CNd1sO0" />
                        <input type="hidden" name="retail_price_usd" value="99.99" />
                        <input type="hidden" name="cust_price_usd" value="94.99" />
                        <input type="hidden" name="product_code" value="ebk-f123-en-hy" />
                        <input name="submit" type="submit" value="Add to Cart" />
                    </form>
                </footer>
            </li>
            
            
            <li className="gl-PriceList_Item">
            
                <header>
                    
                    <h2>Pro Package</h2>
                </header>

                <section>
                    <ul>
                        <li><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M18 36h-4v28h4c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2z" fill="#000000"></path>
<path d="M46 36c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h4v-28h-4z" fill="#000000"></path>
<path d="M64 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 3.838 0.677 7.518 1.916 10.928-1.217 2.075-1.916 4.492-1.916 7.072 0 7.053 5.215 12.887 12 13.857v-27.714c-1.995 0.285-3.854 0.99-5.485 2.024-0.337-1.67-0.515-3.398-0.515-5.167 0-14.359 11.641-26 26-26s26 11.641 26 26c0 1.77-0.177 3.498-0.514 5.169-1.631-1.034-3.491-1.74-5.486-2.026v27.715c6.784-0.971 12-6.805 12-13.857 0-2.58-0.699-4.996-1.916-7.071 1.239-3.41 1.916-7.091 1.916-10.929z" fill="#000000"></path>
</svg><p>MP3</p></li>
                        
                        <li><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M56 8v52h-42c-3.314 0-6-2.686-6-6s2.686-6 6-6h38v-48h-40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48v-56h-4z" fill="#000000"></path>
<path d="M14.004 52v0c-0.001 0-0.002 0-0.004 0-1.104 0-2 0.895-2 2s0.896 2 2 2c0.001 0 0.002-0 0.004-0v0h37.993v-4h-37.993z" fill="#000000"></path>
</svg><p>Book</p></li>
                        
                        <li><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M50 0h-40c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6h40c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6zM30 62c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM48 56h-36v-48h36v48z" fill="#000000"></path>
</svg><p>Ebook</p></li>
                        
                    </ul>
                </section>

                <footer>
                    <span className="gl-ItemPrice-regular">$119.99</span>
                    <span className="gl-ItemPrice-discount">$113.99</span>
                    <form action="/cart/add" method="post" className="gl-Cart_Item-add">
                        <input type="hidden" name="csrftoken" value="9xbKMFyf-2id3QqG3l3PcNLwp7wp9CNd1sO0" />
                        <input type="hidden" name="retail_price_usd" value="119.99" />
                        <input type="hidden" name="cust_price_usd" value="113.99" />
                        <input type="hidden" name="product_code" value="pro-f123-en-hy" />
                        <input name="submit" type="submit" value="Add to Cart" />
                    </form>
                </footer>
            </li>
            
            <li className="gl-PriceList_Item">
                <header>
                    <h2>Triangulation</h2>
                </header>

                <section>
                    <ul>
                        <li><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M18 36h-4v28h4c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2z" fill="#000000"></path>
<path d="M46 36c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h4v-28h-4z" fill="#000000"></path>
<path d="M64 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 3.838 0.677 7.518 1.916 10.928-1.217 2.075-1.916 4.492-1.916 7.072 0 7.053 5.215 12.887 12 13.857v-27.714c-1.995 0.285-3.854 0.99-5.485 2.024-0.337-1.67-0.515-3.398-0.515-5.167 0-14.359 11.641-26 26-26s26 11.641 26 26c0 1.77-0.177 3.498-0.514 5.169-1.631-1.034-3.491-1.74-5.486-2.026v27.715c6.784-0.971 12-6.805 12-13.857 0-2.58-0.699-4.996-1.916-7.071 1.239-3.41 1.916-7.091 1.916-10.929z" fill="#000000"></path>
</svg><p>MP3<br />2-4 Languages</p></li>
                        <li><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns000xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
<path d="M50 0h-40c-3.3 0-6 2.7-6 6v52c0 3.3 2.7 6 6 6h40c3.3 0 6-2.7 6-6v-52c0-3.3-2.7-6-6-6zM30 62c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM48 56h-36v-48h36v48z" fill="#000000"></path>
</svg><p>Ebook<br />2-4 Languages</p></li>
                    </ul>
                </section>

                <footer>
                    <span className="gl-ItemPrice-discount">$99.99 ~ $249.99</span>
                    <a href="/courses/custom"><button>Select Languages</button></a>
                </footer>
            </li>
        </ul>
    </div>

    <div className="gl-CurrencySelect">
    <form method="get">
        <label htmlFor="select-currency">Set Currency:</label>
        <select id="select-currency" defaultValue="USD" onchange="this.form.submit()" name="curr">
            

                
                <option value="AFN">Afghan Afghani (AFN)</option>
                

            

                
                <option value="ALL">Albanian Lek (ALL)</option>
                

            

                
                <option value="DZD">Algerian Dinar (DZD)</option>
                

            

                
                <option value="ARS">Argentine Peso (ARS)</option>
                

            

                
                <option value="AUD">Australian Dollar (AUD)</option>
                

            

                
                <option value="AZN">Azerbaijani New Manat (AZN)</option>
                

            

                
                <option value="BSD">Bahamian Dollar (BSD)</option>
                

            

                
                <option value="BDT">Bangladeshi Taka (BDT)</option>
                

            

                
                <option value="BBD">Barbadian or Bajan Dollar (BBD)</option>
                

            

                
                <option value="BZD">Belizean Dollar (BZD)</option>
                

            

                
                <option value="BMD">Bermudian Dollar (BMD)</option>
                

            

                
                <option value="BOB">Bolivian Bolíviano (BOB)</option>
                

            

                
                <option value="BWP">Botswana Pula (BWP)</option>
                

            

                
                <option value="BRL">Brazilian Real (BRL)</option>
                

            

                
                <option value="GBP">British Pound (GBP)</option>
                

            

                
                <option value="BND">Bruneian Dollar (BND)</option>
                

            

                
                <option value="BGN">Bulgarian Lev (BGN)</option>
                

            

                
                <option value="CAD">Canadian Dollar (CAD)</option>
                

            

                
                <option value="CLP">Chilean Peso (CLP)</option>
                

            

                
                <option value="CNY">Chinese Yuan Renminbi (CNY)</option>
                

            

                
                <option value="COP">Colombian Peso (COP)</option>
                

            

                
                <option value="CRC">Costa Rican Colon (CRC)</option>
                

            

                
                <option value="HRK">Croatian Kuna (HRK)</option>
                

            

                
                <option value="CZK">Czech Koruna (CZK)</option>
                

            

                
                <option value="DKK">Danish Krone (DKK)</option>
                

            

                
                <option value="DOP">Dominican Peso (DOP)</option>
                

            

                
                <option value="XCD">East Caribbean Dollar (XCD)</option>
                

            

                
                <option value="EGP">Egyptian Pound (EGP)</option>
                

            

                
                <option value="AED">Emirati Dirham (AED)</option>
                

            

                
                <option value="EUR">Euro (EUR)</option>
                

            

                
                <option value="FJD">Fijian Dollar (FJD)</option>
                

            

                
                <option value="GTQ">Guatemalan Quetzal (GTQ)</option>
                

            

                
                <option value="HNL">Honduran Lempira (HNL)</option>
                

            

                
                <option value="HKD">Hong Kong Dollar (HKD)</option>
                

            

                
                <option value="HUF">Hungarian Forint (HUF)</option>
                

            

                
                <option value="INR">Indian Rupee (INR)</option>
                

            

                
                <option value="IDR">Indonesian Rupiah (IDR)</option>
                

            

                
                <option value="ILS">Israeli Shekel (ILS)</option>
                

            

                
                <option value="JMD">Jamaican Dollar (JMD)</option>
                

            

                
                <option value="JPY">Japanese Yen (JPY)</option>
                

            

                
                <option value="KZT">Kazakhstani Tenge (KZT)</option>
                

            

                
                <option value="KES">Kenyan Shilling (KES)</option>
                

            

                
                <option value="MMK">Kyat, Myanmar (MMK)</option>
                

            

                
                <option value="LAK">Lao or Laotian Kip (LAK)</option>
                

            

                
                <option value="LBP">Lebanese Pound (LBP)</option>
                

            

                
                <option value="LRD">Liberian Dollar (LRD)</option>
                

            

                
                <option value="MOP">Macau Pataca (MOP)</option>
                

            

                
                <option value="MYR">Malaysian Ringgit (MYR)</option>
                

            

                
                <option value="MVR">Maldivian Rufiyaa (MVR)</option>
                

            

                
                <option value="MRO">Mauritanian Ouguiya (MRO)</option>
                

            

                
                <option value="MUR">Mauritian Rupee (MUR)</option>
                

            

                
                <option value="MXN">Mexican Peso (MXN)</option>
                

            

                
                <option value="MAD">Moroccan Dirham (MAD)</option>
                

            

                
                <option value="NPR">Nepalese Rupee (NPR)</option>
                

            

                
                <option value="TWD">New Taiwan Dollar (TWD)</option>
                

            

                
                <option value="NZD">New Zealand Dollar (NZD)</option>
                

            

                
                <option value="VUV">Ni-Vanuatu Vatu (VUV)</option>
                

            

                
                <option value="NIO">Nicaraguan Cordoba (NIO)</option>
                

            

                
                <option value="NOK">Norwegian Krone (NOK)</option>
                

            

                
                <option value="PKR">Pakistani Rupee (PKR)</option>
                

            

                
                <option value="PGK">Papua New Guinean Kina (PGK)</option>
                

            

                
                <option value="PEN">Peruvian Sol (PEN)</option>
                

            

                
                <option value="PHP">Philippine Peso (PHP)</option>
                

            

                
                <option value="PLN">Polish Zloty (PLN)</option>
                

            

                
                <option value="QAR">Qatari Riyal (QAR)</option>
                

            

                
                <option value="RON">Romanian New Leu (RON)</option>
                

            

                
                <option value="RUB">Russian Ruble (RUB)</option>
                

            

                
                <option value="WST">Samoan Tala (WST)</option>
                

            

                
                <option value="SAR">Saudi Arabian Riyal (SAR)</option>
                

            

                
                <option value="SCR">Seychellois Rupee (SCR)</option>
                

            

                
                <option value="SGD">Singapore Dollar (SGD)</option>
                

            

                
                <option value="SBD">Solomon Islander Dollar (SBD)</option>
                

            

                
                <option value="ZAR">South African Rand (ZAR)</option>
                

            

                
                <option value="KRW">South Korean Won (KRW)</option>
                

            

                
                <option value="LKR">Sri Lankan Rupee (LKR)</option>
                

            

                
                <option value="SEK">Swedish Krona (SEK)</option>
                

            

                
                <option value="CHF">Swiss Franc (CHF)</option>
                

            

                
                <option value="SYP">Syrian Pound (SYP)</option>
                

            

                
                <option value="THB">Thai Baht (THB)</option>
                

            

                
                <option value="TOP">Tongan Pa'anga (TOP)</option>
                

            

                
                <option value="TTD">Trinidadian Dollar (TTD)</option>
                

            

                
                <option value="TRY">Turkish Lira (TRY)</option>
                

            

                
                <option value="USD">US Dollar (USD)</option>
                

            

                
                <option value="UAH">Ukrainian Hryvnia (UAH)</option>
                

            

                
                <option value="VND">Vietnamese Dong (VND)</option>
                

            

                
                <option value="XOF">West African CFA Franc (XOF)</option>
                

            

                
                <option value="YER">Yemeni Rial (YER)</option>
                

            
        </select>
        <input type="submit" value="Select" />
    </form>
</div>


</section>
      <Footer /></div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(CourseDetail)
