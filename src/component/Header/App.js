import React from 'react'
import logo from '../../assets/logo.png'
import gengduo from './img/gengduo.png'
import './App.css'

export default function App(props) {
  let scal = props.windowWidthValue / 1919
  let isBgc = props.bgc ?? true
  const list = [
    '首页',
    '关于我们',
    '信用修复',
    '律师团队',
    '法律服务',
    '律师合作',
    '新闻中心',
    '加盟招商',
    '成功案例',
    '联系我们&留言'
  ]
  const handelClick = (type) => {
    props.onSetIsShow(type)
  }
  return (
    <div>
      <div className={`headerer`}>
        <div
          className={`header  ${isBgc ? '' : 'bgc'}`}
          style={{
            padding: `0 ${114 * scal}px 0 ${360 * scal}px`,
            height: 122 * scal + 'px'
          }}
        >
          <div className="left" style={{ width: 237 * scal + 'px' }}>
            <img
              className="HeadDiv"
              src={logo}
              alt="logo"
              style={{ width: 286 * scal + 'px', height: 57 * scal + 'px' }}
              onClick={() => props.onSetState(0)}
            />
          </div>
          <div
            className="right"
            style={{ width: 868 * scal + 'px', fontSize: 16 * scal + 'px' }}
          >
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
            <img
              className="HeadDiv"
              src={logo}
              alt="logo"
              onClick={() => props.onSetState(0)}
            />
          </div>
          <div className="right">
            <img src={gengduo} alt="" onClick={() => handelClick(true)} />
            <ul className={`navList ${props.isShow ? 'isShow' : ''}`}>
              {list.map((item, index) => (
                <li
                  key={item}
                  onClick={() => props.onSetState(index)}
                  className={`${props.state === index ? 'active' : ''}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
