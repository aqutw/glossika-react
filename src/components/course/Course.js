import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {

  };
}

const aryCourses = [{"title":"Fluency 123—Arabic (Standard)","photo":"/img/products/cards/ar-f123.jpg","desc":"Speaking Arabic gives you the power to communicate across the Middle East and Northern Africa. Our phonics solutions make pronunciation even more accessible.","lnk":"fluency123/modern-standard-arabic"},{"title":"Fluency 123—Armenian","photo":"/img/products/cards/hy-f123.jpg","desc":"Armenians don't talk like a textbook. This is the only place you'll have access to training the true spoken language just like they speak on TV.","lnk":"fluency123/armenian"},{"title":"Fluency 123—Belarusian","photo":"/img/products/cards/bel-f123.jpg","desc":"An old relic of East Slavic, our course will put your fluency ahead of most Belarusians and will truly impress them.","lnk":"fluency123/belarusian"},{"title":"Fluency 123—Catalan","photo":"/img/products/cards/ca-f123.jpg","desc":"Your command of Catalan will open doors and opportunities for you in Barcelona, this very proud Catalan-speaking city.","lnk":"fluency123/catalan"},{"title":"Fluency 123—Chinese (Cantonese)","photo":"/img/products/cards/yue-f123.jpg","desc":"Spoken by millions of Chinese diaspora for 150 years and in the powerful financial hub of Hong Kong, very few foreigners have ever achieved fluency. Until now.","lnk":"fluency123/cantonese"},{"title":"Fluency 123—Chinese (Hakka)","photo":"/img/products/cards/hak-f123.jpg","desc":"With both inland and seashore dialects in 1 package, we're the only company daring enough to publish this unique Chinese language.","lnk":"fluency123/hakka"},{"title":"Fluency 123—Chinese (Mandarin, China)","photo":"/img/products/cards/zs-f123.jpg","desc":"Speaking in the Putonghua Mandarin accent of China will allow you to sound like a strong business and political negotiator.","lnk":"fluency123/mandarin-chinese-beijing"},{"title":"Business Intro—Chinese (Mandarin, China)","photo":"/img/products/cards/zs-bi.jpg","desc":"For business-oriented professionals who want to break the ice and get business conversations started with clients, or for those who just want to \"listen in\" on the other side.","lnk":"business_intro/mandarin-chinese-beijing"},{"title":"Daily Life—Chinese (Mandarin, Taiwan)","photo":"/img/products/cards/zt-dl.jpg","desc":"For anybody who wants to get settled in a new city -- everything from finding an apartment, paying bills, getting things installed, to seeing a doctor. This course will allow you to function fluently in your new home.","lnk":"daily_life/mandarin-chinese-taiwan"},{"title":"Travel—Chinese (Mandarin, Taiwan)","photo":"/img/products/cards/zt-tr.jpg","desc":"For travelers who need just enough to get by for their next trip, this course covers everything from flights, reservations, public transit, accommodations, finding your way around, eating out, and emergencies. This course will allow you to function fluently on the road.","lnk":"travel/mandarin-chinese-taiwan"},{"title":"Fluency 123—Chinese (Mandarin, Taiwan)","photo":"/img/products/cards/zt-f123.jpg","desc":"The beautiful lilting Mandarin of <em>The Beautiful Island</em> is well-received throughout the greater Chinese-speaking community.","lnk":"fluency123/mandarin-chinese-taiwan"},{"title":"Business Intro—Chinese (Mandarin, Taiwan)","photo":"/img/products/cards/zt-bi.jpg","desc":"For business-oriented professionals who want to break the ice and get business conversations started with clients, or for those who just want to \"listen in\" on the other side.","lnk":"business_intro/mandarin-chinese-taiwan"},{"title":"Fluency 123—Chinese (Taiwanese Hokkien)","photo":"/img/products/cards/mnn-f123.jpg","desc":"Rated hardest for English speakers, it's no wonder we're the only international publishers to tackle it. Get started speaking right away.","lnk":"fluency123/taiwanese"},{"title":"Fluency 123—Chinese (Wenzhounese)","photo":"/img/products/cards/wuw-f123.jpg","desc":"Long known as the secret dialect of China and impossible to crack, this is the most common dialect spoken by Chinese in Europe. Now even you can crack it.","lnk":"fluency123/wenzhou-chinese"},{"title":"Fluency 123—Czech","photo":"/img/products/cards/cs-f123.jpg","desc":"Embark on your journey into the Slavic language family with this one! The locals would love nothing more than striking a friendly conversation with you -- travel smart, make friends and fall in love with Czech for your next planned destination!","lnk":"fluency123/czech"},{"title":"Business Intro—Czech","photo":"/img/products/cards/cs-bi.jpg","desc":"For business-oriented professionals who want to break the ice and get business conversations started with clients, or for those who just want to \"listen in\" on the other side.","lnk":"business_intro/czech"},{"title":"Fluency 123—Dutch","photo":"/img/products/cards/nl-f123.jpg","desc":"Locals may insist on speaking English, so with this material you can push through to fluency and keep those conversations going in Dutch.","lnk":"fluency123/dutch"},{"title":"Fluency 123—Egyptian Arabic","photo":"/img/products/cards/are-f123.jpg","desc":"Let this most popular Arabic dialect take you across the border of Arabic world. With borrowed words from languages like Coptic, Turkish, French and even English, now you can learn the most widely spoken Arabic dialect understood by 300 million speakers!","lnk":"fluency123/egyptian-arabic"},{"title":"Fluency 123—Estonian","photo":"/img/products/cards/est-f123.jpg","desc":"The tech hub in Tallinn produced companies like Skype. Now you too can enjoy Estonia and participate in tech discussions in Estonian.","lnk":"fluency123/estonian"},{"title":"Fluency 123—Finnish","photo":"/img/products/cards/fi-f123.jpg","desc":"Finns are proud that few ever master their spoken language. Prove them wrong and land some great new opportunities in this high tech country.","lnk":"fluency123/finnish"},{"title":"Fluency 123—French","photo":"/img/products/cards/fr-f123.jpg","desc":"One of the most powerful and beautiful languages of the world, you'll find it useful almost everywhere on your travels, wherever you are.","lnk":"fluency123/french"},{"title":"Business Intro—French","photo":"/img/products/cards/fr-bi.jpg","desc":"For business-oriented professionals who want to break the ice and get business conversations started with clients, or for those who just want to \"listen in\" on the other side.","lnk":"business_intro/french"},{"title":"Daily Life—German","photo":"/img/products/cards/de-dl.jpg","desc":"For anybody who wants to get settled in a new city -- everything from finding an apartment, paying bills, getting things installed, to seeing a doctor. This course will allow you to function fluently in your new home.","lnk":"daily_life/german"},{"title":"Travel—German","photo":"/img/products/cards/de-tr.jpg","desc":"For travelers who need just enough to get by for their next trip, this course covers everything from flights, reservations, public transit, accommodations, finding your way around, eating out, and emergencies. This course will allow you to function fluently on the road.","lnk":"travel/german"},{"title":"Fluency 123—German","photo":"/img/products/cards/de-f123.jpg","desc":"One of the most powerful and popular languages of Europe, it's extremely useful in tech, science, finance, and bureaucracy.","lnk":"fluency123/german"},{"title":"Business Intro—German","photo":"/img/products/cards/de-bi.jpg","desc":"For business-oriented professionals who want to break the ice and get business conversations started with clients, or for those who just want to \"listen in\" on the other side.","lnk":"business_intro/german"},{"title":"Fluency 123—Greek","photo":"/img/products/cards/el-f123.jpg","desc":"With one of the longest and richest histories in Europe, Greek is also very challenging. Conversational fluency makes access to texts much easier.","lnk":"fluency123/greek"},{"title":"Fluency 123—Hindi","photo":"/img/products/cards/hi-f123.jpg","desc":"Spoken Hindi is the lingua franca for most of northern India and mutually intelligible with Urdu, giving you access to hundreds of millions of people.","lnk":"fluency123/hindi"},{"title":"Fluency 123—Hungarian","photo":"/img/products/cards/hu-f123.jpg","desc":"Difficult? Not here. Learn the spelling - or not - either way, we'll get you to fluency and you may even find that the spelling starts to make sense.","lnk":"fluency123/hungarian"},{"title":"Fluency 123—Icelandic","photo":"/img/products/cards/is-f123.jpg","desc":"Finally this imposing language is now made as easy as German. Access to phonics and native expressions, this is the only fluency training available.","lnk":"fluency123/icelandic"},{"title":"Fluency 123—Indonesian","photo":"/img/products/cards/id-f123.jpg","desc":"Quick to pick up &amp; easy to learn -- not only your open door to make friends with its 300+ million native speakers, but enjoy discovering similarities between languages from its neighboring countries.","lnk":"fluency123/indonesian"},{"title":"Fluency 123—Italian","photo":"/img/products/cards/it-f123.jpg","desc":"The long-time capital of art, fashion, history, culture, and cuisine, now even you can chiacchierare just like a local over colazione, pranzo and cena.","lnk":"fluency123/italian"},{"title":"Daily Life—Japanese","photo":"/img/products/cards/ja-dl.jpg","desc":"For anybody who wants to get settled in a new city -- everything from finding an apartment, paying bills, getting things installed, to seeing a doctor. This course will allow you to function fluently in your new home.","lnk":"daily_life/japanese"},{"title":"Travel—Japanese","photo":"/img/products/cards/ja-tr.jpg","desc":"For travelers who need just enough to get by for their next trip, this course covers everything from flights, reservations, public transit, accommodations, finding your way around, eating out, and emergencies. This course will allow you to function fluently on the road.","lnk":"travel/japanese"},{"title":"Fluency 123—Japanese","photo":"/img/products/cards/ja-f123.jpg","desc":"One of the most powerful and popular languages of Asia, it's extremely useful for careers in tech, finance, robotics, and natural sciences.","lnk":"fluency123/japanese"},{"title":"Business Intro—Japanese","photo":"/img/products/cards/ja-bi.jpg","desc":"For business-oriented professionals who want to break the ice and get business conversations started with clients, or for those who just want to \"listen in\" on the other side.","lnk":"business_intro/japanese"},{"title":"Fluency 123—Korean","photo":"/img/products/cards/kr-f123.jpg","desc":"They're tech savvy and popular, and attract many who are determined to master the speech registers and unique sounds of this language isolate.","lnk":"fluency123/korean"},{"title":"Fluency 123—Latvian","photo":"/img/products/cards/lav-f123.jpg","desc":"Preserved at all cost by a country known for its magnificent wilderness, you'll love the free-flowing and lyrical tone of this beautiful Baltic language that has been used in over 30,000 folklore and folk songs.","lnk":"fluency123/latvian"},{"title":"Fluency 123—Lithuanian","photo":"/img/products/cards/lit-f123.jpg","desc":"Explore the mystery of the most archaic member of the Indo-European family and you, too, will grow fond of this surviving language, being spoken by some of the warmest and friendliest people you'll ever meet.","lnk":"fluency123/lithuanian"},{"title":"Fluency 123—Mongolian","photo":"/img/products/cards/mn-f123.jpg","desc":"One of the most mysterious and difficult languages for westerners because of a lack of resources and exposure.","lnk":"fluency123/mongolian"},{"title":"Fluency 123—Polish","photo":"/img/products/cards/pl-f123.jpg","desc":"Don't let the spelling fool you into thinking it's difficult. With our tools we level the playing field and make Polish one of the easiest to learn.","lnk":"fluency123/polish"},{"title":"Business Intro—Polish","photo":"/img/products/cards/pl-bi.jpg","desc":"For business-oriented professionals who want to break the ice and get business conversations started with clients, or for those who just want to \"listen in\" on the other side.","lnk":"business_intro/polish"},{"title":"Fluency 123—Russian","photo":"/img/products/cards/ru-f123.jpg","desc":"In less than a year fluency will give you the freedom to socialize in a dozen countries and tap a large source of literature and science.","lnk":"fluency123/russian"},{"title":"Fluency 123—Serbian","photo":"/img/products/cards/srp-f123.jpg","desc":"As a lingua franca in southeast Europe, you'll be able to socialize in six countries which will open plenty of new opportunities.","lnk":"fluency123/serbian"},{"title":"Fluency 123—Slovak","photo":"/img/products/cards/sk-f123.jpg","desc":"Situated in “the heart of Europe,” Slovak shares linguistic similarities to all the surrounding Slavic languages -- learn this one well and easily pick up the others. Put all the grammar behind you and just follow along with what you hear.","lnk":"fluency123/slovak"},{"title":"Fluency 123—Spanish (Mexico)","photo":"/img/products/cards/esm-f123.jpg","desc":"With the strongest economy and largest population in Latin America, using this variety of Spanish extends far beyond its own borders.","lnk":"fluency123/mexican-spanish"},{"title":"Fluency 123—Spanish (Spain)","photo":"/img/products/cards/es-f123.jpg","desc":"Adopt a Castilian accent and speak like a true Spaniard, the most common form of Spanish used in the European Union.","lnk":"fluency123/castilian-spanish"},{"title":"Fluency 123—Swahili","photo":"/img/products/cards/sw-f123.jpg","desc":"An absolute necessity for work and communication, this lingua franca has a huge user base of 150+ million across a dozen countries of East Africa.","lnk":"fluency123/swahili"},{"title":"Fluency 123—Thai","photo":"/img/products/cards/th-f123.jpg","desc":"Complex writing, tones, and sounds that scare people away. Avoid all of this with Glossika and start communicating in Thailand right away.","lnk":"fluency123/thai"},{"title":"Fluency 123—Turkish","photo":"/img/products/cards/tr-f123.jpg","desc":"This widely understood lingua franca, from Turkey across Central Asia to China, and easy grammar, this is a powerful communication tool.","lnk":"fluency123/turkish"},{"title":"Fluency 123—Ukrainian","photo":"/img/products/cards/ukr-f123.jpg","desc":"Whether planning to travel to western Ukraine or for socializing, you'll never fail to impress with the fluency command this course delivers.","lnk":"fluency123/ukrainian"},{"title":"Fluency 123—Vietnamese (Northern)","photo":"/img/products/cards/vnn-f123.jpg","desc":"Whether having trouble understanding or being understood this course will give you the right accent and make the right impression every time.","lnk":"fluency123/vietnamese-northern"}];

export class Course extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <link rel="stylesheet" href="/css/shop.css" /><Header />
     <section className="gl-Products">

    <div className="gl-Products_Info">
        <h1>Getting Started</h1>
        <p>Inside every Glossika course, you will find thousands of sentences carefully chosen to help you learn the most important features of every language. Use the phonetic transcripts and audio files to make the most of your language training.
            <a href="/howto/">
                Learn more about how to use Glossika's training materials.
            </a>
        </p>
        <p>If you want to study from another source language, or study more than one language at a time, try our <a href="custom">Custom Course &amp; Triangulation Builder</a>. We'll make you exactly what you want.</p>
    </div>

    <hr />

    <div className="gl-Products_Showcase">
        <div className="gl-Products_Showcase-top">
            <h1>Available Courses</h1>

            <p><a href="/shop/">See additional courses and supplementary materials not listed here.</a></p>

            <div className="gl-Products_Showcase-lang">
                <form action="/courses/" method="post">
                    <input type="hidden" name="csrftoken" value="grxC2sTw-tEDyI2mokUy3iT69XcJYf8LjXuM" />
                    <label htmlFor="select-source-language">What language are you interested in?</label>
                    <select id="select-source-language" name="target" onchange="this.form.submit()">
                        <option>Select a Language</option>
                        <option value="ar">Arabic (Standard)</option>
                        <option value="hy">Armenian</option>
                        <option value="bel">Belarusian</option>
                        <option value="ca">Catalan</option>
                        <option value="yue">Chinese (Cantonese)</option>
                        <option value="hak">Chinese (Hakka)</option>
                        <option value="zs">Chinese (Mandarin, China)</option>
                        <option value="zt">Chinese (Mandarin, Taiwan)</option>
                        <option value="mnn">Chinese (Taiwanese Hokkien)</option>
                        <option value="wuw">Chinese (Wenzhounese)</option>
                        <option value="cs">Czech</option>
                        <option value="nl">Dutch</option>
                        <option value="are">Egyptian Arabic</option>
                        <option value="est">Estonian</option>
                        <option value="fi">Finnish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="el">Greek</option>
                        <option value="hi">Hindi</option>
                        <option value="hu">Hungarian</option>
                        <option value="is">Icelandic</option>
                        <option value="id">Indonesian</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japanese</option>
                        <option value="kr">Korean</option>
                        <option value="lav">Latvian</option>
                        <option value="lit">Lithuanian</option>
                        <option value="mn">Mongolian</option>
                        <option value="pl">Polish</option>
                        <option value="ru">Russian</option>
                        <option value="srp">Serbian</option>
                        <option value="sk">Slovak</option>
                        <option value="esm">Spanish (Mexico)</option>
                        <option value="es">Spanish (Spain)</option>
                        <option value="sw">Swahili</option>
                        <option value="th">Thai</option>
                        <option value="tr">Turkish</option>
                        <option value="ukr">Ukrainian</option>
                        <option value="vnn">Vietnamese (Northern)</option>
                    </select>
                    <noscript>
                    &lt;input type="submit" id="set-source-language" value="Show"/&gt;
                    </noscript>
                </form>
            </div>
        </div>
        {aryCourses.map(v=>{
          const lnk = '/courses/' + v.lnk.replace('/', '---');
          return (
            <div key={lnk} className="gl-Products_Card">
                <div className="gl-Products_Card-header">
                    <h3>{v.title}</h3>
                    <Link to={lnk}>
                        <img src={v.photo} />
                    </Link>
                </div>
                <div className="gl-Products_Card-copy">
                    <p>{v.desc}</p>
                </div>
                <div className="gl-Products_Card-footer">
                    <Link to={lnk}>
                        Learn More
                    </Link>
                </div>
            </div>)
        })}
    </div>
</section>
<Footer /></div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Course)
