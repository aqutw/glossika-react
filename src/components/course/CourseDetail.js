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
  }

  render() {
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
            <h2 className="accordion-trigger">Fluency Book 1 Contents (Click to Expand)</h2>
            <ul className="accordion-section" style={{display:'none'}}>
                
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
            <h2 className="accordion-trigger">Fluency Book 2 Contents</h2>
            <ul className="accordion-section" style={{display:'none'}}>
                
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
            <h2 className="accordion-trigger">Fluency Book 3 Contents</h2>
            <ul className="accordion-section" style={{display:'none'}}>
                
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
      <Footer /></div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(CourseDetail)
