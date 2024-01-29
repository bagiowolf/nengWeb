import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from '../NewsCenter/img/banner.png'
import returnDom from '../../utils/returnDom'

export default function App(props) {
  let scal = props.windowWidthValue / 1920

  const [isShow, setIsShow] = useState(false)
  const { info } = props
  return (
    <div>
      <div className="newsInfo">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
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
              新闻中心
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
              业务电话：400-652-0001
            </div>
          </div>
        </div>

        <div className="content" onClick={() => setIsShow(false)}>
          <div className="title">{info.title}</div>
          <div className="time">{info.published_at}</div>
          <div className="msg">{returnDom(info.content)}</div>
          <div className="creat">编辑：{info.editor}</div>
        </div>
        <Footer
          onSetState={props.onSetState}
          windowWidthValue={props.windowWidthValue}
        />
      </div>
    </div>
  )
}
