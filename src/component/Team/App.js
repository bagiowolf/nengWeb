import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from './img/banner.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import png4 from './img/png4.png'
import png5 from './img/png5.png'
import png6 from './img/png6.png'
import png7 from './img/png7.png'
import PersonalData from '../PersonalData/App'
import Form from '../Form/App'
import zx from '../Index/img/zx.png'

let big = {
  name: '王玉',
  type: '执业律师',
  img: png1,
  msg: `擅长：婚姻家事，民商事纠纷，交通事故纠纷，刑事辩护等
介绍：有多年的律师执业经验及法学理论功底，能够娴熟运用法律规定和法理精神处理复杂、疑难的法律实务问题，由于办事作风沉稳干练，对客户永远保持认真的态度，曾获得当事人和顾问单位的好评，将继续竭尽所能为当事人争取合法利益！
执业理念：坚守“专业专注，勤勉尽责”！`,
  consultation_num: 12355 * 5,
  accepted_num: 12355
}
let arr = [
  {
    name: '王飞',
    type: '执业律师',
    img: png2,
    msg: `擅长：刑事辩护、知识产权案件、交通事故、合同纠纷、民间借贷、婚姻家事等各类民商事案件等。
    介绍：从事法律实务多年，办案经验丰富，执业中坚持以“热情服务、司法为民”为宗旨，本着把当事人合法权益放在首位的原则，认真负责的完成当事人交办的每一起案件，运用自身掌握的法律知识全心全意为当事人服务，争取当事人合法利益最大化。
    执业理念：坚持“法律至尊，百姓为上”！`,
    consultation_num: 12055 * 5,
    accepted_num: 12055
  },
  {
    name: '宋磊',
    type: '执业律师',
    img: png3,
    msg: `擅长：交通事故、合同纠纷、民间借贷、婚姻家事等各类民商事案件及刑事辩护等。
    介绍：东南大学法学本科，中共党员，江苏省律师协会会员，常州市东头村社区特邀法律咨询团，2008年起从事法律服务工作，具有丰富的法律服务实践经验，办案细致严谨，精益求精！
    执业理念：“敬律师之业，行仁义之德，事辛苦之力，求法律之公”！`,
    consultation_num: 11555 * 5,
    accepted_num: 11555
  },
  {
    name: '承科伟',
    type: '执业律师',
    img: png4,
    msg: `擅长：债权债务、劳动纠纷、婚姻家庭、刑事辩护、交通事故等
    在办案中，坚持公平正义在精神，秉持诚信执业理念，恪守律师职业道德，不吹嘘、不虚假承诺，认真、踏实为当事人办实事，极大程度的维护当事人的合法权益，以高度的责任心获得众多当事人好评。
    执业理念：“以事实为依据，以法律为准绳”！`,
    consultation_num: 10555 * 5,
    accepted_num: 10555
  },
  {
    name: '张鸿',
    type: '执业律师',
    img: png5,
    msg: `擅长：合同纠纷、劳动争议、道路交通事故损害赔偿纠纷、婚姻家庭继承纠纷及公司法律实务等
    介绍：竭尽所能致力于维护当事人的合法权益，细心严谨的办案风格及优良效果受到的委托人人的广泛好评， 言之必行，行之必果，尽心尽责，只为提供最专业的法律服务。
    执业理念：“高效、专业、公正、诚信”！`,
    consultation_num: 9510 * 5,
    accepted_num: 9510
  },
  {
    name: '黄怡君',
    type: '执业律师',
    img: png6,
    msg: `擅长：合同纠纷、婚姻家事，民商事纠纷，交通事故纠纷等
    南京大学法学本科，真诚待人，用心做事，牢固的法律知识和丰富的工作经验为基础，运用法律武器维护当事人的合法权利，给当事人和企业客户提供最佳法律解决方案。
    执业理念：“受人之托，忠人之事”！`,
    consultation_num: 8944 * 5,
    accepted_num: 8944
  },
  {
    name: '吴晶',
    type: '执业律师',
    img: png7,
    msg: `擅长：劳动争议、婚姻家事，民商事纠纷，合同纠纷等
    在办案中工作细致入微、深入浅出，让人如沐春风，其认真负责、精益求精的工作态度得到当事人一致好评。成功处理过多起婚姻家事、交通事故、合同纠纷、侵权类纠纷案件，维护了当事人合法权益，减少当事人经济损失，效果良好。
 
 执业理念是做有思想的律师，让法治成为信仰。`,
    consultation_num: 7984 * 5,
    accepted_num: 7984
  }
]

export default function App(props) {
  let scal = props.windowWidthValue / 1920

  const [isShow, setIsShow] = useState(false)
  const [state, setState] = useState(true)
  const [activeInfo, setActiveInfo] = useState({})

  const setActiveFun = (info) => {
    setState(false)
    setActiveInfo(info)
  }
  return (
    <div>
      {state && (
        <div>
          <div className="team">
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
              style={{
                padding: `${30 * scal}px ${360 * scal}px ${60 * scal}px`
              }}
            >
              <div className="big" style={{ marginBottom: 30 * scal + 'px' }}>
                <div
                  className="left"
                  style={{
                    width: 290 * scal + 'px',
                    height: 310 * scal + 'px'
                  }}
                >
                  <div
                    className="img"
                    style={{
                      width: 125 * scal + 'px',
                      height: 125 * scal + 'px'
                    }}
                  >
                    <img src={png1} alt="" />
                  </div>
                  <div
                    className="btn"
                    onClick={() => setActiveFun(big)}
                    style={{ width: 120 * scal + 'px' }}
                  >
                    立即预约
                  </div>
                  <div className="info" onClick={() => setActiveFun(big)}>
                    查看详情
                  </div>
                </div>
                <div
                  className="right"
                  style={{
                    width: 907 * scal + 'px',
                    padding: `${20 * scal}px ${50 * scal}px`
                  }}
                >
                  <div className="name" style={{ fontSize: 24 * scal + 'px' }}>
                    {big.name}【{big.type}】
                  </div>
                  <div className="line"></div>
                  <div
                    className="msg"
                    style={{ fontSize: 18 * scal + 'px' }}
                    title={big.msg}
                  >
                    <span>擅长：{big.msg}</span>
                    <div className="num">
                      咨询人数:
                      <span className="bool">{big.consultation_num}人</span>
                      帮助人数:
                      <span className="bool">{big.accepted_num}人</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm">
                {arr.map((item, index) => (
                  <div className="boxList" key={index}>
                    <div
                      className="left"
                      style={{
                        width: 290 * scal + 'px',
                        height: 310 * scal + 'px'
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          width: 125 * scal + 'px',
                          height: 125 * scal + 'px'
                        }}
                      >
                        <img src={item.img} alt="" />
                      </div>
                      <div
                        className="btn"
                        onClick={() => setActiveFun(item)}
                        style={{ width: 120 * scal + 'px' }}
                      >
                        立即预约
                      </div>
                      <div className="info" onClick={() => setActiveFun(item)}>
                        查看详情
                      </div>
                    </div>
                    <div
                      className="right"
                      style={{
                        width: 285 * scal + 'px',
                        padding: `${20 * scal}px ${50 * scal}px`
                      }}
                    >
                      <div
                        className="name"
                        style={{ fontSize: 24 * scal + 'px' }}
                      >
                        {item.name} 【{item.type}】
                      </div>
                      <div
                        className="line"
                        style={{
                          width: 60 * scal + 'px',
                          margin: `${25 * scal}px 0`
                        }}
                      ></div>
                      <div
                        className="msg"
                        style={{
                          fontSize: 18 * scal + 'px',
                          lineHeight: 28 * scal + 'px'
                        }}
                        title={item.msg}
                      >
                        <span>{item.msg}</span>
                        <div className="num">
                          <div>
                            咨询人数:
                            <span className="bool">
                              {item.consultation_num}人
                            </span>
                          </div>
                          <div>
                            帮助人数:
                            <span className="bool">{item.accepted_num}人</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Form
                sourcePage="律师团队"
                windowWidthValue={props.windowWidthValue}
              />
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
            />
            <div className="banner" onClick={() => setIsShow(false)}>
              <img src={banner} alt="banner" />
              <div className="aboutText">
                <div className="gy">律师团队</div>
                <div className="sj">
                  <div>以专业视角，应对各种复杂需求 </div>
                  业务电话：400-651-0001
                </div>
              </div>
            </div>
            <div className="content" onClick={() => setIsShow(false)}>
              <div className="sm">
                <div className="boxList">
                  <div className="left">
                    <div className="img">
                      <img src={png1} alt="" />
                    </div>
                    <div className="btnBox">
                      <div className="btn" onClick={() => setActiveFun(big)}>
                        立即预约
                      </div>
                      <div className="info" onClick={() => setActiveFun(big)}>
                        查看详情
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="name">
                      {big.name} 【{big.type}】
                    </div>
                    <div className="line"></div>
                    <div className="msg">
                      <span>{big.msg}</span>
                      <div className="num">
                        <div>
                          帮助人数:
                          <span className="bool">{big.consultation_num}人</span>
                        </div>
                        <div>
                          咨询人数:
                          <span className="bool">{big.accepted_num}人</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {arr.map((item, index) => (
                  <div className="boxList" key={index}>
                    <div className="left">
                      <div className="img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="btnBox">
                        <div className="btn" onClick={() => setActiveFun(item)}>
                          立即预约
                        </div>
                        <div
                          className="info"
                          onClick={() => setActiveFun(item)}
                        >
                          查看详情
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="name">
                        {item.name} 【{item.type}】
                      </div>
                      <div className="line"></div>
                      <div className="msg">
                        <span>{item.msg}</span>
                        <div className="num">
                          <div>
                            帮助人数:<span className="bool">1236人</span>
                          </div>
                          <div>
                            咨询人数:<span className="bool">1456人</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Form sourcePage="律师团队" />
            </div>
            <Footer windowWidthValue={props.windowWidthValue} />
          </div>
        </div>
      )}
      {!state && (
        <PersonalData
          state={props.state}
          onSetState={props.onSetState}
          activeInfo={activeInfo}
          windowWidthValue={props.windowWidthValue}
        />
      )}
    </div>
  )
}
