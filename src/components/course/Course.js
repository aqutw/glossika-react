import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router';
import '../../../css/shop.css';
import * as CourseActions from '../../actions/course-actions';

function mapStateToProps(state) {
  return {
    courseList: state.course.courseList,
    curLang: state.course.curLang
  };
}

export class Course extends React.Component {
  static propTypes = {
    curLang: React.PropTypes.string,
    changeCourseLanguageAction: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  changeCourseLanguageHandler(e) {
    const { changeCourseLanguageAction } = this.props;
    // stackoverflow.com/questions/30306486/get-selected-option-text-using-react-js
    const index = e.nativeEvent.target.selectedIndex;
    const text = e.nativeEvent.target[index].text;
    changeCourseLanguageAction(text)
  }

  fetchCourseHandler(curLang) {
    this.props.fetchCoursesAction(curLang);
  }

  componentDidMount() {
    this.fetchCourseHandler(this.props.curLang);
  }

  componentWillUpdate(nextProps, nextState) {
    this.fetchCourseHandler(nextProps.curLang);
  }

  render() {
    const { courseList } = this.props;
    return (
      <div><Header />
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
                    <select id="select-source-language" name="target" onChange={this.changeCourseLanguageHandler.bind(this)}>
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
        {courseList.map(v=>{
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
  {...CourseActions}
)(Course)
