import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import React, { useState } from 'react'
import banner from '../Team/img/banner.png'
import png1 from './img/png1.png'
import Form from '../Form/App'
import zx from '../Index/img/zx.png'
import returnDom from '../../utils/returnDom'
let arr = [
  '<span>李先生150****9116:</span>律师具有协调各个法域的律师团队的领导能力，具有极高情商和沟通能力，善于与客户及对方积极沟通，为客户争取最为有利的结果。',
  '<span>王女士183****9410:</span>很感谢您这样优秀且品德高尚的律师，让我在陪伴孩子方面没有留下遗憾。',
  '<span>张女士122****6101:</span>律师法律功底扎实、逻辑思维清晰，能很好的理解客户的利益诉求，并能高效组织团队，快速提出具有针对性的法律解决方案。',
  '<span>李先生198****9410:</span>当今社会，患者为难找好医生而犯愁，打官司为难遇好律师而担忧。竭能律师和她的团队，就是这样的好律师。',
  '<span>王女士187****6510:</span>当今社会，患者为难找好医生而犯愁，打官司为难遇好律师而担忧。竭能律师和她的团队，就是这样的好律师。',
  '<span>张女士185****1687:</span>在庭前会做充分的准备，在开庭过程中游刃有余，能敏锐地抓住案件的关键点，并做出有力的法庭辩论，是一位完全值得信赖的诉讼律师。',
  '<span>李先生163****1617:</span>说实话，来之前我已经见过好多律师了，对律师也充满着怀疑。但是，您和他们完全不一样，您睿智、果敢、一针见血，我非常佩服。',
  '<span>李女士195****1368:</span>现在终于离婚了，我也是一个自由快乐的人了。谢谢竭能律所，你们就是我最安全的港湾！',
  '<span>贺女士132****1315:</span>功底深厚，法理认知独到。',
  '庭上依法据理，表达清晰，条理分明，反应灵敏，应对从容，抗辩有力，综合效果极佳。',
  '<span>张先生135****1361:</span>专业，睿智，勤勉，谦和之品格与作风给人印象深刻。',
  '<span>柯先生156****1345:</span>责任与使命感更使该青年优秀律师必有无量之远大前程。',
  '<span>李先生132****1347:</span>对于诉讼和仲裁富有经验，在工作中所体现出的对证据资料核查的认真和谨慎态度、逻辑分析的严密性、对法律适用判断的专业性都让我们十分钦佩。',
  '<span>李先生115****2347:</span>拥有过硬的法律专业素质和丰富的法律实践经验，能够准确定位问题焦点，提供稳健的法律应对方案。',
  '<span>王女士165****1347:</span>秉持着认真、负责的专业态度和细致、周到的服务理念，及时、高效地响应客户需求。',
  '<span>李先生150****1551:</span>勤勉尽责的工作态度、对案件全局的整体把控、对细节的一丝不苟以及敏锐的判断力和商业意识令我印象深刻。',
  '<span>李先生180****1315:</span>在案件的处理上具有娴熟的技能及独到的见解，能够迅速有效地理解客户的需求，并迅速形成有效的解决方案，最大限度地维护客户的利益。',
  '<span>李先生180****1331:</span>业务能力、对客户的负责程度、沟通能力及应变能力都值得称赞。',
  '<span>李先生180****1335:</span>在短时间内迅速抽丝剥茧，抓住问题核心，并且制定完备的诉讼策略，提供全方位且高质量的专业法律服务。',
  '<span>李先生180****1361:</span>出色的专业能力，细心周到的考量，令人感到如沐春风。',
  '<span>李先生180****1331:</span>专业功底扎实，擅长策划、沟通、预判，对各种法律风险能够做出快速反应。'
]

function getRandomSixItems() {
  const result = []

  // 生成六个不重复的随机索引
  const randomIndexes = []
  while (randomIndexes.length < 6) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex)
    }
  }

  // 根据随机索引获取对应的数据
  randomIndexes.forEach((index) => {
    result.push(arr[index])
  })

  return result
}
export default function App(props) {
  let scal = props.windowWidthValue / 1920

  const newArr = getRandomSixItems()
  console.log(newArr)
  const [isShow, setIsShow] = useState(false)
  const activeInfo = props.activeInfo
  console.log(activeInfo)
  return (
    <div>
      <div className="PersonalData">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
          windowWidthValue={props.windowWidthValue}
        />
        <div className="zx">
          <img src={zx} alt="" />
          <a href="https://ada.baidu.com/imlp/?imid=b694179300c687ccf883b0fd6be0f2c4#back1705761185685">
            在线咨询
          </a>
        </div>
        <div className="banner" onClick={() => setIsShow(false)}>
          <img
            src={banner}
            alt="banner"
            style={{ height: 340 * scal + 'px' }}
          />
          <div
            className="aboutText"
            style={{ left: 360 * scal + 'px', textAlign: 'left' }}
          >
            <div
              className="gy"
              style={{
                fontSize: 48 * scal + 'px',
                fontWeight: 700,
                height: 72 * scal + 'px',
                lineHeight: 72 * scal + 'px',
                color: '#fff'
              }}
            >
              律师团队
            </div>
            <div
              className="sj"
              style={{
                fontSize: 24 * scal + 'px',
                fontWeight: 400 * scal,
                color: '#fff'
              }}
            >
              <div style={{ margin: `${5 * scal}px 0 ${20 * scal}px` }}>
                以专业视角，应对各种复杂需求
              </div>
              业务电话：400-651-0001
            </div>
          </div>
        </div>
        <div
          className="content"
          onClick={() => setIsShow(false)}
          style={{ padding: `${80 * scal}px ${360 * scal}px` }}
        >
          <div className="info">
            <div
              className="left"
              style={{ width: 190 * scal + 'px', height: 333 * scal + 'px' }}
            >
              <div
                className="img"
                style={{
                  width: 125 * scal + 'px',
                  height: 125 * scal + 'px',
                  margin: `${30 * scal}px 0 ${10 * scal}px 0`
                }}
              >
                <img src={activeInfo.img} alt="" />
              </div>
              <div className="name" style={{ fontSize: 14 * scal + 'px' }}>
                {activeInfo.name}
              </div>
              <div
                className="line"
                style={{ width: 60 * scal + 'px', margin: `${15 * scal}px 0` }}
              ></div>
              <div className="num" style={{ fontSize: 14 * scal + 'px' }}>
                <div>
                  咨询人数：<span>{activeInfo.consultation_num}人</span>
                </div>
                <div>
                  帮助人数：<span>{activeInfo.accepted_num}人</span>
                </div>
              </div>
              <div
                className="zx1"
                style={{
                  fontSize: 16 * scal + 'px',
                  width: 120 * scal + 'px',
                  height: 32 * scal + 'px',
                  lineHeight: 32 * scal + 'px'
                }}
              >
                <a
                  href="https://ada.baidu.com/imlp/?imid=b694179300c687ccf883b0fd6be0f2c4#back1705761185685"
                  style={{ textDecoration: 'none', color: '#184add' }}
                >
                  在线咨询
                </a>
              </div>
            </div>
            <div
              className="right"
              style={{ width: 976 * scal + 'px', marginLeft: 40 * scal + 'px' }}
            >
              <div className="zw">
                <div
                  className="title"
                  style={{
                    fontSize: 38 * scal + 'px',
                    lineHeight: 76 * scal + 'px'
                  }}
                >
                  {activeInfo.name}【{activeInfo.type}】个人资料
                </div>
                <div
                  className="msg"
                  style={{
                    fontSize: 16 * scal + 'px',
                    lineHeight: 20 * scal + 'px'
                  }}
                >
                  {activeInfo.msg}
                </div>
              </div>
              <div className="pj" style={{ marginTop: 50 * scal + 'px' }}>
                <div
                  className="title"
                  style={{
                    fontSize: 38 * scal + 'px',
                    lineHeight: 76 * scal + 'px'
                  }}
                >
                  客户评价
                </div>
                <div
                  className="msg"
                  style={{
                    fontSize: 16 * scal + 'px',
                    lineHeight: 32 * scal + 'px'
                  }}
                >
                  {newArr.map((item, index) => (
                    <div key={index}>{returnDom(item)}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Form
            name={activeInfo.name}
            sourcePage={`律师团队-${activeInfo.name}`}
            windowWidthValue={props.windowWidthValue}
          />
        </div>
        <Footer windowWidthValue={props.windowWidthValue} />
      </div>
    </div>
  )
}
