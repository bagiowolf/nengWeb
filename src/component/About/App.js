import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import banner from './img/bg.jpg'
import line from './img/line.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import Footer from '../Footer/App'
import Header from '../Header/App'
import bg from './img/手绘插画.png'
import zx from '../Index/img/zx.png'
import yd from './img/关于我们bg.jpg'
import { get } from '../../utils/api/api'

const textList = [
  '江苏竭能法律咨询服务有限公司成立于2013年，坐落在风景秀美、人文底蕴深厚的江南历史文化名城——常州，也是新中国第一任司法部女部长史良的故乡。江苏竭能自成立以来，始终秉持通过我们精准的服务和精通的专业知识来实现长期繁荣发展。我们致力于运用自身的从业经验、专项业务能力和事件的洞察力，帮助客户应对不断变化的客观环境，提振信心、谋求稳定发展。',
  '江苏竭能以建设复合型、专业化的人才队伍为导向，团队成员拥有国内外知名院校法学专业教育背景以及丰富的法律职业经历，助力客户应对日益复杂的商业挑战，为客户提供“一站无忧”的问题解决方案。江苏竭能自成立以来，始终秉持通过我们精准的服务和精通的专业知识来实现长期繁荣发展。我们致力于运用自身的从业经验、专项业务能力和事件的洞察力，帮助客户应对不断变化的客观环境，提振信心、谋求稳定发展。',
  '我们将以精品服务作为立司之本，以海纳四方同仁志士作为发展之路，以审慎独立的态度作为成长理念，以砥砺深耕作为创新理念，以互利共赢作为昌盛之道，为国家的法治建设贡献力量。'
]

const NumberAnimation = ({ targetValue, isSplit }) => {
  const [currentValue, setCurrentValue] = useState(0)
  useEffect(() => {
    if (targetValue) {
      const animationDuration = 500 // 动画持续时间（毫秒）
      const framesPerSecond = 60 // 每秒渲染帧数
      const totalFrames = (animationDuration / 1000) * framesPerSecond
      const frameInterval = 1000 / framesPerSecond
      const increment = (targetValue - currentValue) / totalFrames

      let currentFrame = 0
      const intervalId = setInterval(() => {
        currentFrame++

        if (currentFrame <= totalFrames) {
          setCurrentValue((prevValue) => prevValue + increment)
        } else {
          setCurrentValue(targetValue)
          clearInterval(intervalId)
        }
      }, frameInterval)

      return () => clearInterval(intervalId)
    }
  }, [targetValue, currentValue])
  if (targetValue) {
    if (isSplit) {
      return <span>{Math.round(currentValue).toLocaleString()}</span>
    } else {
      return <span>{Math.round(currentValue)}</span>
    }
  } else {
    return 0
  }
}
export default function MyApp(props) {
  const [isShow, setIsShow] = useState(false)
  let scal = props.windowWidthValue / 1920
  const [num, setNum] = useState({})
  const [wan, setWan] = useState(0)
  const [yi, setYi] = useState(0)
  const getNum = () => {
    function extractMillions(number) {
      return Math.floor(number / 10000) % 10000
    }
    get('/get_lawyer_economic/1').then((res) => {
      setNum(res.data)

      setWan(extractMillions(res.data.index_economic_losses))
      setYi(Math.floor(res.data.index_economic_losses / 100000000) % 10)
    })
  }
  useEffect(() => {
    getNum()
  }, [])
  return (
    <div>
      <div className="about">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          windowWidthValue={props.windowWidthValue}
        />
        <div className="zx">
          <img src={zx} alt="" />
          <a href="https://ada.baidu.com/imlp/?imid=b694179300c687ccf883b0fd6be0f2c4#back1705761185685">
            在线咨询
          </a>
        </div>
        <div className="banner">
          <img
            src={banner}
            alt="banner"
            style={{ height: 340 * scal + 'px' }}
          />
          <div className="aboutText" style={{ left: 350 * scal + 'px' }}>
            <div className="gy" style={{ fontSize: 48 * scal + 'px' }}>
              关于我们
            </div>
            <div
              className="sj"
              style={{
                marginTop: 20 * scal + 'px',
                fontSize: 24 * scal + 'px'
              }}
            >
              以专业视角，应对各种复杂需求
              <div style={{ marginTop: 20 * scal + 'px' }}>
                业务电话：400-651-0001
              </div>
            </div>
          </div>
        </div>
        <div
          className="content"
          style={{
            padding: `${92 * scal}px ${360 * scal}px ${110 * scal}px`
          }}
        >
          <img src={bg} alt="" className="bg" />
          <div className="msg">
            <div
              className="title"
              style={{
                fontSize: 24 * scal + 'px',
                marginBottom: 32 * scal + 'px'
              }}
            >
              关于竭律
            </div>
            {textList.map((item, index) => (
              <p
                key={index}
                style={{
                  fontSize: 16 * scal + 'px',
                  marginBottom: 27 * scal + 'px'
                }}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="num" style={{ marginTop: 53 * scal + 'px' }}>
            <div className="box" style={{ width: 210 * scal + 'px' }}>
              <div
                className="one"
                style={{ fontSize: 56 * scal + 'px', fontWeight: 'bold' }}
              >
                {/* 30,000 */}
                <NumberAnimation
                  targetValue={num.index_litigant}
                  isSplit={true}
                ></NumberAnimation>
              </div>
              <div className="two" style={{ fontSize: 18 * scal + 'px' }}>
                当事人
              </div>
            </div>
            <img
              src={line}
              alt="line"
              className="line"
              style={{ width: 34 * scal + 'px', height: 63 * scal + 'px' }}
            />
            <div className="box">
              <div
                className="one"
                style={{ fontSize: 56 * scal + 'px', fontWeight: 'bold' }}
              >
                <NumberAnimation
                  targetValue={yi}
                  isSplit={false}
                ></NumberAnimation>
                <span
                  style={{ fontSize: 18 * scal + 'px', fontWeight: 'initial' }}
                >
                  亿
                </span>
                <NumberAnimation
                  targetValue={wan}
                  isSplit={false}
                ></NumberAnimation>
                <span
                  style={{ fontSize: 18 * scal + 'px', fontWeight: 'initial' }}
                >
                  余万
                </span>
              </div>
              <div className="two" style={{ fontSize: 18 * scal + 'px' }}>
                挽回经济利益
              </div>
            </div>
            <img
              src={line}
              alt="line"
              className="line"
              style={{ width: 34 * scal + 'px', height: 63 * scal + 'px' }}
            />
            <div className="box">
              <div className="one" style={{ fontSize: 56 * scal + 'px' }}>
                <NumberAnimation
                  targetValue={num.index_lawyer_num}
                  isSplit={true}
                ></NumberAnimation>
              </div>
              <div className="two" style={{ fontSize: 18 * scal + 'px' }}>
                实战律师
              </div>
            </div>
            <img
              src={line}
              alt="line"
              className="line"
              style={{ width: 34 * scal + 'px', height: 63 * scal + 'px' }}
            />
            <div className="box" style={{ marginRight: 100 * scal + 'px' }}>
              <div
                className="one"
                style={{ fontSize: 56 * scal + 'px', fontWeight: 'inherit' }}
              >
                全国
              </div>
              <div className="two" style={{ fontSize: 18 * scal + 'px' }}>
                案件范围
              </div>
            </div>
          </div>

          <div className="img" style={{ marginTop: 73 * scal + 'px' }}>
            <img
              src={png1}
              alt="png1"
              style={{ width: 388 * scal + 'px', height: 250 * scal + 'px' }}
            />
            <img
              src={png2}
              alt="png2"
              style={{ width: 388 * scal + 'px', height: 250 * scal + 'px' }}
            />
            <img
              src={png3}
              alt="png3"
              style={{ width: 388 * scal + 'px', height: 250 * scal + 'px' }}
            />
          </div>
        </div>
        <Footer
          windowWidthValue={props.windowWidthValue}
          onSetState={props.onSetState}
        />
      </div>
      <div className="mobile">
        <Header
          isShow={isShow}
          onSetIsShow={setIsShow}
          state={props.state}
          onSetState={props.onSetState}
        ></Header>
        <div className="zx">
          <img src={zx} alt="" />
          <a href="https://ada.baidu.com/imlp/?imid=b694179300c687ccf883b0fd6be0f2c4#back1705761185685">
            在线咨询
          </a>
        </div>
        <div className="banner" onClick={() => setIsShow(false)}>
          <img src={yd} alt="banner" />
          <div className="aboutText">
            <div className="gy1">关于我们</div>
            <div className="sj">
              以专业视角，应对各种复杂需求
              <div>业务电话：400-651-0001</div>
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
