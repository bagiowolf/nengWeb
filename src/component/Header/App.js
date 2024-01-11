import React from 'react'
import logo from '../../assets/logo.png'
import gengduo from './img/gengduo.png'
import './App.css'

export default function App(props) {
  const list = [
    '关于我们',
    '信用修复',
    '律师团队',
    '法律合作',
    '新闻中心',
    '加盟招商',
    '成功案例',
    '联系我们&留言'
  ]
  const handelClick = (type) => {
    props.onSetIsShow(type)
  }
  console.log(props.state, '123')
  return (
    <div>
      <div className="box1">
        <div className="header">
          <div className="left">
            <img className="HeadDiv" src={logo} alt="logo" />
          </div>
          <div className="right">
            {list.map((item, index) => (
              <span
                key={item}
                onClick={() => props.onSetState(index)}
                className={`${props.state === index ? 'active' : ''}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="header">
          <div className="left">
            <img className="HeadDiv" src={logo} alt="logo" />
          </div>
          <div className="right">
            <img src={gengduo} alt="" onClick={() => handelClick(true)} />
            <ul className={`navList ${props.isShow ? 'isShow' : ''}`}>
              <li className="active">关于我们</li>

              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
