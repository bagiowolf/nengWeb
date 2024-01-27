import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from './img/banner.png'

import png1 from './img/png1.png'
import png2 from './img/Rectangle.png'
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
import baidu from './img/baidu.png'
import douyin from './img/douyin.png'
import tengxun from './img/tengxun.png'
import xiaohongshu from './img/xiaohongshu.png'
import meituan from './img/meituan.png'
import zx from '../Index/img/zx.png'
import baike from './img/baike.svg'
import douyinicon from './img/douyin.svg'
import meituanIcon from './img/meituan.svg'
import tx from './img/tx.svg'
import xhs from './img/xhs.svg'
import bd from './img/bd.svg'
import ic360 from './img/360.svg'
import sg from './img/sg.svg'
import ks from './img/ks.svg'
import ts from './img/ts.svg'
import cz from './img/cz.svg'
import gp from './img/gp.svg'
import qian from './img/qian.svg'
import yici from './img/yici.svg'
import sf from './img/Rectangle1.png'
import but from './img/Layer 45.png'

const icon = [
  { text: '百科', img: baike, bgc: '#FFBC41' },
  { text: '抖音', img: douyinicon },
  { text: '美团', img: meituanIcon },
  { text: '腾讯视频号', img: tx, bgc: '#199BFF' },
  { text: '小红书', img: xhs },
  { text: '百度', img: bd, bgc: '#306CFF' },
  { text: '360', img: ic360 },
  { text: '搜狗', img: sg },
  { text: '快手', img: ks }
]
const jl = [
  { text: '提升个人品牌形象', img: ts },
  { text: '获取长期稳定案源', img: cz },
  { text: '提升委托成案几率', img: gp },
  { text: '提高委托收费收入', img: qian },
  { text: '一次创建永久存在', img: yici }
]

const anli = [
  { text: '案例一对一推送', img: png4 },
  { text: '无效案源可换', img: png5 },
  { text: '不参与分成', img: png6 },
  { text: '案源转换率高', img: png7 },
  { text: '平台无需入驻费', img: png8 },
  { text: '稳定且收费低', img: png9 }
]
export default function App(props) {
  let scal = props.windowWidthValue / 1920

  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <div className="cooperate">
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
              律师合作
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
        <div className="content" onClick={() => setIsShow(false)}>
          <div
            className="box1"
            style={{ padding: `${80 * scal}px ${360 * scal}px 0` }}
          >
            <div
              className="left"
              style={{
                padding: `${94 * scal}px ${30 * scal}px`,
                width: 600 * scal + 'px'
              }}
            >
              <div
                className="text"
                style={{
                  fontSize: 16 * scal + 'px',
                  width: 500 * scal + 'px'
                }}
              >
                <div
                  className="text"
                  style={{
                    fontSize: 24 * scal + 'px',
                    color: '#4A4A4A',
                    fontWeight: 700,
                    marginBottom: 20 * scal + 'px'
                  }}
                >
                  律师个人品牌
                </div>
                <div
                  style={{
                    color: '#5A5A5A',
                    lineHeight: 30 + 'px',
                    marginBottom: 20 * scal + 'px'
                  }}
                  className=""
                >
                  通过打造律师的全网IP，无论你是创始人律师、合伙人律师或是独立律师我们竭律帮助您打造个人品牌，依靠全网高流量平台快速建立自己的个人品牌知名度，帮您迅速占领法律市场份额，为您在今后的职业生涯中带来更大的自身价值，成就您的法律事业
                </div>
                <div className="gs" style={{ fontSize: 16 * scal + 'px' }}>
                  {icon.map((item, index) => (
                    <div
                      style={{
                        marginBottom: index > 5 ? '' : 22 * scal + 'px'
                      }}
                      key={index}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundColor: item.bgc,
                          width: 25 * scal + 'px',
                          height: 25 * scal + 'px',
                          marginRight: 8 * scal + 'px'
                        }}
                      >
                        <img
                          src={item.img}
                          alt=""
                          style={{
                            width: item.bgc
                              ? 16 * scal + 'px'
                              : 25 * scal + 'px',
                            height: item.bgc
                              ? 16 * scal + 'px'
                              : 25 * scal + 'px'
                          }}
                        />
                      </div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="right">
              <img src={png1} alt="" style={{ height: 525 * scal + 'px' }} />
            </div>
          </div>
          <div className="box2" style={{ padding: `0 ${360 * scal}px 0` }}>
            <div className="left" style={{ width: 600 * scal + 'px' }}>
              <img
                src={png2}
                alt=""
                style={{ height: 530 * scal + 'px', width: 600 * scal + 'px' }}
              />
            </div>
            <div
              className="right"
              style={{
                padding: `${160 * scal}px ${120 * scal}px ${160 * scal}px ${
                  60 * scal
                }px`,
                width: 600 * scal + 'px'
              }}
            >
              <div
                className="text"
                style={{
                  fontSize: 24 * scal + 'px',
                  fontWeight: 700,
                  lineHeight: 36 * scal + 'px',
                  color: '#4A4A4A'
                }}
              >
                建立律师个人品牌优势
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginTop: 10 * scal + 'px'
                }}
                className="jl"
              >
                {jl.map((item, index) => (
                  <div
                    key={index}
                    className="div"
                    style={{
                      fontSize: 16 * scal + 'px',
                      width: 158 * scal + 'px',
                      marginTop: 20 * scal + 'px',
                      lineHeight: 34 * scal + 'px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={item.img}
                      alt=""
                      style={{ marginRight: 10 * scal + 'px' }}
                    />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="box3"
            style={{ height: 290 * scal + 'px', marginTop: 120 * scal + 'px' }}
          >
            <img src={sf} alt="" />
            <div
              style={{ height: '100%', background: '#98B4DE', opacity: 0.7 }}
              className="zz"
            ></div>
            <div
              className="text"
              style={{
                width: 900 * scal + 'px'
              }}
            >
              <div
                className="title"
                style={{
                  fontSize: 50 * scal + 'px',
                  lineHeight: 100 * scal + 'px',
                  color: '#fff'
                  // marginBottom: 25 * scal + 'px'
                }}
              >
                收费案源推送
              </div>
              <div
                className="msg"
                style={{
                  fontSize: 20 * scal + 'px',
                  color: '#fff',
                  lineHeight: 34 * scal + 'px'
                }}
              >
                竭律案源平台提供精准案源，邀请律师线上合作，帮助每一位律师轻松获取高质量案源，从而提高其业务水平和专业形象，从而提高其收入和社会影响力。
              </div>
            </div>
          </div>
          <div
            className="box4"
            style={{
              padding: `${80 * scal}px ${360 * scal}px ${120 * scal}px`
            }}
          >
            <div
              className="title"
              style={{
                fontSize: 50 * scal + 'px',
                lineHeight: 100 * scal + 'px',
                marginBottom: 40 * scal + 'px',
                color: '#4a4a4a'
              }}
            >
              竭律案源平台优势
            </div>
            <div className="msg">
              {anli.map((item, index) => (
                <div
                  className="div"
                  style={{
                    marginBottom: 70 * scal + 'px',
                    color: '#333',
                    fontSize: 16 * scal + 'px',
                    lineHeight: 32 * scal + 'px'
                  }}
                  key={index}
                >
                  <div
                    style={{
                      width: 90 * scal + 'px',
                      height: 90 * scal + 'px',
                      position: 'relative',
                      border: '1px solid #2C69FF',
                      borderRadius: '50%',

                      marginBottom: 15 * scal + 'px'
                    }}
                  >
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: 32 * scal + 'px',
                        height: 32 * scal + 'px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div
            className="box5"
            style={{ padding: `${60 * scal}px 0px ${120 * scal}px` }}
          >
            <div
              className="title"
              style={{
                fontSize: 50 * scal + 'px',
                marginBottom: 40 * scal + 'px',
                lineHeight: 100 * scal + 'px',
                color: '#666'
              }}
            >
              竭律案源平台四大保证
            </div>
            <div className="boxList">
              <div style={{ display: 'flex' }}>
                <div
                  className="left"
                  style={{ width: '50%', height: 400 * scal + 'px' }}
                >
                  <img
                    src={png10}
                    alt=""
                    style={{ height: '100%', width: '100%' }}
                  />
                </div>
                <div
                  className="right"
                  style={{
                    width: '50%',
                    textAlign: 'left',
                    padding: `${60 * scal}px ${80 * scal}px`,
                    boxSizing: 'border-box'
                  }}
                >
                  <div style={{ width: 520 * scal + 'px' }}>
                    <div
                      className="title1"
                      style={{
                        display: 'flex',
                        color: '#2C69FF'
                      }}
                    >
                      <div
                        className="left"
                        style={{ fontSize: 40 * scal + 'px' }}
                      >
                        01.
                      </div>
                      <div
                        className="right"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginLeft: 14 * scal + 'px'
                        }}
                      >
                        <div
                          className="top"
                          style={{
                            fontSize: 24 * scal + 'px',
                            fontWeight: 700,
                            lineHeight: 36 * scal + 'px',
                            marginBottom: 3 * scal + 'px'
                          }}
                        >
                          保证一对一
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            marginLeft: 3 * scal + 'px'
                          }}
                        >
                          <div
                            style={{
                              width: 78 * scal + 'px',
                              height: '1px',
                              background: '#2C69FF',
                              marginRight: 5 * scal + 'px'
                            }}
                          ></div>
                          <div
                            style={{
                              width: 368 * scal + 'px',
                              height: '1px',
                              background: '#E3E3E3'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 16 * scal + 'px',
                        color: '#333',
                        lineHeight: 32 * scal + 'px',
                        marginTop: 20 * scal + 'px'
                      }}
                    >
                      保证案源是一对一，即我们每一条案源只会给到一个律师
                    </div>
                  </div>
                  <div
                    style={{
                      width: 520 * scal + 'px',
                      marginTop: 60 * scal + 'px'
                    }}
                  >
                    <div
                      className="title1"
                      style={{ display: 'flex', color: '#2C69FF' }}
                    >
                      <div
                        className="left"
                        style={{ fontSize: 40 * scal + 'px' }}
                      >
                        02.
                      </div>
                      <div
                        className="right"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginLeft: 14 * scal + 'px'
                        }}
                      >
                        <div
                          className="top"
                          style={{
                            fontSize: 24 * scal + 'px',
                            fontWeight: 700,
                            lineHeight: 36 * scal + 'px',
                            marginBottom: 3 * scal + 'px'
                          }}
                        >
                          保证法律需求
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            marginLeft: 3 * scal + 'px'
                          }}
                        >
                          <div
                            style={{
                              width: 78 * scal + 'px',
                              height: '1px',
                              background: '#2C69FF',
                              marginRight: 5 * scal + 'px'
                            }}
                          ></div>
                          <div
                            style={{
                              width: 368 * scal + 'px',
                              height: '1px',
                              background: '#E3E3E3'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 16 * scal + 'px',
                        color: '#333',
                        lineHeight: 32 * scal + 'px',
                        marginTop: 20 * scal + 'px'
                      }}
                    >
                      保证推荐的每一个案源都是有法律需求的，是我们通过付费的方式当事人自己主动留下的联系方式需要找律师的
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: 60 * scal + 'px' }}>
                <div
                  className="right"
                  style={{
                    width: '50%',
                    textAlign: 'left',
                    padding: `${40 * scal}px 0 ${44 * scal}px ${360 * scal}px`,
                    boxSizing: 'border-box'
                  }}
                >
                  <div style={{ width: 520 * scal + 'px' }}>
                    <div
                      className="title1"
                      style={{
                        display: 'flex',
                        color: '#2C69FF'
                      }}
                    >
                      <div
                        className="left"
                        style={{ fontSize: 40 * scal + 'px' }}
                      >
                        03.
                      </div>
                      <div
                        className="right"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginLeft: 14 * scal + 'px'
                        }}
                      >
                        <div
                          className="top"
                          style={{
                            fontSize: 24 * scal + 'px',
                            fontWeight: 700,
                            lineHeight: 36 * scal + 'px',
                            marginBottom: 3 * scal + 'px'
                          }}
                        >
                          保证时效性
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            marginLeft: 3 * scal + 'px'
                          }}
                        >
                          <div
                            style={{
                              width: 78 * scal + 'px',
                              height: '1px',
                              background: '#2C69FF',
                              marginRight: 5 * scal + 'px'
                            }}
                          ></div>
                          <div
                            style={{
                              width: 368 * scal + 'px',
                              height: '1px',
                              background: '#E3E3E3'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 16 * scal + 'px',
                        color: '#333',
                        lineHeight: 32 * scal + 'px',
                        marginTop: 20 * scal + 'px'
                      }}
                    >
                      保证时效性，及时性，即我们会第一时间把案源推送给到您
                    </div>
                  </div>
                  <div
                    style={{
                      width: 520 * scal + 'px',
                      marginTop: 60 * scal + 'px'
                    }}
                  >
                    <div
                      className="title1"
                      style={{ display: 'flex', color: '#2C69FF' }}
                    >
                      <div
                        className="left"
                        style={{ fontSize: 40 * scal + 'px' }}
                      >
                        04.
                      </div>
                      <div
                        className="right"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginLeft: 14 * scal + 'px'
                        }}
                      >
                        <div
                          className="top"
                          style={{
                            fontSize: 24 * scal + 'px',
                            fontWeight: 700,
                            lineHeight: 36 * scal + 'px',
                            marginBottom: 3 * scal + 'px'
                          }}
                        >
                          保证优质性
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            marginLeft: 3 * scal + 'px'
                          }}
                        >
                          <div
                            style={{
                              width: 78 * scal + 'px',
                              height: '1px',
                              background: '#2C69FF',
                              marginRight: 5 * scal + 'px'
                            }}
                          ></div>
                          <div
                            style={{
                              width: 368 * scal + 'px',
                              height: '1px',
                              background: '#E3E3E3'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 16 * scal + 'px',
                        color: '#333',
                        lineHeight: 32 * scal + 'px',
                        marginTop: 20 * scal + 'px'
                      }}
                    >
                      保证案源的优质性,指的是我们的推广页不会出现免费咨询，不会出现先办案后收费，不胜诉不收费等广告语，明确付费咨询，从而可以过滤一批想免费咨询的当事人
                    </div>
                  </div>
                </div>
                <div
                  className="left"
                  style={{ width: '50%', height: 400 * scal + 'px' }}
                >
                  <img
                    src={png12}
                    alt=""
                    style={{ height: '100%', width: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="box3"
            style={{ height: 290 * scal + 'px', marginTop: 120 * scal + 'px' }}
          >
            <img src={but} alt="" />
            <div
              style={{ height: '100%', background: '#FFFFFF', opacity: 0.85 }}
              className="zz"
            ></div>
            <div
              className="text"
              style={{
                width: 900 * scal + 'px'
              }}
            >
              <div
                className="title"
                style={{
                  fontSize: 50 * scal + 'px',
                  lineHeight: 100 * scal + 'px',
                  color: '#4a4a4a'
                  // marginBottom: 25 * scal + 'px'
                }}
              >
                免费案源推送
              </div>
              <div
                className="msg"
                style={{
                  fontSize: 18 * scal + 'px',
                  color: '#333333',
                  lineHeight: 34 * scal + 'px'
                }}
              >
                竭律案源平台邀请律师线上合作，免费案源推送，每一个城市
                <span style={{ color: '#FF8855', fontSize: 24 * scal + 'px' }}>
                  3
                </span>
                个名额，无需入住费，无需保证金，没成案不收费，无论是刑事案件、民事纠纷、劳务纠纷、债权债务、婚姻家事等案源随时推送，我们还可以根据每一个律师的专业定制案源类型、案源数量、案源地区，实现快捷、高效、稳定的双赢模式，期望您的合作。
              </div>
            </div>
          </div>
        </div>
        <Footer
          windowWidthValue={props.windowWidthValue}
          onSetState={props.onSetState}
        />
      </div>
    </div>
  )
}
