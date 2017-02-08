import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';

function mapStateToProps(state) {
  return {

  };
}

const BlogFooter = (props) => {
  return (<footer className="site-footer clearfix">
            <section className="copyright"><a href="http://www.glossika.com/">Glossika Language Training</a> © 2017</section>
            <section className="poweredby"><a href="https://glossika.com/blog">The Glossika Blog</a>, brought to you by <a href="https://ghost.org">Ghost</a></section>
        </footer>)
}

const aryBlogArticles = [{"title":"How Will the Year of Rooster (2017) Affect You?","lnk":"how-will-the-year-of-rooster-2017-affect-you/","content":"Team Glossika would like to wish you happy holidays!  This year, we've prepared 3 surprises for you! Take the Chinese New Year quiz. See how many ","tag":["Michael Campbell","Glossika Blog - English edition","Chinese new year","Chinese Language"],"time":"25 January 2017"},{"title":"How to Tell the Difference between Arabic, Persian, Kurdish","lnk":"how-to-tell-the-difference-between-arabic-persian-kurdish/","content":"In this article we will demonstrate to you how you can easily tell the difference between the languages written in the Arabic script. Much like most ","tag":["Michael Campbell","Glossika Blog - English edition","Arabic Language","Persian Language","alphabet","Kurdish language","how to type","how to read","Sorani Kurdish","tashkeel"],"time":"06 January 2017"},{"title":"What is a Glossika triangulation package?","lnk":"what-is-a-glossika-triangulation-package/","content":"Over the last couple months (end of 2016) we've received a large number of orders for just triangulation packages. And in some very strange combinations. Unless ","tag":["Michael Campbell","Glossika Blog - English edition","GSR","triangulation"],"time":"04 January 2017"},{"title":"How to Breakthrough the Writing Barrier","lnk":"how-to-breakthrough-the-writing-barrier/","content":"When it comes to learning a new language, we aim to master all areas of competencies: reading, writing, speaking and listening. While most learners envision to ","tag":["Michael Campbell","Glossika Blog - English edition","alphabet","confidence","conversation","pronunciation","native speaker","fluency","reading","speaking","listening","new language","pattern","sentence"],"time":"14 December 2016"},{"title":"Schedule Guide Update","lnk":"schedule-guide-update/","content":"Due to questions received about how to read the Schedule Guide delivered to everybody's account, we've released a new version of the Schedule Guide (December 2016) ","tag":["Michael Campbell","Glossika Blog - English edition"],"time":"14 October 2016"},{"title":"What Time do Glossika Sales End Exactly?","lnk":"what-time-do-glossika-sales-end-exactly/","content":"Glossika, although based in Taipei, Taiwan, is made up of an international team. All of our work is recorded in our local time zone. This time ","tag":["Michael Campbell","Glossika Blog - English edition"],"time":"13 October 2016"},{"title":"5 Awesome Reasons To Learn Catalan","lnk":"5-awesome-reasons-to-learn-catalan/","content":"This week's guest post comes from Beatrice Moreno who runs the blog: Anything but Language As many tourists do, you may one day find yourself walking ","tag":["Michael Campbell","Glossika Blog - English edition","Catalan language"],"time":"12 October 2016"},{"title":"10-Language Dictionary of Chinese Characters","lnk":"10-language-dictionary-of-chinese-characters/","content":"I've had this data all collected in various locations for years. And I've been frustrated with how long it still takes me to look things up. ","tag":["Michael Campbell","Glossika Blog - English edition","Chinese Language","Chinese characters","Middle Chinese","Japanese Language","Korean Language","Taiwanese Language","Cantonese Language","Vietnamese Language","download resource","Shanghainese Language","Wenzhou Dialect","Fuzhou Dialect","dictionary"],"time":"23 August 2016"},{"title":"How the two dots (umlaut) over a vowel change the pronunciation","lnk":"how-the-two-dots-umlaut-over-a-vowel-change-the-pronunciation/","content":"Level: Beginner If you're a native English speaker just starting out on your journey to learn a foreign language, then dots and accents and hats over ","tag":["Michael Campbell","Glossika Blog - English edition","Language Difficulty"],"time":"10 August 2016"},{"title":"Latvian and Lithuanian Launch","lnk":"latvian-and-lithuanian-launch/","content":"For a limited time, you can add Latvian and Lithuanian to your collection for half price. Download Package Now Latvian and Lithuanian Bundle 3 Latvian e-books ","tag":["Michael Campbell","Glossika Blog - English edition","Lithuanian language","ebook","pdf","Indo-European","Latvian Language"],"time":"27 July 2016"},{"title":"What is 々 and where did it come from?","lnk":"what-is-and-where-did-it-come-from/","content":"This came up in a Chinese conversation I was having the other day, when I realised there's no easy way to refer to this symbol. How ","tag":["Michael Campbell","Glossika Blog - English edition","Japanese Language","Kanji","alphabet"],"time":"27 July 2016"},{"title":"What is Denasalization?","lnk":"what-is-denasalization/","content":"Denasalization Symbols in the International Phonetic Alphabet (IPA) These are uncommon among the worlds languages and represent languages that are currently undergoing a change between two ","tag":["Michael Campbell","Glossika Blog - English edition","IPA","Phonology","Phonics","Korean Language","Taiwanese Language","Chinese Language","Cantonese Language","Russian Language","Lithuanian language"],"time":"26 July 2016"},{"title":"Glossika Phonics Video Channel Launched!","lnk":"glossika-phonics-video-channel-launched/","content":"Over the past few years, I've had a plan to launch comprehensive coverage of everything one can find in the international phonetic alphabet (IPA). And we've ","tag":["Michael Campbell","Glossika Blog - English edition","Phonology","IPA","Phonics","Phonetics"],"time":"20 July 2016"},{"title":"List of Language Resources","lnk":"list-of-language-resources/","content":"In addition to accumulating thousands of paper books and photographing thousands of pages from national libraries, I also make frequent use of a subset of the ","tag":["Michael Campbell","Glossika Blog - English edition","Syntax","Typology","Phonology","Austronesian","language families","protolanguages","Linguistics","Corpus"],"time":"20 July 2016"},{"title":"Free Download Introduction to Lithuanian","lnk":"free-download-introduction-to-lithuanian/","content":"Welcome to the Modern Source of the Indo-European language family. If you're interested in Europe's linguistic heritage, start here to learn Lithuanian! Languages such as Bengali ","tag":["Michael Campbell","Glossika Blog - English edition","Indo-European","Lithuanian language","download resource","free ebook"],"time":"20 July 2016"},{"title":"Free Download Master Japanese Verbs for the JLPT","lnk":"hack-the-system-of-japanese-verbs-2/","content":"In this new ebook we list over 1300 verbs that are on the Japanese Language Proficiency Test (JLPT) based on the structure of the verb. Since ","tag":["Michael Campbell","Glossika Blog - English edition","Japanese Language","grammar","verbs","free download","ebook","pdf"],"time":"30 June 2016"},{"title":"Aged 30 He Speaks 19 Languages - Learn His One Secret to Learn Any Language","lnk":"aged-30-he-speaks-19-languages-learn-his-one-secret-to-learn-any-language/","content":"The majority of people want to learn a foreign language well and perhaps dream of becoming a polyglot. The methods I'm going to share with you ","tag":["Michael Campbell","Glossika Blog - English edition","Russian Language","Chinese Language","Chinese characters","Acquisition","polyglot","i+1"],"time":"22 June 2016"},{"title":"Hack Slavic Vocabulary","lnk":"hack-slavic-vocabulary/","content":"Download Czech &amp; Slovak Packages Now For speakers of Western European languages, learning a Slavic language can be a daunting task. Not only is the grammar ","tag":["Michael Campbell","Glossika Blog - English edition","Russian Language","Polish Language","Czech Language","Croatian Language","Serbian Language"],"time":"13 June 2016"},{"title":"Hack Foreign Vocabulary with the DNA of Language","lnk":"hack-foreign-vocabulary-with-the-dna-of-language/","content":"We've looked at Spatial Memory and Language Families, and now we can apply similar concepts that we understand from biology to track how languages evolve over ","tag":["Michael Campbell","Glossika Blog - English edition","IPA","Phonology","Indo-European","Sino-Tibetan","Austronesian"],"time":"07 June 2016"},{"title":"Revamped the Website","lnk":"revamped-website/","content":"Greetings Glossika fans, We have made some significant changes to our website! Most importantly for our users, we now have user accounts so that you can ","tag":["Edward Greve","Glossika Blog - English edition"],"time":"06 June 2016"},{"title":"Male vs Female Recordings","lnk":"male-vs-female-recordings/","content":"We've been receiving requests about whether our recordings use Male or Female voice. So here is the list grouped by male and female: Male Recordings Amis ","tag":["Michael Campbell","Glossika Blog - English edition"],"time":"13 November 2015"},{"title":"Glossika Product Updates November 2015","lnk":"glossika-product-updates-november-2015/","content":"Please check the update status for each language below and how you can receive your updates. We have been very busy working on these along with ","tag":["Michael Campbell","German Language","Chinese Language","Glossika Blog - English edition","Chinese characters","Greek Language","Czech Language","Vietnamese Language","Chữ Nôm characters","IPA","Mexican Spanish Language","Italian Language","Korean Language","Persian Language","Indonesian Language"],"time":"06 November 2015"},{"title":"Hacking Kanji from Chinese - Part 1","lnk":"hacking-kanji-from-chinese-part-1/","content":"In this article we're going to tackle some Sino-Japanese phono-semantic similar readings that all fall into the same class and all share the same phonetics with ","tag":["Michael Campbell","Glossika Blog - English edition","Japanese Language","Chinese Language","Chinese characters"],"time":"17 September 2015"},{"title":"Middle Chinese Readings Part 2","lnk":"middle-chinese-readings-part-2/","content":"For more information about what is presented here, please consult Part 1 of this article.   Here at Glossika we process a lot of Chinese characters. We've ","tag":["Michael Campbell","Chinese Language","Glossika Blog - English edition","Chinese characters","Middle Chinese"],"time":"14 September 2015"},{"title":"Middle Chinese Readings","lnk":"middle-chinese-readings/","content":"I recently calculated the readings of several thousand Chinese characters based on the categories given in old dictionaries. The data presented here is unique given the ","tag":["Michael Campbell","Chinese Language","Glossika Blog - English edition","Chinese characters","Middle Chinese"],"time":"14 September 2015"},{"title":"Children Learners vs Adult Learners 3","lnk":"children-learners-vs-adult-learners-3/","content":"In Part 1, we touched briefly on whether adults can learn languages more effectively than children, and in Part 2, we discussed methodology. In Part 3, ","tag":["Michael Campbell","Memory","Glossika Blog - English edition","fashcards"],"time":"11 September 2015"},{"title":"Children Learners vs Adult Learners 2","lnk":"children-learners-vs-adult-learners-2/","content":"In the previous article we touched briefly on whether adults can learn languages more effectively than children. In this article, we'll touch on methodology. Sentences with ","tag":["Michael Campbell","Glossika Blog - English edition"],"time":"06 September 2015"},{"title":"Second Language Acquisition vs Learning","lnk":"second-language-acquisition-vs-learning/","content":"A slideshow recently published discusses Krashen's five main hypotheses on second language acquisition. Here is a recapitulation of the points covered. The Acquisition-Learning Hypothesis Acquisition and ","tag":["Michael Campbell","Acquisition","Glossika Blog - English edition"],"time":"02 September 2015"},{"title":"How to Understand Language Families","lnk":"why-we-need-to-understand-what-language-families-are/","content":"How to remember vocabulary in dozens of languages: It may seem like something only professors study and useless to the average language learner. But there are ","tag":["Michael Campbell","Spatial Memory","protolanguages","language families","Indo-European","Sino-Tibetan","Altaic","Afroasiatic","Uralic","Austronesian","Glossika Blog - English edition"],"time":"06 August 2015"},{"title":"The Phonological Loop","lnk":"the-phonological-loop/","content":"Sentences stuck in your head If you're a learner of German then you may have encountered the term Ohrwurm, or earworm, which describes a piece of ","tag":["Michael Campbell","Phonological loop","Glossika Blog - English edition"],"time":"01 August 2015"},{"title":"Memory Anchors","lnk":"memory-anchors/","content":"Don't memorize - use your senses In the article \"How Does Memory Work\", I discussed briefly how memory is made up of synapses between nerve cells, ","tag":["Michael Campbell","Memory","GSR","Memory Anchors","muscle memory","Glossika Blog - English edition"],"time":"31 July 2015"},{"title":"How does Memory Work?","lnk":"memory-and-language-learning/","content":"Memory and Language Learning If memories are things, then what do they actually look like? Memory is complex, but in its simplest form, they are nerve ","tag":["Michael Campbell","Memory","GSR","Sleep","Glossika Blog - English edition"],"time":"29 July 2015"},{"title":"Spatial Memory (1)","lnk":"spatial-memory/","content":"The Most Powerful Memory Method Well OK, maybe not the most powerful memory method, but certainly a very powerful memory method, and it works for me: ","tag":["Michael Campbell","Memory Palace","Memory","Spatial Memory","Formosan languages","Memory Anchors","Glossika Blog - English edition"],"time":"26 July 2015"},{"title":"Glossika July 2015 Newsletter and Updates","lnk":"july-newsletter-and-updates/","content":"Greetings Glossika Friends and Fans! I know it seems at times like we take forever to get stuff done sometimes, and I only wish we had ","tag":["Edward Greve","Glossika Blog - English edition"],"time":"24 July 2015"},{"title":"Comprehensible Input - Why Translation Matters","lnk":"comprehensible-input/","content":"How long should I listen before speaking? There are various methods of comprehensible input. One is full translation like we use at Glossika. Another method is ","tag":["Michael Campbell","Fluency Series","comprehensible input","translation","Glossika Blog - English edition"],"time":"23 July 2015"},{"title":"Rank of Language Difficulty","lnk":"rank-of-language-difficulty/","content":"Which language is most difficult? In our last post, we talked about developing an objective method for comparing language difficulty across three aspects: vocabulary acquisition, syntax ","tag":["Michael Campbell","most difficult language","Thai Language","Japanese Language","German Language","Language Difficulty","Russian Language","Fluency Series","Polish Language","Finnish Language","French Language","Hungarian Language","Arabic Language","Chinese Language","Glossika Blog - English edition"],"time":"21 July 2015"},{"title":"Language Difficulty","lnk":"language-difficulty/","content":"How to calculate how difficult a language is How accurate are the infographics floating around the web these days about language difficulty? — Pretty inaccurate! They're ","tag":["Michael Campbell","Japanese Language","German Language","Language Difficulty","Polish Language","Finnish Language","French Language","Hungarian Language","Arabic Language","Chinese Language","Indo-European","Syntax","Typology","Word Order","Phonology","Glossika Blog - English edition"],"time":"18 July 2015"},{"title":"Children Learners vs Adult Learners (1)","lnk":"children-learners-vs-adult-learners/","content":"How can we get fluent like children? You may have heard that children learn languages faster and more efficiently than adults. This has to do with ","tag":["Michael Campbell","Fluency Series","Glossika Blog - English edition"],"time":"17 July 2015"},{"title":"Memory, The Brain, and Language Acquisition","lnk":"memory-the-brain-and-language-acquisition/","content":"We encounter a lot of new information every day that may or may not need to be memorized. In fact, we’re doing it all the ","tag":["Michael Campbell","Memory","Glossika Blog - English edition"],"time":"14 July 2015"},{"title":"Glossika Mass Sentence Method","lnk":"glossika-mass-sentence-method/","content":"We strive to provide as much phonetic detail as we can in our IPA transcriptions, but this is not always possible with every language. As there ","tag":["Michael Campbell","Glossika Blog - English edition"],"time":"14 July 2015"},{"title":"Glossika Spaced Repetition","lnk":"glossika-spaced-repetition/","content":"Glossika’s spaced repetition program (GSR) focuses specifically on building stronger memories in the first four days. These are crucial days to strengthen those new memories. ","tag":["Michael Campbell","GSR","Glossika Blog - English edition"],"time":"14 July 2015"}];

export class Blog extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.navClassName = {close: 'nav-closed', open: 'nav-opened'}
    this.state = {
      navClassName: this.navClassName.close
    };
  }

  toggleSideNav() {
    const {navClassName} = this.state;
    const o = {navClassName: navClassName===this.navClassName.close ? this.navClassName.open : this.navClassName.close};
    this.setState(o);
  }

  render() {
    const { navClassName } = this.state;
    return (
      <div className={"tag-template tag-glossika-blog-english " + (navClassName)}>
      <link rel="stylesheet" type="text/css" href="/blog/assets/css/screen.css?v=b70e34aa0e" />
    <link rel="stylesheet" type="text/css" href="/blog/assets/css/blog.css?v=b70e34aa0e" />
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400" />
      <div className="nav">
    <h3 className="nav-title">Menu</h3>
    <a href="#" className="nav-close" onClick={this.toggleSideNav.bind(this)}>
        <span className="hidden">Close</span>
    </a>
    <ul>
            <li className="nav-glossika-home" role="presentation"><a href="https://glossika.com/">Glossika Home</a></li>
            <li className="nav-courses" role="presentation"><a href="https://glossika.com/courses/">Courses</a></li>
            <li className="nav-fluency-series" role="presentation"><a href="https://glossika.com/blog/tag/fluency/">Fluency Series</a></li>
            <li className="nav-en-english-edition nav-current" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-english/">EN English Edition</a></li>
            <li className="nav-zh-" role="presentation"><a href="https://glossika.com/blog/tag/zhongwen-banben/">ZH 中文版</a></li>
            <li className="nav-ar-" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-lnskh-lrby/">AR النسخة العربية</a></li>
            <li className="nav-de-deutsche-ausgabe" role="presentation"><a href="https://glossika.com/blog/tag/deutsche-ausgabe/">DE Deutsche Ausgabe</a></li>
            <li className="nav-es-versin-espaola" role="presentation"><a href="https://glossika.com/blog/tag/version-espanola/">ES Versión española</a></li>
            <li className="nav-fr-dition-franaise" role="presentation"><a href="https://glossika.com/blog/tag/edition-francaise/">FR Édition française</a></li>
            <li className="nav-ja-" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-nihongohan/">JA 日本語版</a></li>
            <li className="nav-pl-polska-wersja" role="presentation"><a href="https://glossika.com/blog/tag/polska-wersja/">PL Polska wersja</a></li>
            <li className="nav-id-versi-bahasa-indonesia" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-versi-bahasa-indonesia/">ID Versi bahasa indonesia</a></li>
            <li className="nav-kr-" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-hangugeo-beojeon/">KR 한국어 버전</a></li>
            <li className="nav-pb-verso-portugus" role="presentation"><a href="https://glossika.com/blog/tag/glossika-blog-versao-portugues/">PB versão Português</a></li>
            <li className="nav-ru-" role="presentation"><a href="https://glossika.com/blog/tag/russkaja-viersija/">RU Русская версия</a></li>
    </ul>
    <a className="subscribe-button icon-feed" href="https://glossika.com/blog/rss/">Subscribe</a>
</div>
      <span className="nav-cover"></span>
      <div className="site-wrapper">
      <header className="main-header tag-head " style={{backgroundImage: 'url(https://glossika-blog.s3.amazonaws.com/2017/Jan/are_f123_small-1483694842565.jpg)'}}>
          <nav className="main-nav overlay clearfix">
              <a className="blog-logo" href="https://glossika.com/blog"><img src="https://glossika-blog.s3.amazonaws.com/2015/Jul/logo_64x64-1437366840405.png" alt="The Glossika Blog" /></a>
                  <a className="menu-button icon-menu" href="#" onClick={this.toggleSideNav.bind(this)}><span className="word">Menu</span></a>
          </nav>
          <div className="vertical">
              <div className="main-header-content inner">
                  <h1 className="page-title">Glossika Blog - English edition</h1>
                  <h2 className="page-description">
                          Glossika blog in English
                  </h2>
              </div>
          </div>
      </header>
      <main className="content" role="main">
      {aryBlogArticles.map(v=>{
        return (<article key={v.title} className="post tag-glossika-blog-english tag-chinese-new-year tag-chinese">
    <header className="post-header">
        <h2 className="post-title"><a href="/blog/how-will-the-year-of-rooster-2017-affect-you/">{v.title}</a></h2>
    </header>
    <section className="post-excerpt">
        <p>{v.content} <a className="read-more" href="/blog/how-will-the-year-of-rooster-2017-affect-you/">»</a></p>
    </section>
    <footer className="post-meta">
      {v.tag.map(tag => {
        return (<a key={tag} href="/blog/author/michael/">{tag}</a>);
      })}
        <time className="post-date" dateTime="2017-01-25">{v.time}</time>
      }
    </footer>
</article>);
      })}
      </main>
    </div>{/*site-wrapper*/}
    <BlogFooter />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Blog)
