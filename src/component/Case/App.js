import React, { useEffect, useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from '../../assets/banner.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import png4 from './img/png4.png'
import CaseInfo from '../CaseInfo/App'
import Form from '../Form/App'
import { get } from '../../utils/api/api'
import returnDom from '../../utils/returnDom'
import formatTime from '../../utils/formatTime/time'

export default function App(props) {
  const [isShow, setIsShow] = useState(false)
  const [state, setState] = useState(true)
  const [arr, setArr] = useState([])

  const [activeInfo, setActiveInfo] = useState({})

  const [typeList, setTypeList] = useState([{ id: 1, type: '全部' }])
  const [type, setType] = useState(1)
  const getArr = () => {
    get('/get_case_studies_all').then((res) => {
      let data = res.data?.[0] ?? []
      data = data.slice(0, 18)
      if (data.length % 3 === 2) {
        data.push({})
      }
      data.forEach((item) => {
        item.published_at = formatTime(item.published_at)
      })
      setTypeList([
        { id: 1, type: '全部' },
        ...data.map((item) => {
          return {
            type: item.category,
            id: item.category
          }
        })
      ])
      setArr(data)
    })
  }
  useEffect(() => {
    getArr()
  }, [])

  const setActive = (info) => {
    setState(false)
    setActiveInfo(info)
  }
  const setData = (value) => {
    setType(value)
    setArr(arr.filter((item) => item.category == value))
    console.log(value, 'vallll')
    if (value === '1') {
      getArr()
    }
  }
  return (
    <div>
      {state && (
        <div className="case">
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
            <div className="title">
              已帮助<span>30,000+</span>当事人成功解决问题
            </div>
            <div className="type">
              案例分类:
              <select onChange={(e) => setData(e.target.value)} value={type}>
                {typeList.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="boxList">
              {arr.map((item) => (
                <div
                  className={`box ${item.id === undefined ? 'dn' : ''}`}
                  key={item.id ? item.id : Date.now()}
                  onClick={() => setActive(item)}
                >
                  <img src={item.case_image_path} alt="" />
                  <div className="title">{item.title}</div>
                  <div className="msg">{returnDom(item.content)}</div>
                  <div className="bottm">
                    <div className="category">{item.category}</div>
                    <img src={png1} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className="lookMore">查看更多</div>
            <Form sourcePage="成功案例" />
          </div>
          <div className="xz">
            <img src={png3} alt="" />
            <div className="title">他们也选择了竭律</div>
            <div className="box">
              <img src={png4} alt="" />
            </div>
          </div>
          <Footer />
        </div>
      )}
      {!state && (
        <CaseInfo
          state={props.state}
          onSetState={props.onSetState}
          info={activeInfo}
        />
      )}
    </div>
  )
}
