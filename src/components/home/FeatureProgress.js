import React from 'react';

export class FeatureProgress extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <section className="feature scrollbg-choices">
    <div className="content">
        <h1>Production Progress</h1>
        <p>Note: If you have previously pre-ordered a language and don't see it here, don't worry! We will list it as soon as possible.</p>
        <ul className="language-list"><li><h4>Afroasiatic</h4><ul>
<li><span><a href="/courses/?target=ar">Arabic (Standard)</a></span></li>
<li><span><a href="/courses/?target=are">Egyptian Arabic</a></span></li>
<li><span>Syrian Arabic (<em>Translation 100%</em>)</span></li>
<li><span>Moroccan Arabic (<em>Translation 50%</em>)</span></li></ul><hr />
            </li>
            
            <li><h4>Altaic</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=ja">Japanese</a></span></li>
                
                    <li><span><a href="/courses/?target=kr">Korean</a></span></li>
                
                    <li><span><a href="/courses/?target=mn">Mongolian</a></span></li>
                
                    <li><span><a href="/courses/?target=tr">Turkish</a></span></li>
                
                    <li><span>Azerbaijani (<em>Recording 100%</em>)</span></li>
                
                    <li><span>Kazakh (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Uyghur (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Uzbek (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Kyrgyz (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Tatar (<em>Translation 50%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>Austroasiatic/Mon-Khmer</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=vnn">Vietnamese (Northern)</a></span></li>
                
                    <li><span>Khmer (<em>Translation 50%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>Austronesian Languages</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=id">Indonesian</a></span></li>
                
                    <li><span>Tagalog (<em>Text Processing</em>)</span></li>
                
                    <li><span>Thao (<em>Text Processing</em>)</span></li>
                
                    <li><span>Cebuano (<em>Post-Production</em>)</span></li>
                
                    <li><span>Ilokano (<em>Post-Production</em>)</span></li>
                
                    <li><span>Malay (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Amis (<em>Translation 75%</em>)</span></li>
                
                    <li><span>Tsou (<em>Translation 75%</em>)</span></li>
                
                    <li><span>Atayal (Squliq) (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Hla'arua (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Isbukun Bunun (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Kanakanavu (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Kavalan (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Paiwan (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Puyuma (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Rukai (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Saisiyat (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Sakizaya (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Seediq (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Taroko (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Tao (<em>Translation 25%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>Dravidian Languages</h4>
                <ul>
                
                    <li><span>Malayalam (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Kannada (<em>Translation 75%</em>)</span></li>
                
                    <li><span>Tamil (<em>Translation 75%</em>)</span></li>
                
                    <li><span>Telugu (<em>Translation 50%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>IE: Celtic</h4>
                <ul>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>IE: Germanic</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=nl">Dutch</a></span></li>
                
                    <li><span><a href="/courses/?target=en">English</a></span></li>
                
                    <li><span><a href="/courses/?target=de">German</a></span></li>
                
                    <li><span><a href="/courses/?target=is">Icelandic</a></span></li>
                
                    <li><span>Swedish (<em>Text Processing</em>)</span></li>
                
                    <li><span>Australian English (<em>Recording 100%</em>)</span></li>
                
                    <li><span>Nynorsk (<em>Recording 100%</em>)</span></li>
                
                    <li><span>British English (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Danish (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Norwegian (<em>Translation 100%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>IE: Indo-Iranian</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=hi">Hindi</a></span></li>
                
                    <li><span>Persian (<em>Recording 100%</em>)</span></li>
                
                    <li><span>Nepali (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Sorani Kurdish (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Urdu (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Bengali (<em>Translation 75%</em>)</span></li>
                
                    <li><span>Kurmanji Kurdish (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Marathi (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Punjabi (India) (<em>Translation 50%</em>)</span></li>
                
                    <li><span>Punjabi (Pakistan) (<em>Translation 50%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>IE: Other</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=hy">Armenian</a></span></li>
                
                    <li><span><a href="/courses/?target=el">Greek</a></span></li>
                
                    <li><span><a href="/courses/?target=lav">Latvian</a></span></li>
                
                    <li><span><a href="/courses/?target=lit">Lithuanian</a></span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>IE: Romance</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=ca">Catalan</a></span></li>
                
                    <li><span><a href="/courses/?target=fr">French</a></span></li>
                
                    <li><span><a href="/courses/?target=it">Italian</a></span></li>
                
                    <li><span><a href="/courses/?target=esm">Spanish (Mexico)</a></span></li>
                
                    <li><span><a href="/courses/?target=es">Spanish (Spain)</a></span></li>
                
                    <li><span>Portuguese (Brazil) (<em>Text Processing</em>)</span></li>
                
                    <li><span>European Portuguese (<em>Translation 100%</em>)</span></li>
                
                    <li><span>Romanian (<em>Translation 50%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>IE: Slavic</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=bel">Belarusian</a></span></li>
                
                    <li><span><a href="/courses/?target=cs">Czech</a></span></li>
                
                    <li><span><a href="/courses/?target=pl">Polish</a></span></li>
                
                    <li><span><a href="/courses/?target=ru">Russian</a></span></li>
                
                    <li><span><a href="/courses/?target=srp">Serbian</a></span></li>
                
                    <li><span><a href="/courses/?target=sk">Slovak</a></span></li>
                
                    <li><span><a href="/courses/?target=ukr">Ukrainian</a></span></li>
                
                    <li><span>Slovene (<em>Text Processing</em>)</span></li>
                
                    <li><span>Croatian (<em>Post-Production</em>)</span></li>
                
                    <li><span>Bulgarian (<em>Translation 75%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>Kartuli</h4>
                <ul>
                
                    <li><span>Georgian (<em>Translation 50%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>Niger-Congo</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=sw">Swahili</a></span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>Sino-Tibetan</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=yue">Chinese (Cantonese)</a></span></li>
                
                    <li><span><a href="/courses/?target=hak">Chinese (Hakka)</a></span></li>
                
                    <li><span><a href="/courses/?target=zs">Chinese (Mandarin, China)</a></span></li>
                
                    <li><span><a href="/courses/?target=zt">Chinese (Mandarin, Taiwan)</a></span></li>
                
                    <li><span><a href="/courses/?target=mnn">Chinese (Taiwanese Hokkien)</a></span></li>
                
                    <li><span><a href="/courses/?target=wuw">Chinese (Wenzhounese)</a></span></li>
                
                    <li><span>Burmese (<em>Translation 75%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>Tai-Kadai</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=th">Thai</a></span></li>
                
                    <li><span>Lao (<em>Translation 100%</em>)</span></li>
                
                </ul>
                <hr />
            </li>
            
            <li><h4>Uralic</h4>
                <ul>
                
                    <li><span><a href="/courses/?target=est">Estonian</a></span></li>
                
                    <li><span><a href="/courses/?target=fi">Finnish</a></span></li>
                
                    <li><span><a href="/courses/?target=hu">Hungarian</a></span></li>
                
                </ul>
                <hr />
            </li>
            
        </ul>
    </div>
</section>
    );
  }
}

export default FeatureProgress
