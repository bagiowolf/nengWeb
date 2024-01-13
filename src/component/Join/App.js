import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from '../../assets/banner.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import png4 from './img/png4.png'
import png5 from './img/png5.png'
import png6 from './img/png6.png'
import png7 from './img/png7.png'
import png8 from './img/png8.png'
import png9 from './img/png9.png'
import png10 from './img/png10.png'
import png11 from './img/png11.png'
import png12 from './img/png12.png'
import png13 from './img/png13.png'
import png14 from './img/png14.png'
import png15 from './img/png15.png'
import png16 from './img/png16.png'

export default function App(props) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <div className="join">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
        />
        <div className="banner" onClick={() => setIsShow(false)}>
          <img src={banner} alt="banner" />
          <div className="aboutText">
            <div className="gy">竭律法务全国招商加盟</div>
            <div className="sj">
              <div style={{ marginBottom: '10px' }}>
                人人参与法治建设 引领法律服务行业
              </div>
              0门槛 轻资产 高回报 50平
            </div>
          </div>
        </div>

        <div className="content" onClick={() => setIsShow(false)}>
          <div className="box1">
            <div className="title">竭律法务加盟前景</div>
            <div className="litte">法律服务市场需求大</div>
            <div className="msg">
              全国范围内执业律师约50万人，律师事务所约3.3万所。以全国14亿人口为例，中国人口与执业律师的比例仅为3000:1！2020年全国人民法院受理案件超14518468件，2021年全国人民法院受理案件超16612893件，2022年全国法院受理案件超3300万件，随着人们的法律意识逐步上升，法律诉求也在成倍数增长，当然这其中还不包括仲裁案件、调解结案等等，再加上各类中小企业在我国企业占比高达99%，据不完全统计，有85%的中小企业并没有聘请法律顾问或者没有属于自己的法务部门，在经营过程中会遇到种种棘手的法律问题。
            </div>
          </div>
          <div className="box2">
            <div className="title">竭律法务加盟优势</div>
            <div className="msg">
              <div className="top">
                <div className="div">
                  <img src={png4} alt="" />
                  <div>
                    <div className="nn">价格优势</div>
                    <div>
                      只需投入少量启动资金即可开展业务维护运作，资金压力小，低成本，低风险
                    </div>
                  </div>
                </div>
                <div className="div">
                  <img src={png5} alt="" />
                  <div>
                    <div className="nn">平台优势</div>
                    <div>
                      竭律法务系一站式法律服务平台，我们提供大量案源精准客户，加盟即可享稳定收益
                    </div>
                  </div>
                </div>
                <div className="div">
                  <img src={png6} alt="" />
                  <div>
                    <div className="nn">品牌优势</div>
                    <div>
                      成立十余年的运营经验，专业运营团队操盘，竭律品牌业内可查，公司发展潜力巨大
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="div">
                  <img src={png7} alt="" />
                  <div>
                    <div className="nn">专业优势</div>
                    <div>
                      竭律法务团队提供全方面、全方位、全领域专业法律服务人才为加盟商拓展护航
                    </div>
                  </div>
                </div>
                <div className="div">
                  <img src={png8} alt="" />
                  <div>
                    <div className="nn">培训优势</div>
                    <div>
                      培训流程高度完善，培训部与运营部提供理论与实操全程培训，帮助代理商项目落地与运营
                    </div>
                  </div>
                </div>
                <div className="div">
                  <img src={png9} alt="" />
                  <div>
                    <div className="nn">服务</div>
                    <div>
                      不断优化服务质量，不断提高服务效率，不断引进法律人才，竭律真正的做到售前售后无忧
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="title">竭律法务加盟支持</div>
            <div className="shu">
              <div className="boxList">
                <div className="box">
                  <img src={png1} alt="" />
                  <div className="text white h180">
                    <div className="big">服务支持</div>
                    <div className="msg">
                      总部提供专业的产品售前、售中、售后服务，为客户解决关于公司产品与服务内容的问题，深度挖掘客户潜在需求，及时反馈相关信息给相关人员
                    </div>
                  </div>
                </div>
                <div className="box">
                  <img src={png2} alt="" />
                  <div className="text">
                    <div className="big">宣发支持</div>
                    <div className="msg">
                      为分公司提供全媒体平台的宣发策划，搭建新媒体与自媒体矩阵并进行品牌宣传和营销，优化品牌产品的总价值与竞争力，提高客单量与用户转化率
                    </div>
                  </div>
                </div>
                <div className="box">
                  <img src={png3} alt="" />
                  <div className="text white">
                    <div className="big">系统支持</div>
                    <div className="msg">
                      为分公司执行平台数据库的操作需求，提供平台系统的相关规划、设计、建议，及时反馈系统客制化功能的开发、升级、迭代，持续进行跟踪和支持
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxList">
                <div className="box">
                  <img src={png10} alt="" />
                  <div className="text white h180">
                    <div className="big">培训支持</div>
                    <div className="msg">
                      总部会针对专业岗位提供专业知识与技能培训，提高员工业务能力与职业素养，并为员工提供公司规章制度的培训，使员工更了解、适应工作环境
                    </div>
                  </div>
                </div>
                <div className="box">
                  <img src={png11} alt="" />
                  <div className="text">
                    <div className="big">管理支持</div>
                    <div className="msg">
                      为服务商提供依靠完善的企业管理制度和企业运营框架进行的员工管理，提高员工的工作效率与工作激情，搭建员工工作的思维框架和逻辑体系，有效促进分公司绩效的增长
                    </div>
                  </div>
                </div>
                <div className="box">
                  <img src={png12} alt="" />
                  <div className="text white">
                    <div className="big">品牌支持</div>
                    <div className="msg">
                      规划以核心价值为中心的品牌识别系统，持续优化品牌战略与架构，进行理性的延伸扩张，为分公司提供品牌营销工具的使用且不断升级迭代，并进行科学的管理
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxList">
                <div className="box">
                  <img src={png13} alt="" />
                  <div className="text white h180">
                    <div className="big">技术支持</div>
                    <div className="msg">
                      为分公司提供产品技术支持与服务技术支持，优化平台系统的运营与维护质量，给予专业的售前中后服务，提高用户的使用体验，促进用户留存率的增长
                    </div>
                  </div>
                </div>
                <div className="box">
                  <img src={png14} alt="" />
                  <div className="text">
                    <div className="big">运营支持</div>
                    <div className="msg">
                      开展运营中数据分析与管理工作，及时提供市场分析的反馈，整理销售数据及市场趋势，指导分公司销售任务的执行，协助制定当地销售策略并组织执行
                    </div>
                  </div>
                </div>
                <div className="box">
                  <img src={png15} alt="" />
                  <div className="text white">
                    <div className="big">物料支持</div>
                    <div className="msg">
                      企业画册、产品宣传折页、服务杯子、合同、服务牌匾、名片、工牌、文件夹、笔记本等
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box4">
            <div className="left">
              <div className="tj">竭律法务加盟条件</div>
              <div className="line"></div>
              <div className="zy">注意事项</div>
            </div>
            <div className="right">
              <div>01、具有承担民事责任能力的公司或者个人  </div>
              <div>02、具有一定的社会资源关系和启动资金  </div>
              <div>03、认同法千家的经营模式以及经营理念  </div>
              <div>04、征信状况良好，近五年内无失信记录  </div>
              <div>05、有销售团队管理经验</div>
            </div>
          </div>
        </div>
        <div className="box5">
          <div className="title">竭能法务加盟流程</div>
          <img src={png16} alt="" className="png16" />
          <div className="lb">
            <div className="lbbox">
              <div className="num">04</div>
              <div className="lib">签订加盟</div>
              <div className="msg">双方确认考察结果无争议，正式签订合同。</div>
            </div>
            <div className="lbbox">
              <div className="num">05</div>
              <div className="lib">缴纳费用</div>
              <div className="msg">
                投资者按所选择的投资类型向总部交纳相关的费用。
              </div>
            </div>
            <div className="lbbox">
              <div className="num">06</div>
              <div className="lib">总部培训</div>
              <div className="msg">
                总部安排投资者进行相关培训，培训合格后颁发授权书。
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
