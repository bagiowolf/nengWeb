import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from '../../assets/banner.png'
import returnDom from '../../utils/returnDom'

export default function App(props) {
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
          <img src={banner} alt="banner" />
          <div className="aboutText">
            <div className="gy">新闻中心</div>
            <div className="sj">
              以专业视角，应对各种复杂需求 业务电话：400-651-0001
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
