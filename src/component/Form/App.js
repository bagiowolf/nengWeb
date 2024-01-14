import React, { useState } from 'react'
import './App.css'
import { post } from '../../utils/api/api'
import dayjs from 'dayjs'

export default function App(props) {
  let name = props.name ?? '律师'
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [asker_phone, setAsker_phone] = useState('')
  const save = () => {
    if (!title || !question || !asker_phone) return
    post('create_inquiries', {
      title,
      question,
      asker_phone,
      source_page: props.sourcePage,
      inquiry_time: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    })
  }

  return (
    <div>
      <div className="formBo">
        <div className="title">向{name}提问</div>
        <div className="from">
          <div className="item">
            <div className="left">请输入标题:</div>
            <div className="right">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="item">
            <div className="left">请输入您的法律咨询问题:</div>
            <div className="right textarea">
              <textarea
                name=""
                id=""
                rows={8}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="item">
            <div className="left">请输入手机号:</div>
            <div className="right">
              <input
                type="text"
                value={asker_phone}
                onChange={(e) => setAsker_phone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="save" onClick={save}>
          提交问题
        </div>
      </div>
    </div>
  )
}
