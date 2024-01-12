import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import React, { useState } from 'react'
import banner from '../../assets/banner.png'
import png1 from './img/png1.png'

export default function App(props) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div>
      <div className="legalService">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
        />
        <div className="banner" onClick={() => setIsShow(false)}>
          <img src={banner} alt="banner" />
          <div className="aboutText">
            <div className="gy">法律服务</div>
            <div className="sj">
              以专业视角，应对各种复杂需求 业务电话：400-651-0001
            </div>
          </div>
        </div>
        <div className="content" onClick={() => setIsShow(false)}>
          <div className="boxList">
            <div className="box11 active">
              <img src={png1} alt="" />
              <div className="title">刑事辩护</div>
              <div className="msg">
                <div>
                  江苏竭能法律咨询服务有限公司为保证刑事诉讼部的案件质量，用整个团队的智慧和力量为当事人辩护。竭...
                </div>
                <div>受理数量：111个</div>
                咨询人数：393453454次
              </div>
              <div className="btn">立即咨询</div>
            </div>
            <div className="box11">
              <img src={png1} alt="" />
              <div className="title">刑事辩护</div>
              <div className="msg">
                <div>
                  江苏竭能法律咨询服务有限公司为保证刑事诉讼部的案件质量，用整个团队的智慧和力量为当事人辩护。竭...
                </div>
                <div>受理数量：111个</div>
                咨询人数：393453454次
              </div>
              <div className="btn">立即咨询</div>
            </div>
            <div className="box11">
              <img src={png1} alt="" />
              <div className="title">刑事辩护</div>
              <div className="msg">
                <div className="div">
                  江苏竭能法律咨询服务有限公司为保证刑事诉讼部的案件质量，用整个团队的智慧和力量为当事人辩护。啊实打实大师的阿大声道
                </div>
                <div>受理数量：111个</div>
                咨询人数：393453454次
              </div>
              <div className="btn">立即咨询</div>
            </div>
            <div className="box11">
              <img src={png1} alt="" />
              <div className="title">刑事辩护</div>
              <div className="msg">
                <div>
                  江苏竭能法律咨询服务有限公司为保证刑事诉讼部的案件质量，用整个团队的智慧和力量为当事人辩护。竭...
                </div>
                <div>受理数量：111个</div>
                咨询人数：393453454次
              </div>
              <div className="btn">立即咨询</div>
            </div>
            <div className="box11">
              <img src={png1} alt="" />
              <div className="title">刑事辩护</div>
              <div className="msg">
                <div>
                  江苏竭能法律咨询服务有限公司为保证刑事诉讼部的案件质量，用整个团队的智慧和力量为当事人辩护。竭...
                </div>
                <div>受理数量：111个</div>
                咨询人数：393453454次
              </div>
              <div className="btn">立即咨询</div>
            </div>
            <div className="box11">
              <img src={png1} alt="" />
              <div className="title">刑事辩护</div>
              <div className="msg">
                <div>
                  江苏竭能法律咨询服务有限公司为保证刑事诉讼部的案件质量，用整个团队的智慧和力量为当事人辩护。竭...
                </div>
                <div>受理数量：111个</div>
                咨询人数：393453454次
              </div>
              <div className="btn">立即咨询</div>
            </div>
          </div>
          <div className="formBox">
            <div className="title">向律师提问</div>
            <div className="from">
              <div className="item">
                <div className="left">请输入标题:</div>
                <div className="right">
                  <input type="text" />
                </div>
              </div>
              <div className="item">
                <div className="left">请输入您的法律咨询问题:</div>
                <div className="right textarea">
                  <textarea name="" id="" rows={8}></textarea>
                </div>
              </div>
              <div className="item">
                <div className="left">请输入手机号:</div>
                <div className="right">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="save">提交问题</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
