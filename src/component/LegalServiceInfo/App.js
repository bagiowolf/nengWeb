import './App.css'
import React, { useState } from 'react'
import banner from '../LegalService/img/Group 16.png'

import Header from '../Header/App'
import Footer from '../Footer/App'
import Form from '../Form/App'

import png1 from './img/png1.png'
import png2 from './img/png2.png'
import returnDom from '../../utils/returnDom'

export default function App(props) {
  let scal = props.windowWidthValue / 1920

  const [isShow, setIsShow] = useState(false)
  return (
    <div className="legalServiceInfo">
      <Header
        state={props.state}
        onSetState={props.onSetState}
        isShow={isShow}
        onSetIsShow={setIsShow}
        windowWidthValue={props.windowWidthValue}
      />
      <div className="banner" onClick={() => setIsShow(false)}>
        <img src={banner} alt="banner" style={{ height: 340 * scal + 'px' }} />
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
            法律服务
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
      <div
        className="content"
        onClick={() => setIsShow(false)}
        style={{ padding: `${100 * scal}px ${360 * scal}px` }}
      >
        <div className="type">
          <div
            className="title"
            style={{
              fontSize: 50 * scal + 'px',
              marginBottom: 80 * scal + 'px'
            }}
          >
            {props.info.title}
          </div>
          <div className="typeBox">
            <div className="left" style={{ width: 570 * scal + 'px' }}>
              <div className="img">
                <img
                  src={props.info.display_image_path}
                  alt=""
                  style={{
                    width: 570 * scal + 'px',
                    height: 380 * scal + 'px'
                  }}
                />
              </div>
            </div>
            <div className="right" style={{ width: 600 * scal + 'px' }}>
              <div className="top">
                <img
                  src={png2}
                  alt=""
                  style={{ width: 32 * scal + 'px', height: 32 * scal + 'px' }}
                />
                <div className="title" style={{ fontSize: 24 + scal + 'px' }}>
                  {props.info.title}
                </div>
              </div>
              <div
                className="bottom"
                style={{
                  padding: 15 * scal + 'px',
                  fontSize: 20 * scal + 'px'
                }}
              >
                {returnDom(props.info.service_content)}
              </div>
            </div>
          </div>
        </div>
        <Form
          sourcePage={`法律服务-${props.info.title}`}
          windowWidthValue={props.windowWidthValue}
        />
      </div>
      <Footer
        windowWidthValue={props.windowWidthValue}
        onSetState={props.onSetState}
      />
    </div>
  )
}
