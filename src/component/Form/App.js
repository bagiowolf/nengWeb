import React, { useState } from 'react'
import './App.css'
import { post } from '../../utils/api/api'
import dayjs from 'dayjs'

export default function App(props) {
  let scal = props.windowWidthValue / 1919
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
      <div
        className="formBo"
        style={{
          padding: `${26 * scal}px ${30 * scal}px`,
          marginTop: 70 * scal + 'px'
        }}
      >
        <div className="title" style={{ marginBottom: 16 * scal + 'px' }}>
          向{name}提问
        </div>
        <div className="from">
          <div className="item" style={{ width: 790 * scal + 'px' }}>
            <div
              className="left"
              style={{
                width: 330 * scal + 'px',
                fontSize: 16 * scal + 'px',
                marginRight: 16 * scal + 'px'
              }}
            >
              请输入标题:
            </div>
            <div
              className="right"
              style={{
                width: 540 * scal + 'px',
                height: 38 * scal + 'px'
              }}
            >
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="item" style={{ width: 790 * scal + 'px' }}>
            <div
              className="left"
              style={{
                width: 330 * scal + 'px',
                fontSize: 16 * scal + 'px',
                marginRight: 16 * scal + 'px'
              }}
            >
              请输入您的法律咨询问题:
            </div>
            <div
              className="right textarea"
              style={{
                width: 540 * scal + 'px'
              }}
            >
              <textarea
                name=""
                id=""
                rows={8}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="item" style={{ width: 790 * scal + 'px' }}>
            <div
              className="left"
              style={{
                width: 330 * scal + 'px',
                fontSize: 16 * scal + 'px',
                marginRight: 16 * scal + 'px'
              }}
            >
              请输入手机号:
            </div>
            <div
              className="right"
              style={{
                width: 540 * scal + 'px',
                height: 38 * scal + 'px'
              }}
            >
              <input
                type="text"
                value={asker_phone}
                onChange={(e) => setAsker_phone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div
          className="save"
          onClick={save}
          style={{
            width: 217 * scal + 'px',
            height: 48 * scal + 'px',
            lineHeight: 48 * scal + 'px'
          }}
        >
          提交问题
        </div>
      </div>
    </div>
  )
}
