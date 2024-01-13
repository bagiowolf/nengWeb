import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from '../../assets/banner.png'

export default function App(props) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <div className="newsInfo">
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
          <div className="title">
            不断提升服务国家战略和实体经济的能力——从新时代发展实践看中国特色期货市场成长之路{' '}
          </div>
          <div className="time">2023-11-02</div>
          <div className="msg">
            期货市场，不为普通百姓所熟悉的“小众市场”，却因天然的商品交易属性，成为实体企业管理生产经营风险的专业金融市场。
            我国现代期货市场已有30多年的发展历史。进入新时代，在以习近平同志为核心的党中央坚强领导下，我国金融事业持续迈向高质量发展，期货市场以专业所长服务实体所需，以创新发展支持国家战略。
            期货市场，不为普通百姓所熟悉的“小众市场”，却因天然的商品交易属性，成为实体企业管理生产经营风险的专业金融市场。
            我国现代期货市场已有30多年的发展历史。进入新时代，在以习近平同志为核心的党中央坚强领导下，我国金融事业持续迈向高质量发展，期货市场以专业所长服务实体所需，以创新发展支持国家战略。
            我国现代期货市场已有30多年的发展历史。进入新时代，在以习近平同志为核心的党中央坚强领导下，我国金融事业持续迈向高质量发展，期货市场以专业所长服务实体所需，以创新发展支持国家战略。
          </div>
          <div className="creat">编辑：XXX</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
