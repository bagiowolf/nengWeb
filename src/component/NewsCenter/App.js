import React, { useEffect, useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from './img/banner.png'
import png1 from './img/png1.png'
import NewsInfo from '../NewsInfo/App'
import { get } from '../../utils/api/api'
import setTime from '../../utils/formatTime/time'
import returnDom from '../../utils/returnDom'

export default function App(props) {
  let scal = props.windowWidthValue / 1920

  const [isShow, setIsShow] = useState(false)
  const [state, setState] = useState(true)
  const [arr, setArr] = useState([])
  const [first, setFirst] = useState({})
  const [three, setThree] = useState([])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [total, setTotal] = useState(10)

  const [activeInfo, setActiveInfo] = useState({})
  const [pageNum, setPageNum] = useState(1)
  const [input, setinput] = useState(1)

  const getNews = (index) => {
    get('/get_total_news').then((res) => {
      let data = res.data
      // let data = 50
      setTotal(data)
      if (data < 10) {
        setPageNum(1)
      } else {
        setPageNum(parseInt(+data / 10 + ''))
      }
    })
    get(`/get_news_all/?skip=${index ?? currentIndex}&limit=10`).then((res) => {
      let data = res.data[0]
      data.forEach((item) => {
        item.published_at = setTime(item.published_at)
      })
      setFirst(data[0] || {})
      setThree(data.splice(0, 3))
      setArr(data)
    })
  }
  const setInfo = (info) => {
    setState(false)
    setActiveInfo(info)
  }

  const setPage = (index) => {
    if (index <= 1) {
      setCurrentIndex(1)
      getNews(1)
    } else if (index >= pageNum) {
      setCurrentIndex(pageNum)
      getNews(pageNum)
    } else {
      setCurrentIndex(index)
      getNews(index)
    }
  }

  useEffect(() => {
    getNews()
  }, [])
  return (
    <div>
      {state && (
        <div className="NewsCenter">
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

          <div
            className="content"
            onClick={() => setIsShow(false)}
            style={{
              width: 1360 * scal + 'px',
              top: -60 * scal + 'px',
              padding: `${50 * scal}px ${80 * scal}px`
            }}
          >
            <div className="big">
              <div
                className="left"
                onClick={() => setInfo(first)}
                style={{
                  width: 780 * scal + 'px',
                  height: 340 * scal + 'px',
                  marginRight: 50 * scal + 'px'
                }}
              >
                <img
                  src={first.image_path}
                  alt=""
                  style={{ width: '100%', height: '100%' }}
                />
                <div
                  className="text"
                  style={{ bottom: 20 * scal + 'px', left: 30 * scal + 'px' }}
                >
                  <div
                    className="bigText"
                    style={{
                      fontSize: 24 * scal + 'px',
                      lineHeight: 48 * scal + 'px'
                    }}
                  >
                    {/* {first.title} */}
                    行政公益诉讼典型案例
                  </div>
                  <div
                    style={{
                      fontSize: 14 * scal + 'px',
                      lineHeight: 28 * scal + 'px'
                    }}
                  >
                    /阅读全文
                  </div>
                </div>
              </div>
              <div className="right">
                {three.map((item) => (
                  <div
                    className="lineBox"
                    key={item.id}
                    onClick={() => setInfo(item)}
                  >
                    <div
                      className="time"
                      style={{
                        fontSize: 14 * scal + 'px',
                        lineHeight: 28 * scal + 'px'
                      }}
                      onClick={() => setInfo(item)}
                    >
                      {item.published_at}
                    </div>
                    <div
                      className="title"
                      onClick={() => setInfo(item)}
                      style={{
                        fontSize: 24 * scal + 'px',
                        height: 78 * scal + 'px',
                        fontWeight: 400
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="newsList">
              {arr.map((item) => (
                <div
                  className="news"
                  key={item.id}
                  onClick={() => setInfo(item)}
                  style={{
                    marginBottom: 17 * scal + 'px',
                    paddingBottom: 17 * scal + 'px'
                  }}
                >
                  <div
                    className="time"
                    style={{
                      fontSize: 14 * scal + 'px',
                      lineHeight: 28 * scal + 'px',
                      fontWeight: 400
                    }}
                  >
                    {item.published_at}
                  </div>
                  <div
                    className="title"
                    style={{
                      fontSize: 24 * scal + 'px',
                      lineHeight: 48 * scal + 'px',
                      height: 48 * scal + 'px',
                      fontWeight: 400
                    }}
                  >
                    {item.title}
                  </div>
                  <div className="msg" style={{ fontSize: 18 * scal + 'px' }}>
                    {returnDom(item.content)}
                  </div>
                </div>
              ))}
            </div>
            <div className="pager">
              <div className="total mr10">共{total}条</div>
              <div className="num mr10">
                <div className="box" onClick={() => setPage(currentIndex - 1)}>
                  上一页
                </div>
                {new Array(pageNum).fill(1).map((item, index) => (
                  <div
                    className={`box ${
                      index + 1 === currentIndex + 1 ? 'active' : ''
                    }`}
                    key={index}
                    onClick={() => setPage(index + 1)}
                  >
                    {index + 1}
                  </div>
                ))}

                <div className="box" onClick={() => setPage(currentIndex + 1)}>
                  下一页
                </div>
              </div>
              <div className="dao">
                到第
                <div className="box1 mr10 ml10">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setinput(+e.target.value)}
                  />
                </div>
                页
              </div>
              <div className="qr ml10" onClick={() => setPage(input)}>
                确定
              </div>
            </div>
          </div>
          <Footer
            windowWidthValue={props.windowWidthValue}
            onSetState={props.onSetState}
          />
        </div>
      )}
      {!state && (
        <NewsInfo
          state={props.state}
          onSetState={props.onSetState}
          info={activeInfo}
          windowWidthValue={props.windowWidthValue}
        />
      )}
    </div>
  )
}
