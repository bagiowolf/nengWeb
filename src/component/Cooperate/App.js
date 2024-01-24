import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from '../../assets/banner.png'

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
import baidu from './img/baidu.png'
import douyin from './img/douyin.png'
import tengxun from './img/tengxun.png'
import xiaohongshu from './img/xiaohongshu.png'
import meituan from './img/meituan.png'

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
        <div className="banner" onClick={() => setIsShow(false)}>
          <img src={banner} alt="banner" />
          <div className="aboutText">
            <div className="gy">律师合作</div>
            <div className="sj">
              以专业视角，应对各种复杂需求 业务电话：400-651-0001
            </div>
          </div>
        </div>
        <div className="content" onClick={() => setIsShow(false)}>
          <div className="box1">
            <div
              className="left"
              style={{
                padding: `${75 * scal}px ${60 * scal}px`,
                width: 580 * scal + 'px'
              }}
            >
              <img
                src={png3}
                alt=""
                className="png3"
                style={{ width: 957 * scal + 'px', height: 426 * scal + 'px' }}
              />
              <div
                className="text"
                style={{
                  padding: `${50 * scal}px ${28 * scal}px`,
                  fontSize: 20 * scal + 'px'
                }}
              >
                通过打造律师的全网IP，无论你是创始人律师、合伙人律师或是独立律师我们竭律帮助您打造个人品牌，依靠全网高流量平台快速建立自己的个人品牌知名度，帮您迅速占领法律市场份额，为您在今后的职业生涯中带来更大的自身价值，成就您的法律事业
                <div className="gs" style={{ fontSize: 16 * scal + 'px' }}>
                  <div>
                    <img
                      src={baidu}
                      alt=""
                      style={{ width: 25 * scal + 'px' }}
                    />
                    百科（百度、360、搜狗）
                  </div>
                  <div>
                    <img
                      src={douyin}
                      alt=""
                      style={{ width: 25 * scal + 'px' }}
                    />
                    抖音
                  </div>
                  <div>
                    <img
                      src={meituan}
                      alt=""
                      style={{ width: 25 * scal + 'px' }}
                    />
                    美团
                  </div>
                  <div>
                    <img
                      src={tengxun}
                      alt=""
                      style={{ width: 25 * scal + 'px' }}
                    />
                    腾讯视频号
                  </div>
                  <div>
                    <img
                      src={xiaohongshu}
                      alt=""
                      style={{ width: 25 * scal + 'px' }}
                    />
                    小红书
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div
                className="text"
                style={{
                  fontSize: 50 * scal + 'px',
                  left: 242 * scal + 'px',
                  top: 215 * scal + 'px'
                }}
              >
                律师个人品牌
              </div>
              <img
                src={png1}
                alt=""
                style={{ width: 1339 * scal + 'px', height: 522 * scal + 'px' }}
              />
            </div>
          </div>
          <div className="box2">
            <div className="left">
              <img src={png2} alt="" />
              <div
                className="text"
                style={{
                  left: 70 * scal + 'px',
                  top: 160 * scal + 'px',
                  fontSize: 50 * scal + 'px'
                }}
              >
                <div>建立律师</div>
                <div>个人品牌优势</div>
              </div>
            </div>
            <div className="right">
              <div className="div" style={{ fontSize: 30 * scal + 'px' }}>
                提升个人品牌形象
              </div>
              <div className="div" style={{ fontSize: 30 * scal + 'px' }}>
                获取长期稳定案源
              </div>
              <div className="div" style={{ fontSize: 30 * scal + 'px' }}>
                提升委托成案几率
              </div>
              <div className="div" style={{ fontSize: 30 * scal + 'px' }}>
                提高委托收费收入
              </div>
              <div className="div" style={{ fontSize: 30 * scal + 'px' }}>
                一次创建永久存在
              </div>
            </div>
          </div>
          <div
            className="box3"
            style={{ padding: `${130 * scal}px ${356 * scal}px` }}
          >
            <div
              className="title"
              style={{
                fontSize: 50 * scal + 'px',
                marginBottom: 25 * scal + 'px'
              }}
            >
              收费案源推送
            </div>
            <div
              className="msg"
              style={{
                fontSize: 20 * scal + 'px'
              }}
            >
              竭律案源平台提供精准案源，邀请律师线上合作，帮助每一位律师轻松获取高质量案源，从而提高其业务水平和专业形象，从而提高其收入和社会影响力。
            </div>
          </div>
          <div
            className="box4"
            style={{ padding: `${130 * scal}px ${356 * scal}px` }}
          >
            <div
              className="title"
              style={{
                fontSize: 50 * scal + 'px',
                marginBottom: 47 * scal + 'px'
              }}
            >
              竭律案源平台优势
            </div>
            <div className="msg">
              <div className="top">
                <div
                  className="div"
                  style={{
                    fontSize: 26 * scal + 'px',
                    marginBottom: 70 * scal + 'px',
                    paddingLeft: 30 * scal + 'px'
                  }}
                >
                  <img
                    src={png4}
                    alt=""
                    style={{
                      width: 32 * scal + 'px',
                      height: 32 * scal + 'px'
                    }}
                  />
                  案例一对一推送
                </div>
                <div
                  className="div"
                  style={{
                    fontSize: 26 * scal + 'px',
                    marginBottom: 70 * scal + 'px',
                    paddingLeft: 30 * scal + 'px'
                  }}
                >
                  <img
                    src={png5}
                    alt=""
                    style={{
                      width: 32 * scal + 'px',
                      height: 32 * scal + 'px'
                    }}
                  />
                  无效案源可换
                </div>
                <div
                  className="div"
                  style={{
                    fontSize: 26 * scal + 'px',
                    marginBottom: 70 * scal + 'px',
                    paddingLeft: 30 * scal + 'px'
                  }}
                >
                  <img
                    src={png6}
                    alt=""
                    style={{
                      width: 32 * scal + 'px',
                      height: 32 * scal + 'px'
                    }}
                  />
                  不参与分成
                </div>
              </div>
              <div className="bottom">
                <div
                  className="div"
                  style={{
                    fontSize: 26 * scal + 'px',
                    marginBottom: 70 * scal + 'px',
                    paddingLeft: 30 * scal + 'px'
                  }}
                >
                  <img
                    src={png7}
                    alt=""
                    style={{
                      width: 32 * scal + 'px',
                      height: 32 * scal + 'px'
                    }}
                  />
                  案源转换率高
                </div>
                <div
                  className="div"
                  style={{
                    fontSize: 26 * scal + 'px',
                    marginBottom: 70 * scal + 'px',
                    paddingLeft: 30 * scal + 'px'
                  }}
                >
                  <img
                    src={png8}
                    alt=""
                    style={{
                      width: 32 * scal + 'px',
                      height: 32 * scal + 'px'
                    }}
                  />
                  平台无需入驻费
                </div>
                <div
                  className="div"
                  style={{
                    fontSize: 26 * scal + 'px',
                    marginBottom: 70 * scal + 'px',
                    paddingLeft: 30 * scal + 'px'
                  }}
                >
                  <img
                    src={png9}
                    alt=""
                    style={{
                      width: 32 * scal + 'px',
                      height: 32 * scal + 'px'
                    }}
                  />
                  稳定且收费低
                </div>
              </div>
            </div>
          </div>
          <div className="box5" style={{ padding: `0 ${140 * scal}px` }}>
            <div
              className="title"
              style={{
                fontSize: 50 * scal + 'px',
                marginBottom: 25 * scal + 'px'
              }}
            >
              竭律案源平台四大保证
            </div>
            <div className="boxList">
              <div className="box">
                <img
                  src={png10}
                  alt=""
                  style={{
                    width: 380 * scal + 'px',
                    height: 380 * scal + 'px'
                  }}
                />
                <div
                  className="text"
                  style={{
                    height: 120 * scal + 'px',
                    fontSize: 20 * scal + 'px',
                    padding: `${27 * scal}px ${20 * scal}px`
                  }}
                >
                  保证案源是一对一，即我们每一条案源只会给到一个律师
                </div>
              </div>
              <div className="box">
                <img
                  src={png11}
                  alt=""
                  style={{
                    width: 380 * scal + 'px',
                    height: 380 * scal + 'px'
                  }}
                />
                <div
                  className="text"
                  style={{
                    height: 120 * scal + 'px',
                    fontSize: 20 * scal + 'px',
                    padding: `${27 * scal}px ${20 * scal}px`
                  }}
                >
                  保证推荐的每一个案源都是有法律需求的，是我们通过付费的方式当事人自己主动留下的联系方式需要找律师的
                </div>
              </div>
              <div className="box">
                <img
                  src={png12}
                  alt=""
                  style={{
                    width: 380 * scal + 'px',
                    height: 380 * scal + 'px'
                  }}
                />
                <div
                  className="text"
                  style={{
                    height: 120 * scal + 'px',
                    fontSize: 20 * scal + 'px',
                    padding: `${27 * scal}px ${20 * scal}px`
                  }}
                >
                  保证时效性，及时性，即我们会第一时间把案源推送给到您
                </div>
              </div>
              <div className="box">
                <img
                  src={png13}
                  alt=""
                  style={{
                    width: 380 * scal + 'px',
                    height: 380 * scal + 'px'
                  }}
                />
                <div
                  className="text"
                  style={{
                    height: 120 * scal + 'px',
                    fontSize: 20 * scal + 'px',
                    padding: `${27 * scal}px ${20 * scal}px`
                  }}
                >
                  保证案源的优质性,指的是我们的推广页不会出现免费咨询，不会出现先办案后收费，不胜诉不收费等广告语，明确付费咨询，从而可以过滤一批想免费咨询的当事人
                </div>
              </div>
            </div>
          </div>

          <div
            className="box3"
            style={{ padding: `${130 * scal}px ${356 * scal}px` }}
          >
            <div
              className="title"
              style={{
                fontSize: 50 * scal + 'px',
                marginBottom: 25 * scal + 'px'
              }}
            >
              免费案源推送
            </div>
            <div
              className="msg"
              style={{
                fontSize: 20 * scal + 'px'
              }}
            >
              竭律案源平台邀请律师线上合作，免费案源推送，每一个城市3个名额，无需入住费，无需保证金，没成案不收费，无论是刑事案件、民事纠纷、劳务纠纷、债权债务、婚姻家事等案源随时推送，我们还可以根据每一个律师的专业定制案源类型、案源数量、案源地区，实现快捷、高效、稳定的双赢模式，期望您的合作。
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
