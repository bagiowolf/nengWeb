import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from './img/banner.png'
import png1 from './img/png1.png'
import NewsInfo from '../NewsInfo/App'

let arr = [
  {
    id: 10,
    title: '11123发生的房东舒服大叔',
    image_path: 'http://49.232.133.22:8080/uploads/images/WechatIMG99.jpg',
    created_at: '2024-01-12T10:47:17',
    published_at: '2024-01-12T18:46:38',
    editor: '23331',
    view_count: 11,
    content:
      '<p>房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔</p><p>房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔<br/></p><p>房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔<br/></p><p><br/></p><p>房东舒服似的发房东说房东舒服似的房东舒服说房东说房东舒服似的房东说房东舒服似的发生的房东说房东说房东舒服大叔方式地方大叔<br/></p><p><br/></p><p><img src="http://49.232.133.22:8080/uploads/images/WechatIMG68.jpg" style="max-width:100%;" contenteditable="false"/></p>'
  },
  {
    id: 9,
    title: 'fdsfdsfdsf房东舒服',
    image_path: 'http://49.232.133.22:8080/uploads/images/WechatIMG99.jpg',
    created_at: '2024-01-12T10:46:10',
    published_at: '2024-01-12T18:45:31',
    editor: '房东舒服大叔',
    view_count: 11,
    content:
      '<p>房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是</p><p>房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是<br/></p><p><br/></p><p>房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是房东说房东说房东舒服大叔房东说房东说房东舒服大叔房东说房东舒服房东舒服似的发方式的方式地方上的方式地方是<br/></p><p><br/></p><p><br/></p><p><img src="http://49.232.133.22:8080/uploads/images/WechatIMG69.jpg" style="max-width:100%;" contenteditable="false"/></p>'
  },
  {
    id: 8,
    title: '啊啊啊',
    image_path: 'http://49.232.133.22:8080/uploads/images/星星2.jpg',
    created_at: '2024-01-12T10:40:07',
    published_at: '2024-01-12T18:36:48',
    editor: '请问',
    view_count: 1,
    content:
      '<p><img src="http://49.232.133.22:8080/uploads/images/星星2.jpg" style="max-width:100%;" contenteditable="false"/></p>'
  },
  {
    id: 7,
    title: '的方式的方式地方',
    image_path: 'http://49.232.133.22:8080/uploads/images/WechatIMG99.jpg',
    created_at: '2024-01-12T08:29:06',
    published_at: '2024-01-12T16:28:50',
    editor: '房东舒服似的',
    view_count: 324324,
    content: '<p>房东说房东舒服</p>'
  },
  {
    id: 6,
    title: '2222',
    image_path: 'http://49.232.133.22:8080/uploads/images/WechatIMG99.jpg',
    created_at: '2024-01-12T08:23:09',
    published_at: '2024-01-12T16:21:55',
    editor: '222钉钉的',
    view_count: 333,
    content: '<p>3321312</p>'
  },
  {
    id: 4,
    title: 'AAA',
    image_path: 'http://49.232.133.22:8080/uploads/images/星星2.jpg',
    created_at: '2024-01-11T19:38:41',
    published_at: '2024-01-11T19:38:35',
    editor: 'AAA',
    view_count: 22233,
    content: '<p>啊啊啊啊啊啊的撒大</p>'
  }
]
export default function App(props) {
  const [isShow, setIsShow] = useState(false)
  const [state, setState] = useState(true)
  return (
    <div>
      {state && (
        <div className="NewsCenter">
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
            <div className="big">
              <div className="left">
                <img src={png1} alt="" />
                <div className="text">
                  <div className="bigText">行政公益诉讼典型案例</div>
                  <div onClick={() => setState(false)}>/阅读全文</div>
                </div>
              </div>
              <div className="right">
                <div className="lineBox">
                  <div className="time">2023/4/1</div>
                  <div className="title">
                    最高人民法院发布民法典合同编通则司法解释相关典型案例
                  </div>
                </div>
                <div className="lineBox">
                  <div className="time">2023/4/1</div>
                  <div className="title">
                    最高人民法院发布民法典合同编通则司法解释相关典型案例
                  </div>
                </div>
                <div className="lineBox">
                  <div className="time">2023/4/1</div>
                  <div className="title">
                    最高人民法院发布民法典合同编通则司法解释相关典型案例
                  </div>
                </div>
              </div>
            </div>
            <div className="newsList">
              {arr.map((item) => (
                <div
                  className="news"
                  key={item.id}
                  onClick={() => setState(false)}
                >
                  <div className="time">{item.published_at}</div>
                  <div className="title">{item.title}</div>
                  <div className="msg">{item.content}</div>
                </div>
              ))}
            </div>
            <div className="pager">
              <div className="total mr10">共41条</div>
              <div className="num mr10">
                <div className="box">上一页</div>
                <div className="box active">1</div>
                <div className="box">2</div>
                <div className="box">3</div>
                <div className="box">4</div>
                <div className="box">5</div>
                <div className="box">6</div>

                <div className="box">下一页</div>
              </div>
              <div className="dao">
                到第<div className="box1 mr10 ml10">1</div>页
              </div>
              <div className="qr ml10">确定</div>
            </div>
          </div>
          <Footer />
        </div>
      )}
      {!state && <NewsInfo state={props.state} onSetState={props.onSetState} />}
    </div>
  )
}
