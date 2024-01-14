import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from '../../assets/banner.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import { post } from '../../utils/api/api'
import dayjs from 'dayjs'

let arr = [
  '法律咨询',
  '信用修复',
  '民事纠纷',
  '刑事案件',
  '企业顾问',
  '律师合作',
  '加盟招商',
  '其他问题'
]

export default function App(props) {
  const [isShow, setIsShow] = useState(false)
  const [message_type, setMessage_type] = useState('法律咨询')
  const [content, setContent] = useState('')
  const [messenger_phone, setMessenger_phone] = useState('')
  const save = () => {
    if (!message_type || !content || !messenger_phone) return
    post('create_messages', {
      message_type,
      content,
      messenger_phone,
      source_page: props.sourcePage,
      message_time: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    })
  }
  return (
    <div>
      <div className="ContactUs">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
        />
        <div className="banner" onClick={() => setIsShow(false)}>
          <img src={banner} alt="banner" />
          <div className="aboutText">
            <div className="gy">联系我们</div>
            <div className="sj">
              以专业视角，应对各种复杂需求 业务电话：400-651-0001
            </div>
          </div>
        </div>

        <div className="content" onClick={() => setIsShow(false)}>
          <div className="formBox">
            <div className="left">
              <div className="top">
                <img src={png1} alt="" />
                <span>请简单描述您的法律问题，以便我们了解情况</span>
              </div>
              <div className="form">
                <div className="item">
                  <div className="left">问题类型:</div>
                  <div className="right">
                    <select
                      value={message_type}
                      onChange={(e) => setMessage_type(e.target.value)}
                    >
                      {arr.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="item" style={{ alignItems: 'flex-start' }}>
                  <div className="left">求助描述:</div>
                  <div className="right">
                    <textarea
                      name=""
                      id=""
                      rows={3}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="item">
                  <div className="left">联系方式:</div>
                  <div className="right">
                    <input
                      type="text"
                      value={messenger_phone}
                      onChange={(e) => setMessenger_phone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="save" onClick={save}>
                  提交问题
                </div>
              </div>
            </div>
            <div className="right">
              <div className="one">手机扫码，直接求助律师</div>
              <div className="two">
                超过<span>100+</span>律师,<span>24小时</span>在线,评价
                <span>25分钟</span>回复速度
              </div>
              <div className="three">
                <div className="left">
                  <img src={png2} alt="" />
                </div>
                <div className="right">
                  <div>1.添加我司官方微信公众号</div>
                  <div>2.简诉您的请求问题</div>
                  <div>3.与在线律师一对一解答</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box22">
          <img src={png3} alt="" />
        </div>

        <Footer isShow={false} />
      </div>
    </div>
  )
}