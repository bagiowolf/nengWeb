import React, { useEffect, useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from '../../assets/banner.png'
import png1 from './img/png1.png'
import png3 from './img/png3.png'
import png4 from './img/png4.png'
import CaseInfo from '../CaseInfo/App'
import Form from '../Form/App'
import { get } from '../../utils/api/api'
import returnDom from '../../utils/returnDom'
import formatTime from '../../utils/formatTime/time'

export default function App(props) {
  let scal = props.windowWidthValue / 1919

  const [isShow, setIsShow] = useState(false)
  const [state, setState] = useState(true)
  const [arr, setArr] = useState([])

  const [activeInfo, setActiveInfo] = useState({})

  const [typeList, setTypeList] = useState([{ id: 1, type: '全部' }])
  const [type, setType] = useState(1)

  const [isShowBtn, setIsShowBtn] = useState(true)

  const [isShowNum, setIsShowNum] = useState(9)

  const getArr = (num) => {
    let nu = num ?? 9
    get('/get_case_studies_all').then((res) => {
      let data = res.data?.[0] ?? []
      console.log(data, 123)
      setIsShowBtn(data.length > nu ? true : false)

      data = data.slice(0, nu)
      console.log(nu)
      console.log(data, 3455)
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
    if (value === '1') {
      getArr()
    }
  }

  const loadMore = () => {
    let a = isShowNum + 9
    setIsShowNum(a)
    getArr(a)
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
            windowWidthValue={props.windowWidthValue}
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

          <div
            className="content"
            onClick={() => setIsShow(false)}
            style={{ padding: `${60 * scal}px ${360 * scal}px` }}
          >
            <div className="title" style={{ fontSize: 38 * scal + 'px' }}>
              已帮助<span>30,000+</span>当事人成功解决问题
            </div>
            <div
              className="type"
              style={{
                fontSize: 18 * scal + 'px',
                marginBottom: 15 * scal + 'px',
                paddingLeft: 10 * scal + 'px'
              }}
            >
              案例分类:
              <select
                onChange={(e) => setData(e.target.value)}
                value={type}
                style={{
                  fontSize: 18 * scal + 'px',
                  marginLeft: 15 * scal + 'px'
                }}
              >
                {typeList.map((item) => (
                  <option
                    value={item.id}
                    key={item.id}
                    style={{
                      fontSize: 16 * scal + 'px'
                    }}
                  >
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
                  style={{
                    width: 380 * scal + 'px',
                    height: 435 * scal + 'px',
                    marginBottom: 30 * scal + 'px'
                  }}
                >
                  <img
                    src={item.case_image_path}
                    alt=""
                    style={{ height: 214 * scal + 'px' }}
                  />
                  <div
                    className="title"
                    style={{
                      fontSize: 22 * scal + 'px',
                      padding: 15 * scal + 'px'
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="msg"
                    style={{
                      padding: 15 * scal + 'px',
                      fontSize: 18 * scal + 'px',
                      height: 114 * scal + 'px',
                      paddingTop: 0
                    }}
                  >
                    {returnDom(item.content)}
                  </div>
                  <div className="bottm" style={{ padding: 15 * scal + 'px' }}>
                    <div
                      className="category"
                      style={{
                        padding: `0 ${5 * scal}px`,
                        height: 32 * scal + 'px',
                        lineHeight: 32 * scal + 'px'
                      }}
                    >
                      {item.category}
                    </div>
                    <img src={png1} alt="" />
                  </div>
                </div>
              ))}
            </div>
            {isShowBtn && (
              <div
                className="lookMore"
                style={{
                  width: 215 * scal + 'px',
                  height: 48 * scal + 'px',
                  lineHeight: 48 * scal + 'px',
                  fontSize: 20 * scal + 'px',
                  marginTop: 20 * scal + 'px',
                  marginBottom: 87 * scal + 'px'
                }}
                onClick={loadMore}
              >
                查看更多
              </div>
            )}

            <Form
              sourcePage="成功案例"
              windowWidthValue={props.windowWidthValue}
            />
          </div>
          <div className="xz" style={{ height: 650 * scal + 'px' }}>
            <img src={png3} alt="" />
            <div
              className="title"
              style={{
                fontSize: 38 * scal + 'px',
                marginTop: 80 * scal + 'px',
                marginBottom: 30 * scal + 'px'
              }}
            >
              他们也选择了竭律
            </div>
            <div
              className="box"
              style={{
                width: 1684 * scal + 'px',
                height: 471 * scal + 'px',
                padding: `${60 * scal}px ${97 * scal}px`
              }}
            >
              <img src={png4} alt="" />
            </div>
          </div>
          <Footer windowWidthValue={props.windowWidthValue} />
        </div>
      )}
      {!state && (
        <CaseInfo
          state={props.state}
          onSetState={props.onSetState}
          info={activeInfo}
          windowWidthValue={props.windowWidthValue}
        />
      )}
    </div>
  )
}
