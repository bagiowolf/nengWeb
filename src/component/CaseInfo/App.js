import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from '../../assets/banner.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import returnDom from '../../utils/returnDom'

export default function App(props) {
  const [isShow, setIsShow] = useState(false)
  const { info } = props
  return (
    <div>
      <div className="caseInfo">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
        />
        <div className="banner" onClick={() => setIsShow(false)}>
          <img src={banner} alt="banner" />
          <div className="aboutText">
            <div className="gy">成功案例</div>
            <div className="sj">
              以专业视角，应对各种复杂需求 业务电话：400-651-0001
            </div>
          </div>
        </div>

        <div className="content" onClick={() => setIsShow(false)}>
          <div className="title">{info.title}</div>
          <div className="num">
            <div className="time">
              <img src={png1} alt="" />
              <span>{info.published_at}</span>
            </div>
            <div className="sz">
              <img src={png2} alt="" />
              <span>{info.view_count}</span>
            </div>
          </div>
          <div className="msg">{returnDom(info.content)}</div>
          {/* <img src={info.case_image_path} alt="" className="png3" /> */}
        </div>

        <Footer />
      </div>
    </div>
  )
}
