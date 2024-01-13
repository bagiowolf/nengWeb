import './App.css'
import React, { useState } from 'react'
import banner from '../../assets/banner.png'

import Header from '../Header/App'
import Footer from '../Footer/App'

import png1 from './img/png1.png'
import png2 from './img/png2.png'
export default function App(props) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className="legalServiceInfo">
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
        <div className="type">
          <div className="title">{props.info}</div>
          <div className="typeBox">
            <div className="left">
              <div className="img">
                <img src={png1} alt="" />
              </div>
            </div>
            <div className="right">
              <div className="top">
                <img src={png2} alt="" />
                <div className="title">{props.info}</div>
              </div>
              <div className="bottom">
                江苏竭能法律咨询服务有限公司为保证刑事诉讼部的案件质量，用整个团队的智慧和力量为当事人辩护。竭能律所的律师们，在长期执业的过程中，一直以精湛的业务和极度责任心、敬业精神为当事人辩护，并得到了广大群众的认可。
                江苏竭律的服务项目如下：
                1、在侦查阶段为当事人提供法律帮助：会见犯罪嫌疑人，了解涉嫌罪名和有关案件的情况，为犯罪嫌疑人提供法律咨询，为犯罪嫌疑人申请取保候审，代理申诉和控告
                2、审查起诉阶段为犯罪嫌疑人辩护：查阅、摘抄、复制案件有关诉讼文书、技术性鉴定材料，与犯罪嫌疑人会见和通信，调查和收集有关证据材料，向检察机关提出相关意见
                3、审判阶段为被告人辩护
                ：在一审、二审过程中，查阅、摘抄、复制案件有关材料；与被告人会见和通信，调查和收集证据，参加法庭审理，提出被告人无罪或罪轻的辩护意见
                4、死刑复核阶段为被告人辩护：与被告人会见和通信，调查和收集证据，提出被告人无罪或罪轻或不应核准死刑的辩护意见
                5、代理申诉案件：代为制作申诉材料，代为再审立案，参与再审案件的辩护
                6、 代理刑事案件：
                在自诉和公诉案件中代理举报、指控犯罪，担任附带民事诉讼当事人的诉讼代理人。
              </div>
            </div>
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
  )
}
