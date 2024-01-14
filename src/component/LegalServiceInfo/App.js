import './App.css'
import React, { useState } from 'react'
import banner from '../../assets/banner.png'

import Header from '../Header/App'
import Footer from '../Footer/App'
import Form from '../Form/App'

import png1 from './img/png1.png'
import png2 from './img/png2.png'
import returnDom from '../../utils/returnDom'

export default function App(props) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className="legalServiceInfo">
      <Header
        state={props.state}
        onSetState={props.onSetState}
        isShow={isShow}
        onSetIsShow={setIsShow}
      />
      <div className="banner" onClick={() => setIsShow(false)}>
        <img src={banner} alt="banner" />
        <div className="aboutText">
          <div className="gy">法律服务</div>
          <div className="sj">
            以专业视角，应对各种复杂需求 业务电话：400-651-0001
          </div>
        </div>
      </div>
      <div className="content" onClick={() => setIsShow(false)}>
        <div className="type">
          <div className="title">{props.info.title}</div>
          <div className="typeBox">
            <div className="left">
              <div className="img">
                <img src={props.info.display_image_path} alt="" />
              </div>
            </div>
            <div className="right">
              <div className="top">
                <img src={png2} alt="" />
                <div className="title">{props.info.title}</div>
              </div>
              <div className="bottom">
                {returnDom(props.info.service_content)}
              </div>
            </div>
          </div>
        </div>
        <Form sourcePage={`法律服务-${props.info.title}`} />
      </div>
      <Footer />
    </div>
  )
}
