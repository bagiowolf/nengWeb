import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import React, { useEffect, useState } from 'react'
import banner from '../../assets/banner.png'
import png1 from './img/png1.png'
import LegalServiceInfo from '../LegalServiceInfo/App'
import Form from '../Form/App'
import { get } from '../../utils/api/api'
import returnDom from '../../utils/returnDom'

export default function App(props) {
  let scal = props.windowWidthValue / 1919

  const [isShow, setIsShow] = useState(false)
  const [active, setActive] = useState(0)
  const [state, setState] = useState(true)

  const [arr, setArr] = useState([])

  const setActiveInfo = (info) => {
    setState(false)
    setActive(info)
    console.log(active, 'active')
  }
  useEffect(() => {
    get('/get_legal_services_all').then((res) => {
      let data = res.data?.[0] ?? []
      if (data.length % 3 === 2) {
        data.push({})
      }
      setArr(data)
      setActive(data[0])
    })
  }, [])

  return (
    <div>
      {state && (
        <div>
          <div className="legalService">
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
                <div className="gy">法律服务</div>
                <div className="sj">
                  以专业视角，应对各种复杂需求 业务电话：400-651-0001
                </div>
              </div>
            </div>
            <div
              className="content"
              onClick={() => setIsShow(false)}
              style={{ padding: `${60 * scal}px ${360 * scal}px` }}
            >
              <div className="boxList">
                {arr.map((item, index) => (
                  <div
                    className={`box11 ${
                      active.id === item.id ? 'active' : ''
                    } ${item.id === undefined ? 'dn' : ''}`}
                    onClick={() => setActive(item)}
                    key={index}
                    style={{
                      width: 380 * scal + 'px',
                      height: 337 * scal + 'px',
                      marginBottom: 40 * scal + 'px'
                    }}
                  >
                    <img src={png1} alt="" />
                    <div
                      className="title"
                      style={{
                        fontSize: 28 * scal + 'px',
                        padding: `${24 * scal}px 0 ${20 * scal}px 0`,
                        height: 66 * scal + 'px'
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 20 * scal + 'px',
                        padding: 20 * scal + 'px',
                        paddingTop: 10 * scal + 'px',
                        lineHeight: 34 * scal + 'px'
                      }}
                    >
                      <div
                        className="div"
                        style={{ height: 100 * scal + 'px' }}
                      >
                        {returnDom(item.service_content)}
                      </div>
                      <div>受理数量：{item.accepted_num}个</div>
                      咨询人数：{item.consultation_num}次
                    </div>
                    <div
                      className="btn"
                      onClick={() => setActiveInfo(item)}
                      style={{ width: 120 * scal + 'px' }}
                    >
                      立即咨询
                    </div>
                  </div>
                ))}
              </div>
              <Form
                sourcePage="法律服务"
                windowWidthValue={props.windowWidthValue}
              />
            </div>
            <Footer windowWidthValue={props.windowWidthValue} />
          </div>
        </div>
      )}
      {!state && (
        <LegalServiceInfo
          state={props.state}
          onSetState={props.onSetState}
          info={active}
          windowWidthValue={props.windowWidthValue}
        />
      )}
    </div>
  )
}
