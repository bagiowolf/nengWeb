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
      <div className="PersonalData">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
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
        <div className="content" onClick={() => setIsShow(false)}>
          <div className="info">
            <div className="left">
              <div className="img">
                <img src={png1} alt="" />
              </div>
              <div className="name">律师名称</div>
              <div className="line"></div>
              <div className="num">
                <div>
                  帮助人数:<span>123456人</span>
                </div>
                <div>
                  咨询人数:<span>123456人</span>
                </div>
              </div>
              <div className="zx">在线咨询</div>
            </div>
            <div className="right">
              <div className="zw">
                <div className="title">律师名称【职位】个人资料</div>
                <div className="msg">
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
              <div className="pj">
                <div className="title">客户评价</div>
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
          <div className="formBox">
            <div className="title">向吴斌主任提问</div>
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
      {/* <div className="mobile">
        <Header
          isShow={isShow}
          onSetIsShow={setIsShow}
          state={props.state}
          onSetState={props.onSetState}
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
        <div className="content" onClick={() => setIsShow(false)}></div>
      </div> */}
    </div>
  )
}
