import React, { useEffect, useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from './img/Group 19.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import { post } from '../../utils/api/api'
import dayjs from 'dayjs'

let arr = [
  '法律咨询',
  '信用修复',
  '民事纠纷',
  '刑事案件',
  '企业顾问',
  '律师合作',
  '加盟招商',
  '其他问题'
]

export default function App(props) {
  let scal = props.windowWidthValue / 1920

  useEffect(() => {
    var map = new window.AMap.Map('container', {
      viewMode: '2D', // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D'
      zoom: 22, // 初始化地图层级
      center: [119.942123, 31.72684] // 初始化地图中心点
    })
    let marker = new window.AMap.Marker({
      icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
      position: [119.942123, 31.72684],
      offset: new window.AMap.Pixel(-13, -30)
    })
    marker.setMap(map)
    console.log(map)
  }, [])
  const [isShow, setIsShow] = useState(false)
  const [message_type, setMessage_type] = useState('法律咨询')
  const [content, setContent] = useState('')
  const [messenger_phone, setMessenger_phone] = useState('')
  const save = () => {
    if (!message_type || !content || !messenger_phone) return
    post('create_messages', {
      message_type,
      content,
      messenger_phone,
      source_page: props.sourcePage,
      message_time: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    })
  }
  return (
    <div>
      <div className="ContactUs">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
          windowWidthValue={props.windowWidthValue}
        />
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
              联系我们
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
          style={{ padding: `${80 * scal}px ${360 * scal}px ${100 * scal}px` }}
        >
          <div className="formBox" style={{ width: 1200 * scal + 'px' }}>
            <div
              className="left"
              style={{
                padding: `${25 * scal}px ${30 * scal}px ${30 * scal}px ${
                  12 * scal
                }px`,
                width: '50%'
              }}
            >
              <div className="top" style={{ fontSize: 22 * scal + 'px' }}>
                <img
                  src={png1}
                  alt=""
                  style={{ width: 30 * scal + 'px', height: 30 * scal + 'px' }}
                />
                <span
                  style={{
                    fontSize: 22 * scal + 'px',
                    marginLeft: 10 * scal + 'px'
                  }}
                >
                  请简单描述您的法律问题，以便我们了解情况
                </span>
              </div>
              <div className="form" style={{ marginTop: 20 * scal + 'px' }}>
                <div
                  className="item"
                  style={{ marginBottom: 10 * scal + 'px' }}
                >
                  <div className="left" style={{ fontSize: 16 * scal + 'px' }}>
                    问题类型:
                  </div>
                  <div className="right">
                    <select
                      value={message_type}
                      onChange={(e) => setMessage_type(e.target.value)}
                      style={{
                        width: 454 * scal + 'px',
                        height: 38 * scal + 'px',
                        marginLeft: 10 * scal + 'px'
                      }}
                    >
                      {arr.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div
                  className="item"
                  style={{
                    alignItems: 'flex-start',
                    marginBottom: 10 * scal + 'px'
                  }}
                >
                  <div className="left" style={{ fontSize: 16 * scal + 'px' }}>
                    求助描述:
                  </div>
                  <div className="right" style={{}}>
                    <textarea
                      name=""
                      id=""
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      style={{
                        width: 454 * scal + 'px',
                        height: 116 * scal + 'px',
                        marginLeft: 10 * scal + 'px',
                        padding: 0
                      }}
                    ></textarea>
                  </div>
                </div>
                <div
                  className="item"
                  style={{ marginBottom: 18 * scal + 'px' }}
                >
                  <div className="left" style={{ fontSize: 16 * scal + 'px' }}>
                    联系方式:
                  </div>
                  <div className="right">
                    <input
                      type="text"
                      value={messenger_phone}
                      onChange={(e) => setMessenger_phone(e.target.value)}
                      style={{
                        width: 454 * scal + 'px',
                        height: 38 * scal + 'px',
                        marginLeft: 10 * scal + 'px',
                        padding: 0
                      }}
                    />
                  </div>
                </div>
                <div
                  className="save"
                  onClick={save}
                  style={{
                    width: 217 * scal + 'px',
                    height: 48 * scal + 'px',
                    lineHeight: 48 * scal + 'px',
                    fontSize: 16 * scal + 'px'
                  }}
                >
                  提交问题
                </div>
              </div>
            </div>
            <div
              className="right"
              style={{
                width: '50%',
                padding: `${40 * scal}px ${30 * scal}px ${30 * scal}px`
              }}
            >
              <div
                className="one"
                style={{
                  fontSize: 30 * scal + 'px',
                  lineHeight: 60 * scal + 'px'
                }}
              >
                手机扫码，直接求助律师
              </div>
              <div
                className="two"
                style={{
                  fontSize: 16 * scal + 'px',
                  margin: `${10 * scal}px 0 ${50 * scal}px 0`
                }}
              >
                超过&nbsp;
                <span
                  style={{
                    fontSize: 24 * scal + 'px'
                  }}
                >
                  100+&nbsp;
                </span>
                律师,
                <span
                  style={{
                    fontSize: 24 * scal + 'px'
                  }}
                >
                  &nbsp;24小时&nbsp;
                </span>
                在线,评价
                <span
                  style={{
                    fontSize: 24 * scal + 'px'
                  }}
                >
                  &nbsp;25分钟&nbsp;
                </span>
                回复速度
              </div>
              <div className="three">
                <div className="left">
                  <img
                    src={png2}
                    alt=""
                    style={{
                      width: 150 * scal + 'px',
                      height: 150 * scal + 'px',
                      marginRight: 27.5 * scal + 'px'
                    }}
                  />
                </div>
                <div
                  className="right"
                  style={{
                    fontSize: 16 * scal + 'px',
                    lineHeight: 32 * scal + 'px'
                  }}
                >
                  <div>1.添加我司官方微信公众号</div>
                  <div style={{ margin: `${20 * scal}px 0` }}>
                    2.简诉您的请求问题
                  </div>
                  <div>3.与在线律师一对一解答</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="container" style={{ height: 320 * scal + 'px' }}></div>

        <Footer
          isShow={false}
          windowWidthValue={props.windowWidthValue}
          onSetState={props.onSetState}
        />
      </div>
    </div>
  )
}
