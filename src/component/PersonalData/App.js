import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import React, { useState } from 'react'
import banner from '../../assets/banner.png'
import png1 from './img/png1.png'
import Form from '../Form/App'

export default function App(props) {
  let scal = props.windowWidthValue / 1919

  const [isShow, setIsShow] = useState(false)
  const activeInfo = props.activeInfo
  console.log(activeInfo)
  return (
    <div>
      <div className="PersonalData">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
          windowWidthValue={props.windowWidthValue}
        />
        <div className="banner" onClick={() => setIsShow(false)}>
          <img src={banner} alt="banner" />
          <div className="aboutText">
            <div className="gy">律师团队</div>
            <div className="sj">
              以专业视角，应对各种复杂需求 业务电话：400-651-0001
            </div>
          </div>
        </div>
        <div
          className="content"
          onClick={() => setIsShow(false)}
          style={{ padding: `${100 * scal}px ${360 * scal}px` }}
        >
          <div className="info">
            <div
              className="left"
              style={{ width: 190 * scal + 'px', height: 333 * scal + 'px' }}
            >
              <div
                className="img"
                style={{
                  width: 125 * scal + 'px',
                  height: 125 * scal + 'px',
                  margin: `${30 * scal}px 0 ${10 * scal}px 0`
                }}
              >
                <img src={activeInfo.img} alt="" />
              </div>
              <div className="name" style={{ fontSize: 14 * scal + 'px' }}>
                {activeInfo.name}
              </div>
              <div
                className="line"
                style={{ width: 60 * scal + 'px', margin: `${15 * scal}px 0` }}
              ></div>
              <div className="num" style={{ fontSize: 14 * scal + 'px' }}>
                <div>
                  帮助人数:<span>123456人</span>
                </div>
                <div>
                  咨询人数:<span>123456人</span>
                </div>
              </div>
              <div
                className="zx"
                style={{ fontSize: 16 * scal + 'px', width: 120 * scal + 'px' }}
              >
                在线咨询
              </div>
            </div>
            <div className="right" style={{ width: 976 * scal + 'px' }}>
              <div className="zw">
                <div
                  className="title"
                  style={{
                    fontSize: 38 * scal + 'px',
                    marginBottom: 33 * scal + 'px'
                  }}
                >
                  {activeInfo.name}【{activeInfo.type}】个人资料
                </div>
                <div
                  className="msg"
                  style={{
                    fontSize: 16 * scal + 'px',
                    lineHeight: 20 * scal + 'px'
                  }}
                >
                  吴斌律师，广东广强律师事务所，刑事律师。国内知名大学，法律专业，研习法律、实践十余年，专注于诈骗犯罪研究与辩护、经济犯罪研究与辩护，及重大刑事案件辩护。
                  <br />
                  <br />
                  经典案例：保健品诈骗案、投资类型诈骗案、“借贷型”诈骗案、电信网络诈骗案。
                  <br />
                  <br />
                  “拿起法律武器，监督法律天平的平衡。——我们未曾远离。”
                  <br />
                  <br />
                  1.广东高某某被控诈骗罪一案（罪轻辩护——非法证据排除）
                  <br />
                  <br />
                  由公安部、最高人民检察院、最高人民法院督办的陈某某等人涉嫌诈骗罪一案，本案被中央电视台、各省电视台以及各大新闻媒体报道过。本律师从侦查阶段介入此案，直至一审审判，案件历时一年多，多次依法会见以及查阅全部卷宗材料后，为当事人作罪轻辩护，为当事人争取从犯、坦白、减少诈骗数额及提出非法证据排除等。
                  <br />
                  <br />
                  2.广东赵某某被控诈骗罪、妨害信用卡管理罪一案（获得轻判——罪轻辩护——打掉一个罪名）
                </div>
              </div>
              <div className="pj" style={{ marginTop: 40 * scal + 'px' }}>
                <div
                  className="title"
                  style={{
                    fontSize: 38 * scal + 'px',
                    marginBottom: 33 * scal + 'px'
                  }}
                >
                  客户评价
                </div>
                <div className="msg">
                  <span>李先生180****1347:</span>
                  律师从业经验丰富，办案精准，比较专业，感谢帮我打赢了官司
                  <br />
                  <br />
                  <span>王女士180****1347:</span>
                  吴律办案非常用心，为我来回奔波！
                  <br />
                  <br />
                  <span>张女士180****1347:</span>
                  讲的非常不错，透彻。专业性极强，都是干货
                  <br />
                  <br />
                  <span>李先生180****1347:</span>
                  律师从业经验丰富，办案精准，比较专业，感谢帮我打赢了官司
                  <br />
                  <br />
                  <span>王女士180****1347:</span>
                  吴律办案非常用心，为我来回奔波！
                  <br />
                  <br />
                  <span>张女士180****1347:</span>
                  讲的非常不错，透彻。专业性极强，都是干货
                </div>
              </div>
            </div>
          </div>
          <Form
            name={activeInfo.name}
            sourcePage={`律师团队-${activeInfo.name}`}
          />
        </div>
        <Footer windowWidthValue={props.windowWidthValue} />
      </div>
    </div>
  )
}
