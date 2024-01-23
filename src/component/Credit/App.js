import React, { useState } from 'react'
import Header from '../Header/App'
import banner from './img/banner.png'
import './App.css'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import png4 from './img/png4.png'
import png5 from './img/png5.png'
import png6 from './img/png6.png'
import png7 from './img/png7.png'
import png8 from './img/png8.png'
import png9 from './img/png9.png'
import png10 from './img/png10.png'
import png11 from './img/png11.png'
import png12 from './img/png12.png'
import png13 from './img/png13.png'
import text1 from './img/1.svg'
import text2 from './img/2.svg'
import text3 from './img/3.svg'
import text4 from './img/4.svg'
import yuan from './img/yuan.png'
import blueLine from './img/blueLine.png'
import Footer from '../Footer/App'
import logo from '../../assets/logo.svg'
import left from './img/left.svg'
import right from './img/right.svg'

let arr = {
  gf: [
    {
      name: '国家企业信用信息公示系统',
      url: 'National Enterprise Credit Information Publicity System'
    },
    {
      name: '中国市场监管行政处罚文书网',
      url: 'China Market Supervision Administrative Penalty Document Network'
    },
    {
      name: '中国执行信息公开网',
      url: 'China Executive Information Disclosure Network'
    },
    {
      name: '信用中国',
      url: 'www.creditchina.gov.cn'
    },
    {
      name: '中国裁判文书网',
      url: 'China  Judgements  Online'
    }
  ],
  pt: [
    { name: '天眼查', url: 'TianYanCha.com' },
    { name: '爱企查', url: 'AiQiCha.com' },
    { name: '启信宝', url: 'QiXin.com' },
    { name: '企查查', url: 'Qcc.com' },
    { name: '水滴信用', url: 'ShuiDi Credit' }
  ]
}
let song = [
  {
    name: '法律诉讼',
    msg: '司法案件、风险关系、被执行人、裁判文书、法院公告、开庭公告、案前调解',
    url: text1
  },
  {
    name: '经营风险',
    msg: '债权/债务、合同违约、合作风险、行政处罚、环保处罚、欠费公告',
    url: text2
  },
  {
    name: '历史信息',
    msg: '历史环保处罚、历史欠税公告、历史失信信息、历史司法案件、历史限高消费、历史裁判文书、历史股权出质、历史股权冻结',
    url: text3
  },
  { name: '个人信用', msg: '信用卡解冻', url: text4 }
]

export default function App(props) {
  let scal = props.windowWidthValue / 1920

  const [isShow, setIsShow] = useState(false)

  return (
    <div>
      <div className="credit">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          windowWidthValue={props.windowWidthValue}
        />
        <div className="banner">
          <img src={banner} alt="banner" />
          <div
            className="aboutText"
            style={{ left: 360 * scal + 'px', top: 82 * scal + 'px' }}
          >
            <img
              src={logo}
              alt=""
              style={{ height: 32 * scal + 'px', width: 284 * scal + 'px' }}
            />
            <div
              className="gy"
              style={{
                fontSize: 48 * scal + 'px',
                fontWeight: 700 * scal,
                height: 72 * scal + 'px',
                lineHeight: 72 * scal + 'px',
                margin: `${15 * scal}px 0`
              }}
            >
              信用修复
            </div>
            <div className="sj">
              <div
                style={{
                  width: 100 * scal + 'px',
                  height: 40 * scal + 'px',
                  lineHeight: 40 * scal + 'px',
                  fontSize: 18 * scal + 'px',
                  marginRight: 15 * scal + 'px'
                }}
              >
                司法案件
              </div>
              <div
                style={{
                  width: 100 * scal + 'px',
                  height: 40 * scal + 'px',
                  lineHeight: 40 * scal + 'px',
                  fontSize: 18 * scal + 'px',
                  marginRight: 15 * scal + 'px'
                }}
              >
                欠税公告
              </div>
              <div
                style={{
                  width: 100 * scal + 'px',
                  height: 40 * scal + 'px',
                  lineHeight: 40 * scal + 'px',
                  fontSize: 18 * scal + 'px',
                  marginRight: 15 * scal + 'px'
                }}
              >
                行政处罚
              </div>
              <div
                style={{
                  width: 100 * scal + 'px',
                  height: 40 * scal + 'px',
                  lineHeight: 40 * scal + 'px',
                  fontSize: 18 * scal + 'px',
                  marginRight: 15 * scal + 'px'
                }}
              >
                个人征信
              </div>
            </div>
          </div>
        </div>
        <div
          className="content"
          style={{
            padding: `${80 * scal}px ${330 * scal}px ${100 * scal}px`
          }}
        >
          <div className="box2">
            <div
              className="title"
              style={{
                fontSize: 50 * scal + 'px',
                height: 100 * scal + 'px',
                lineHeight: 100 * scal + 'px',
                marginBottom: 40 * scal + 'px'
              }}
            >
              您是否正在面临一些问题?
            </div>
            <div className="imgBox">
              <div
                className="block"
                style={{
                  width: 300 * scal + 'px',
                  height: 235 * scal + 'px',
                  fontSize: 27 * scal + 'px'
                }}
              >
                <img src={png1} alt="" />
              </div>
              <div
                className="block"
                style={{
                  width: 300 * scal + 'px',
                  height: 235 * scal + 'px',
                  fontSize: 27 * scal + 'px'
                }}
              >
                <img
                  src={left}
                  alt=""
                  style={{
                    width: 14 * scal + 'px',
                    height: 14 * scal + 'px',
                    margin: `0 ${15 * scal}px 0 ${30 * scal + 'px'}`
                  }}
                />
                <div style={{ fontSize: 18 * scal + 'px' }}>
                  <div>谈好的生意,</div>
                  <div>却莫名其妙的黄了</div>
                </div>
              </div>
              <div
                className="block"
                style={{
                  width: 300 * scal + 'px',
                  height: 235 * scal + 'px',
                  fontSize: 27 * scal + 'px'
                }}
              >
                <img src={png2} alt="" />
              </div>
              <div
                className="block"
                style={{
                  width: 300 * scal + 'px',
                  height: 235 * scal + 'px',
                  fontSize: 27 * scal + 'px'
                }}
              >
                <img
                  src={left}
                  alt=""
                  style={{
                    width: 14 * scal + 'px',
                    height: 14 * scal + 'px',
                    margin: `0 ${15 * scal}px 0 ${30 * scal + 'px'}`
                  }}
                />
                <div style={{ fontSize: 18 * scal + 'px' }}>
                  <div>参加项目投标,</div>
                  <div>还没竞标就被刷掉了......</div>
                </div>
              </div>
              <div
                className="block "
                style={{
                  width: 300 * scal + 'px',
                  height: 235 * scal + 'px',
                  fontSize: 27 * scal + 'px',
                  justifyContent: 'flex-end',
                  textAlign: 'right'
                }}
              >
                <div style={{ fontSize: 18 * scal + 'px' }}>
                  <div className="p0">向银行贷款,</div>
                  <div className="p0">也被无情拒绝</div>
                </div>
                <img
                  src={right}
                  alt=""
                  style={{
                    width: 14 * scal + 'px',
                    height: 14 * scal + 'px',
                    margin: `0 ${30 * scal}px 0 ${15 * scal + 'px'}`
                  }}
                />
              </div>
              <div
                className="block"
                style={{
                  width: 300 * scal + 'px',
                  height: 235 * scal + 'px',
                  fontSize: 27 * scal + 'px'
                }}
              >
                <img src={png3} alt="" />
              </div>
              <div
                className="block"
                style={{
                  width: 300 * scal + 'px',
                  height: 235 * scal + 'px',
                  fontSize: 27 * scal + 'px',
                  justifyContent: 'flex-end',
                  textAlign: 'right'
                }}
              >
                <div style={{ fontSize: 18 * scal + 'px' }}>
                  <div>突然被告知,</div>
                  <div>自己的银行卡,</div>
                  <div>涉嫌找被冻结......</div>
                </div>
                <img
                  src={right}
                  alt=""
                  style={{
                    width: 14 * scal + 'px',
                    height: 14 * scal + 'px',
                    margin: `0 ${30 * scal}px 0 ${15 * scal + 'px'}`
                  }}
                />
              </div>
              <div
                className="block"
                style={{
                  width: 300 * scal + 'px',
                  height: 235 * scal + 'px',
                  fontSize: 27 * scal + 'px'
                }}
              >
                <img src={png4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="box3"
          style={{ padding: `${60 * scal}px ${350 * scal}px ${80 * scal}px` }}
        >
          <div
            className="title"
            style={{
              fontSize: 50 * scal + 'px',
              height: 100 * scal + 'px',
              lineHeight: 100 * scal + 'px',
              marginBottom: 40 * scal + 'px'
            }}
          >
            修复信用的重要性
          </div>
          <div className="textArte" style={{ fontSize: 18 * scal + 'px' }}>
            <div className="left" style={{ width: 833 * scal + 'px' }}>
              <p style={{ lineHeight: 34 * scal + 'px' }}>
                信息时代的今天，企业或个人的信息几乎公开透明，随时可以被查阅调取。其中，企业或个人的“信用”更是成为社会的通行证，一旦出现瑕疵，将受到巨大的损失或影响：
              </p>
              <p
                style={{
                  marginTop: 20 * scal + 'px',
                  lineHeight: 34 * scal + 'px'
                }}
              >
                <div
                  className="tit"
                  style={{
                    fontSize: 20 * scal + 'px',

                    // paddingLeft: 10 * scal + 'px',
                    marginBottom: 6 * scal + 'px'
                  }}
                >
                  <span
                    className="line"
                    style={{
                      marginRight: 10 * scal + 'px',
                      width: 6 * scal + 'px',
                      height: 20 * scal + 'px'
                    }}
                  ></span>{' '}
                  作为企业
                </div>
                <span style={{ marginLeft: 16 * scal + 'px' }}>
                  将在以后的经营中将举步维艰，四处碰壁，如贷款，招投标，上市，业务往来等等都将受限制。
                </span>
              </p>
              <p
                style={{
                  marginTop: 20 * scal + 'px',
                  lineHeight: 34 * scal + 'px'
                }}
              >
                <div
                  className="tit"
                  style={{
                    fontSize: 20 * scal + 'px',

                    // paddingLeft: 10 * scal + 'px',
                    marginBottom: 6 * scal + 'px'
                  }}
                >
                  <span
                    className="line"
                    style={{
                      marginRight: 10 * scal + 'px',
                      width: 6 * scal + 'px',
                      height: 20 * scal + 'px'
                    }}
                  ></span>{' '}
                  作为个人
                </div>
                <span style={{ marginLeft: 16 * scal + 'px' }}>
                  安分守法却突然发现，因被有关部门认定为涉嫌诈骗或存在风险而冻结银行账户，甚至惹上官司。
                </span>
              </p>
              <p
                style={{
                  marginTop: 20 * scal + 'px',
                  lineHeight: 34 * scal + 'px'
                }}
              >
                修复信用，可以帮助企业或个人及时发现问题并纠正，消除不良信用记录，让企业或个人重新参与正常的生产经营和社会活动，享有平等的商业竞争，政府福利，社会荣誉以及个人权益。
              </p>
            </div>
            <div
              className="right"
              style={{
                width: 360 * scal + 'px',
                height: 360 * scal + 'px',
                marginLeft: 65 * scal + 'px'
              }}
            >
              <img
                src={png5}
                alt=""
                style={{ width: 196 * scal + 'px', height: 173 * scal + 'px' }}
              />
            </div>
          </div>
        </div>
        <div
          className="box4"
          style={{ padding: `${80 * scal}px ${360 * scal}px ${255 * scal}px` }}
        >
          <div
            className="title"
            style={{
              fontSize: 50 * scal + 'px',
              height: 100 * scal + 'px',
              lineHeight: 100 * scal + 'px',
              marginBottom: 40 * scal + 'px'
            }}
          >
            修复信用的法律依据
          </div>
          <div
            className="textArte"
            style={{ width: 1200 * scal + 'px', height: 410 * scal + 'px' }}
          >
            <img
              src={png7}
              alt=""
              className="png7"
              style={{ width: 1200 * scal + 'px', height: 410 * scal + 'px' }}
            />
            <img
              src={png6}
              alt=""
              className="png6"
              style={{
                right: 0 * scal + 'px',
                width: 640 * scal + 'px',
                height: 330 * scal + 'px',
                top: 155 * scal + 'px'
              }}
            />
            <div
              className="text1"
              style={{
                fontSize: 16 * scal + 'px',
                width: 520 * scal + 'px',
                lineHeight: 34 * scal + 'px',
                marginLeft: 32 * scal + 'px'
              }}
            >
              <div>中华人民共和国行政处罚法、</div>
              <div>企业信息公示暂行条例（国务院令第654号令）、</div>
              <div>国家企业信用信息公示系统使用运行管理办法（试行）、</div>
              <div>国家市场监督管理局行政处罚程序暂行规定、</div>
              <div>
                市场监督管理行政处罚信息公示规定（总局45号令2021.9.1实施）、
              </div>
              <div>
                市场监督管理严重违法失信名单管理办法（总局44号令2021.9.1实施）、
              </div>
              <div>市场监督管理信用修复管理办法及解读、</div>
              <div>
                地方性社会信用条例（如河北省社会信用条例、天津市社会信用条例、山东省社会信用条例......）
              </div>
            </div>
          </div>
        </div>
        <div
          className="box5"
          style={{ padding: `1px ${360 * scal}px ${90 * scal}px` }}
        >
          <div
            className="title"
            style={{
              fontSize: 50 * scal + 'px',
              height: 100 * scal + 'px',
              lineHeight: 100 * scal + 'px',
              marginBottom: 25 * scal + 'px',
              marginTop: 56 * scal + 'px'
            }}
          >
            可修复平台
          </div>
          <img src={png8} alt="" className="png8" />
          <div
            className="textArte"
            style={{ padding: `${50 * scal}px ${30 * scal}px` }}
          >
            <div>
              <div
                className="title1"
                style={{
                  fontSize: 24 * scal + 'px',
                  marginBottom: 30 * scal + 'px'
                }}
              >
                <span
                  style={{
                    width: 5 * scal + 'px',
                    height: 26 * scal + 'px',
                    marginRight: 10 * scal + 'px',
                    background: '#2B68FF',
                    display: 'inline-block'
                  }}
                ></span>{' '}
                官方平台
              </div>
              <div className="gf">
                {arr.gf.map((item, index) => (
                  <div className="gf1" key={index}>
                    <div className="left">
                      <img
                        src={png9}
                        alt=""
                        style={{ width: 50 * scal + 'px' }}
                      />
                    </div>
                    <div className="right">
                      <div
                        className="name"
                        style={{ fontSize: 20 * scal + 'px' }}
                      >
                        {item.name}
                      </div>
                      <div
                        className="url"
                        style={{ fontSize: 12 * scal + 'px' }}
                      >
                        {item.url}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                className="title1"
                style={{
                  fontSize: 24 * scal + 'px',
                  marginBottom: 30 * scal + 'px'
                }}
              >
                <span
                  style={{
                    width: 5 * scal + 'px',
                    height: 26 * scal + 'px',
                    marginRight: 10 * scal + 'px',
                    background: '#2B68FF',
                    display: 'inline-block'
                  }}
                ></span>{' '}
                第三方平台
              </div>
              <div className="gf">
                {arr.pt.map((item, index) => (
                  <div className="gf1" key={index}>
                    <div className="left">
                      <img
                        src={png10}
                        alt=""
                        style={{ width: 45 * scal + 'px' }}
                      />
                    </div>
                    <div className="right">
                      <div
                        className="name"
                        style={{ fontSize: 20 * scal + 'px' }}
                      >
                        {item.name}
                      </div>
                      <div
                        className="url"
                        style={{ fontSize: 12 * scal + 'px' }}
                      >
                        {item.url}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="box6"
          style={{
            padding: `${88 * scal}px 0 ${110 * scal}px ${0 * scal}px`
          }}
        >
          <img
            src={png11}
            alt=""
            className="png11"
            style={{ width: 1600 * scal + 'px', height: 1111 * scal + 'px' }}
          />
          <img
            src={png12}
            alt=""
            className="png12"
            style={{ width: 894 * scal + 'px', bottom: 100 * scal + 'px' }}
          />
          <div
            className="titleLeft"
            style={{
              fontSize: 50 * scal + 'px',
              height: 100 * scal + 'px',
              lineHeight: 100 * scal + 'px',
              marginBottom: 25 * scal + 'px'
            }}
          >
            可修复内容
          </div>
          <div
            className="textArte"
            style={{
              marginTop: 70 * scal + 'px',
              paddingLeft: 360 * scal + 'px'
            }}
          >
            {song.map((item, index) => (
              <div
                className="song"
                key={index}
                style={{ marginBottom: index !== 3 ? 90 * scal + 'px' : '' }}
              >
                <div
                  className="left"
                  style={{
                    width: 155 * scal + 'px',
                    marginRight: 25 * scal + 'px'
                  }}
                >
                  <img
                    src={item.url}
                    alt=""
                    style={{ width: 153 * scal + 'px' }}
                  />
                </div>
                <div className="right" style={{ width: 368 * scal + 'px' }}>
                  <div
                    className="name"
                    style={{ fontSize: 24 * scal + 'px', fontWeight: 500 }}
                  >
                    {item.name}
                  </div>
                  <div
                    className="msg"
                    style={{
                      fontSize: 16 * scal + 'px',
                      lineHeight: 30 * scal + 'px'
                    }}
                  >
                    {item.msg}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="box7"
          style={{
            height: 650 * scal + 'px',
            padding: `${123 * scal}px ${345 * scal}px ${122 * scal}px`
          }}
        >
          <div
            className="title"
            style={{
              fontSize: 50 * scal + 'px',
              height: 100 * scal + 'px',
              lineHeight: 100 * scal + 'px',
              marginBottom: 78 * scal + 'px',
              fontWeight: 400,
              color: '#4A4A4A'
            }}
          >
            修复流程
          </div>
          <img src={png13} alt="" className="png13" />
          <div className="textArte">
            <div className="flowPath">
              <img src={yuan} alt="" style={{ width: 23 * scal + 'px' }} />
              <img src={blueLine} alt="" style={{ width: 138 * scal + 'px' }} />
              <img src={yuan} alt="" style={{ width: 23 * scal + 'px' }} />
              <img src={blueLine} alt="" style={{ width: 138 * scal + 'px' }} />
              <img src={yuan} alt="" style={{ width: 23 * scal + 'px' }} />
              <img src={blueLine} alt="" style={{ width: 138 * scal + 'px' }} />
              <img src={yuan} alt="" style={{ width: 23 * scal + 'px' }} />
              <img src={blueLine} alt="" style={{ width: 138 * scal + 'px' }} />
              <img src={yuan} alt="" style={{ width: 23 * scal + 'px' }} />
              <img src={blueLine} alt="" style={{ width: 138 * scal + 'px' }} />
              <img src={yuan} alt="" style={{ width: 23 * scal + 'px' }} />
              <img src={blueLine} alt="" style={{ width: 138 * scal + 'px' }} />
              <img src={yuan} alt="" style={{ width: 23 * scal + 'px' }} />
              <img src={blueLine} alt="" style={{ width: 138 * scal + 'px' }} />
              <img src={yuan} alt="" style={{ width: 23 * scal + 'px' }} />
            </div>
            <div className="flowText" style={{ marginTop: 50 * scal + 'px' }}>
              <div className="one">
                <div className="step" style={{ fontSize: 42 * scal + 'px' }}>
                  01
                </div>
                <div className="step2" style={{ fontSize: 24 * scal + 'px' }}>
                  咨询沟通
                </div>
              </div>
              <div className="one">
                <div className="step" style={{ fontSize: 42 * scal + 'px' }}>
                  02
                </div>
                <div className="step2" style={{ fontSize: 24 * scal + 'px' }}>
                  企业信用
                </div>
              </div>
              <div className="one">
                <div className="step" style={{ fontSize: 42 * scal + 'px' }}>
                  03
                </div>
                <div className="step2" style={{ fontSize: 24 * scal + 'px' }}>
                  修复范围
                </div>
              </div>
              <div className="one">
                <div className="step" style={{ fontSize: 42 * scal + 'px' }}>
                  04
                </div>
                <div className="step2" style={{ fontSize: 24 * scal + 'px' }}>
                  修复方案
                </div>
              </div>
              <div className="one">
                <div className="step" style={{ fontSize: 42 * scal + 'px' }}>
                  05
                </div>
                <div className="step2" style={{ fontSize: 24 * scal + 'px' }}>
                  修复意向
                </div>
              </div>
              <div className="one">
                <div className="step" style={{ fontSize: 42 * scal + 'px' }}>
                  06
                </div>
                <div className="step2" style={{ fontSize: 24 * scal + 'px' }}>
                  委托资料
                </div>
              </div>
              <div className="one">
                <div className="step" style={{ fontSize: 42 * scal + 'px' }}>
                  07
                </div>
                <div className="step2" style={{ fontSize: 24 * scal + 'px' }}>
                  流程服务
                </div>
              </div>
              <div className="one">
                <div className="step" style={{ fontSize: 42 * scal + 'px' }}>
                  08
                </div>
                <div className="step2" style={{ fontSize: 24 * scal + 'px' }}>
                  修复信用
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ transform: 'translateY(-10px)' }}>
          <Footer
            windowWidthValue={props.windowWidthValue}
            onSetState={props.onSetState}
          />
        </div>
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
            <div className="gy" style={{ marginBottom: '10px' }}>
              信用修复
            </div>
            <div className="sj">
              以专业视角，应对各种复杂需求
              <div style={{ marginBottom: '10px' }}></div>
              业务电话：400-651-0001
            </div>
          </div>
        </div>
        <div className="content" onClick={() => setIsShow(false)}>
          <div className="box2">
            <div className="title" style={{ fontSize: 50 * scal + 'px' }}>
              您是否正在面临一些问题?
            </div>
            <div className="imgBox">
              <div className="block">
                <img src={png1} alt="" />
              </div>
              <div className="block">
                <div>谈好的生意,</div>
                <div>却莫名其妙的黄了</div>
              </div>
              <div className="block">
                <img src={png2} alt="" />
              </div>
              <div className="block">
                <div>参加项目投标,</div>
                <div>还没竞标就被刷掉了......</div>
              </div>
              <div className="block ">
                <div className="p0">向银行贷款,</div>
                <div className="p0">也被无情拒绝</div>
              </div>
              <div className="block">
                <img src={png3} alt="" />
              </div>
              <div className="block">
                <div>突然被告知,</div>
                <div>自己的银行卡,</div>
                <div>涉嫌找被冻结......</div>
              </div>
              <div className="block">
                <img src={png4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="box3" onClick={() => setIsShow(false)}>
          <div className="title" style={{ fontSize: 50 * scal + 'px' }}>
            修复信用的重要性
          </div>
          <div className="textArte">
            <div className="left">
              <p>
                信息时代的今天，企业或个人的信息几乎公开透明，随时可以被查阅调取。其中，企业或个人的“信用”更是成为社会的通行证，一旦出现瑕疵，将受到巨大的损失或影响：
              </p>
              <p>
                ·作为企业，将在以后的经营中将举步维艰，四处碰壁，如贷款，招投标，上市，业务往来等等都将受限制。
              </p>
              <p>
                ·作为个人，安分守法却突然发现，因被有关部门认定为涉嫌诈骗或存在风险而冻结银行账户，甚至惹上官司。
              </p>
              <p>
                修复信用，可以帮助企业或个人及时发现问题并纠正，消除不良信用记录，让企业或个人重新参与正常的生产经营和社会活动，享有平等的商业竞争，政府福利，社会荣誉以及个人权益。
              </p>
            </div>
            <div className="right">
              <img src={png5} alt="" />
            </div>
          </div>
        </div>
        <div className="box4" onClick={() => setIsShow(false)}>
          <div className="title" style={{ fontSize: 50 * scal + 'px' }}>
            修复信用的法律依据
          </div>
          <div className="textArte">
            <div className="text1">
              中华人民共和国行政处罚法、企业信息公示暂行条例（国务院令第654号令）、国家企业信用信息公示系统使用运行管理办法（试行）、国家市场监督管理局行政处罚程序暂行规定、市场监督管理行政处罚信息公示规定（总局45号令2021.9.1实施）、市场监督管理严重违法失信名单管理办法（总局44号令2021.9.1实施）、市场监督管理信用修复管理办法及解读、地方性社会信用条例（如河北省社会信用条例、天津市社会信用条例、山东省社会信用条例......）
            </div>
          </div>
        </div>
        <div className="box5" onClick={() => setIsShow(false)}>
          <div className="title" style={{ fontSize: 50 * scal + 'px' }}>
            可修复平台
          </div>
          <div className="textArte">
            <div>
              <div className="title1">官方平台</div>
              <div className="gf">
                {arr.gf.map((item, index) => (
                  <div className="gf1" key={index}>
                    <div className="left">
                      <img src={png9} alt="" />
                    </div>
                    <div className="right">
                      <div className="name">{item.name}</div>
                      <div className="url">{item.url}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="title1">第三方平台</div>
              <div className="gf">
                {arr.pt.map((item, index) => (
                  <div className="gf2" key={index}>
                    <div className="left">
                      <img src={png10} alt="" />
                    </div>
                    <div className="right">
                      <div className="name">{item.name}</div>
                      <div className="url">{item.url}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="box6">
          <img src={png11} alt="" className="png11" />
          <div className="title" style={{ fontSize: 50 * scal + 'px' }}>
            可修复内容
          </div>
          <div className="textArte">
            {song.map((item, index) => (
              <div className="song" key={index}>
                <div className="left">
                  <img src={item.url} alt="" />
                </div>
                <div className="right">
                  <div className="name">{item.name}</div>
                  <div className="msg">{item.msg}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="box7">
          <div className="title" style={{ fontSize: 50 * scal + 'px' }}>
            修复流程
          </div>
          <div className="textArte">
            <div className="flowText">
              <div className="one">
                <div className="step">01</div>
                <div className="step2">咨询沟通</div>
              </div>
              <div className="one">
                <div className="step">02</div>
                <div className="step2">企业信用</div>
              </div>
              <div className="one">
                <div className="step">03</div>
                <div className="step2">修复范围</div>
              </div>
              <div className="one">
                <div className="step">04</div>
                <div className="step2">修复方案</div>
              </div>
              <div className="one">
                <div className="step">05</div>
                <div className="step2">修复意向</div>
              </div>
              <div className="one">
                <div className="step">06</div>
                <div className="step2">委托资料</div>
              </div>
              <div className="one">
                <div className="step">07</div>
                <div className="step2">流程服务</div>
              </div>
              <div className="one">
                <div className="step">08</div>
                <div className="step2">修复信用</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
