import React, { useEffect, useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from '../Case/img/Group 18.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import returnDom from '../../utils/returnDom'
import { get } from '../../utils/api/api'

export default function App(props) {
  let scal = props.windowWidthValue / 1920

  const [isShow, setIsShow] = useState(false)
  const { info } = props
  useEffect(() => {
    get(`/update_view_case_studies/${info.id}/increment_view`)
  }, [])
  return (
    <div>
      <div className="caseInfo">
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
              成功案例
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
          style={{ padding: `${60 * scal}px ${360 * scal}px` }}
        >
          <div
            className="title"
            style={{ fontSize: 34 * scal + 'px', fontWeight: 400 }}
          >
            {info.title}
          </div>
          <div
            className="num"
            style={{ margin: `${20 * scal}px 0`, fontSize: 20 * scal + 'px' }}
          >
            <div className="time" style={{ marginRight: 20 * scal + 'px' }}>
              <img
                src={png1}
                alt=""
                style={{
                  marginRight: 10 * scal + 'px',
                  width: 23 * scal + 'px'
                }}
              />
              <span>{info.published_at}</span>
            </div>
            <div className="sz">
              <img
                src={png2}
                alt=""
                style={{
                  marginRight: 10 * scal + 'px',
                  width: 35 * scal + 'px'
                }}
              />
              <span>{info.view_count}</span>
            </div>
          </div>
          <div className="msg" style={{ fontSize: 24 * scal + 'px' }}>
            {returnDom(info.content)}
          </div>
          {/* <img src={info.case_image_path} alt="" className="png3" /> */}
        </div>

        <Footer windowWidthValue={props.windowWidthValue} />
      </div>
    </div>
  )
}
