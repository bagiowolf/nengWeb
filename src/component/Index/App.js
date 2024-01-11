import React from 'react'
import png1 from './img/bg.png'
import png2 from './img/1.png'
import png3 from './img/2.png'
import png4 from './img/3.png'
import png5 from './img/4.png'
import png6 from './img/5.png'
import png7 from './img/6.png'
import png8 from './img/7.png'
import png9 from './img/8.png'
import png10 from './img/9.png'
import png11 from './img/10.png'
import png12 from './img/11.png'
import png13 from './img/12.png'
import png14 from './img/13.png'
import './index.css'

export default function App(props) {
  let scal = props.windowWidthValue / 1919
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
  var deslitt = [
    {
      des1: '中国电信',
      des2: '3次合作',
      des3: '[信用修复类]等待客户文案提供',
      des4: '等待客户文案提供等待客户文案提供等待客户文案提供等待客户文等待客户文案提供等待客户文案提供案提供等待客户文案提供等待客户文案提供'
    }
  ]
  const setType = (type) => {
    props.onSetState(type)
  }
  return (
    <div className="HeadDiv">
      <div
        style={{
          height: 806 * scal + 'px'
        }}
      >
        <img className="HeadDivBg" src={png1} alt=""></img>
        <img
          className="HeadDivBgicon"
          style={{
            marginLeft: 360 * scal + 'px',
            width: 279 * scal + 'px',
            height: 31 * scal + 'px',
            marginTop: 30 * scal + 'px'
          }}
          src={png2}
          alt=""
        ></img>
        <img
          className="HeadDivBgicon1"
          style={{
            marginLeft: 878 * scal + 'px',
            width: 160 * scal + 'px',
            height: 93 * scal + 'px',
            marginTop: 666 * scal + 'px'
          }}
          src={png3}
          alt=""
        ></img>
        <div
          className="HeadDivlist"
          style={{
            marginLeft: 940 * scal + 'px',
            marginTop: 32 * scal + 'px'
          }}
        >
          {list.map((item, index) => {
            return (
              <label
                className="HeadDivlistItem"
                style={{ marginLeft: index == 0 ? '0px' : '18px' }}
                onClick={() => setType(index)}
                key={index}
              >
                {item}
              </label>
            )
          })}
        </div>
      </div>
      <div>
        <img className="HeadDivBg1" src={png4} alt=""></img>
      </div>
      <div>
        <img
          className="HeadDivBg2"
          src={png5}
          style={{
            width: 1694 * scal + 'px',
            marginLeft: 90 * scal + 'px',
            height: 318 * scal + 'px',
            marginTop: -80 * scal + 'px'
          }}
          alt=""
        ></img>
      </div>
      <div>
        <img className="HeadDivBg1" src={png6} alt=""></img>
      </div>
      <div>
        <img
          className="HeadDivBg1"
          style={{ marginTop: 40 * scal + 'px' }}
          src={png7}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="HeadDivBg1"
          style={{ marginTop: 40 * scal + 'px' }}
          alt=""
          src={png8}
        ></img>
      </div>
      <div>
        <img className="HeadDivBg1" src={png9} alt=""></img>
      </div>
      <div>
        <img className="HeadDivBg1" src={png10} alt=""></img>
      </div>
      <div>
        <img className="HeadDivBg1" src={png11} alt=""></img>
      </div>
      <div
        className="HeadDivBg4"
        style={{ height: 530 * scal + 'px', marginTop: 40 * scal + 'px' }}
      >
        <img src={png12} alt=""></img>
        <div
          className="HeadDivBg5"
          style={{
            width: 1640 * scal + 'px',
            height: 470 * scal + 'px',
            marginTop: 40 * scal + 'px',
            marginLeft: 100 * scal + 'px'
          }}
        >
          <div
            className="HeadDivBg6"
            style={{ width: 686 + 'px', height: 470 * scal + 'px' }}
          >
            <div
              className="HeadDivBg7"
              style={{ width: 542 * scal + 'px', height: 470 * scal + 'px' }}
            >
              <img src={png13} className="HeadDivBg8" alt=""></img>
              <div className="HeadDivBg11">
                <img
                  className="HeadDivBg9"
                  alt=""
                  src={png14}
                  style={{
                    width: 54 * scal + 'px',
                    height: 54 * scal + 'px'
                  }}
                ></img>
                <div className="HeadDivBg9">
                  <label className="HeadDivBg10">{deslitt[0].des1}</label>
                  <label>{deslitt[0].des2}</label>
                </div>
                <div>{deslitt[0].des3}</div>
                <div
                  className="HeadDivBg12"
                  style={{ height: 48 * scal + 'px' }}
                >
                  {deslitt[0].des4}
                </div>
              </div>
            </div>
            <div
              className="HeadDivBg7"
              style={{
                width: 542 * scal + 'px',
                height: 470 * scal + 'px',
                marginLeft: 20 * scal + 'px'
              }}
            >
              <img src={png13} className="HeadDivBg8" alt=""></img>
              <div className="HeadDivBg11">
                <img
                  className="HeadDivBg9"
                  alt=""
                  src={png14}
                  style={{
                    width: 54 * scal + 'px',
                    height: 54 * scal + 'px'
                  }}
                ></img>
                <div className="HeadDivBg9">
                  <label className="HeadDivBg10">{deslitt[0].des1}</label>
                  <label>{deslitt[0].des2}</label>
                </div>
                <div>{deslitt[0].des3}</div>
                <div
                  className="HeadDivBg12"
                  style={{ height: 48 * scal + 'px' }}
                >
                  {deslitt[0].des4}
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: 20 * scal + 'px' }}>
            <div
              className="HeadDivBg13"
              style={{ width: 576 * scal + 'px', height: 240 * scal + 'px' }}
            >
              <div
                className="HeadDivBg14"
                style={{
                  width: 284 * scal + 'px',
                  height: 240 * scal + 'px'
                }}
              >
                <img
                  src={png13}
                  alt=""
                  className="HeadDivBg8"
                  style={{
                    width: 284 * scal + 'px',
                    height: 240 * scal + 'px'
                  }}
                ></img>
                <div
                  className="HeadDivBg15"
                  style={{
                    width: 284 * scal + 'px',
                    height: 240 * scal + 'px',
                    marginTop: -62 * scal + 'px'
                  }}
                >
                  <img
                    className="HeadDivBg16"
                    src={png14}
                    alt=""
                    style={{
                      width: 54 * scal + 'px',
                      height: 54 * scal + 'px'
                    }}
                  ></img>
                  <div className="HeadDivBg17">
                    <label className="HeadDivBg18">{deslitt[0].des1}</label>
                    <label>{deslitt[0].des2}</label>
                  </div>
                </div>
              </div>
              <div
                className="HeadDivBg19"
                style={{ marginLeft: 20 * scal + 'px' }}
              >
                <div>{deslitt[0].des3}</div>
                <div
                  className="HeadDivBg20"
                  style={{ height: 142 * scal + 'px' }}
                >
                  {deslitt[0].des4}
                </div>
              </div>
            </div>
            <div
              className="HeadDivBg13"
              style={{ width: 576 * scal + 'px', height: 240 * scal + 'px' }}
            >
              <div
                className="HeadDivBg14"
                style={{
                  width: 284 * scal + 'px',
                  height: 240 * scal + 'px'
                }}
              >
                <img
                  src={png13}
                  alt=""
                  className="HeadDivBg8"
                  style={{
                    width: 284 * scal + 'px',
                    height: 240 * scal + 'px'
                  }}
                ></img>
                <div
                  className="HeadDivBg15"
                  style={{
                    width: 284 * scal + 'px',
                    height: 240 * scal + 'px',
                    marginTop: -62 * scal + 'px'
                  }}
                >
                  <img
                    className="HeadDivBg16"
                    src={png14}
                    alt=""
                    style={{
                      width: 54 * scal + 'px',
                      height: 54 * scal + 'px'
                    }}
                  ></img>
                  <div className="HeadDivBg17">
                    <label className="HeadDivBg18">{deslitt[0].des1}</label>
                    <label>{deslitt[0].des2}</label>
                  </div>
                </div>
              </div>
              <div
                className="HeadDivBg19"
                style={{ marginLeft: 20 * scal + 'px' }}
              >
                <div>{deslitt[0].des3}</div>
                <div
                  className="HeadDivBg20"
                  style={{ height: 142 * scal + 'px' }}
                >
                  {deslitt[0].des4}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
