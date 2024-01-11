import React, { useRef, useState } from 'react'
import './App.css'
import banner from './img/banner.png'
import line from './img/line.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import Footer from '../Footer/App'
import Header from '../Header/App'

const textList = [
  '江苏竭能法律咨询服务有限公司成立于2013年，坐落在风景秀美、人文底蕴深厚的江南历史文化名城——常州，也是新中国第一任司法部女部长史良的故乡。',
  '江苏竭能自成立以来，始终秉持通过我们精准的服务和精通的专业知识来实现长期繁荣发展。我们致力于运用自身的从业经验、专项业务能力和事件的洞察力，帮助客户应对不断变化的客观环境，提振信心、谋求稳定发展。',
  '江苏竭能以建设复合型、专业化的人才队伍为导向，团队成员拥有国内外知名院校法学专业教育背景以及丰富的法律职业经历，助力客户应对日益复杂的商业挑战，为客户提供“一站无忧”的问题解决方案。',
  '客户是我们开展一切工作的核心。江苏竭能将继续秉持“专业、专心、专注”的服务理念继续坚持提升业务能力，不断寻求突破，从根本上理解客户的需求，帮助客户解决问题和发掘机遇。',
  '我们将以精品服务作为立司之本，以海纳四方同仁志士作为发展之路，以审慎独立的态度作为成长理念，以砥砺深耕作为创新理念，以互利共赢作为昌盛之道，为国家的法治建设贡献力量。'
]

export default function MyApp(props) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div>
      <div className="about">
        <Header state={props.state} onSetState={props.onSetState}></Header>
        <div className="banner">
          <img src={banner} alt="banner" />
          <div className="aboutText">
            <div className="gy">关于我们</div>
            <div className="sj">
              以专业视角，应对各种复杂需求 业务电话：400-651-0001
            </div>
          </div>
        </div>
        <div className="content">
          <div className="msg">
            <div className="title">关于竭律</div>
            {textList.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="num">
            <div className="box">
              <div className="one">30,000</div>
              <div className="two">当事人</div>
            </div>
            <img src={line} alt="line" className="line" />
            <div className="box">
              <div className="one">
                2<span>亿</span>3540<span>余万</span>
              </div>
              <div className="two">挽回经济利益</div>
            </div>
            <img src={line} alt="line" className="line" />
            <div className="box">
              <div className="one">126</div>
              <div className="two">实战律师</div>
            </div>
            <img src={line} alt="line" className="line" />
            <div className="box">
              <div className="one">全国</div>
              <div className="two">案件范围</div>
            </div>
          </div>

          <div className="img">
            <img src={png1} alt="png1" />
            <img src={png2} alt="png2" />
            <img src={png3} alt="png3" />
          </div>
        </div>
        <Footer />
      </div>
      <div className="mobile">
        <Header
          isShow={isShow}
          onSetIsShow={setIsShow}
          state={props.state}
          onSetState={props.onSetState}
        ></Header>
        <div className="banner" onClick={() => setIsShow(false)}>
          <img src={banner} alt="banner" />
          <div className="aboutText">
            <div className="gy">关于我们</div>
            <div className="sj">
              以专业视角，应对各种复杂需求 业务电话：400-651-0001
            </div>
          </div>
        </div>
        <div className="content" onClick={() => setIsShow(false)}>
          <div className="msg">
            <div className="title">关于竭律</div>
            {textList.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="num">
            <div className="box">
              <div className="one">30,000</div>
              <div className="two">当事人</div>
            </div>
            <div className="line"></div>
            <div className="box">
              <div className="one">
                2<span>亿</span>3540<span>余万</span>
              </div>
              <div className="two">挽回经济利益</div>
            </div>
            <div className="line"></div>
            <div className="box">
              <div className="one">126</div>
              <div className="two">实战律师</div>
            </div>
            <div className="line"></div>
            <div className="box">
              <div className="one">全国</div>
              <div className="two">案件范围</div>
            </div>
          </div>

          <div className="img">
            <img src={png1} alt="png1" />
            <img src={png2} alt="png2" />
            <img src={png3} alt="png3" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
