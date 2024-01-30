import React, { useState } from 'react'
import './App.css'
import Header from '../Header/App'
import Footer from '../Footer/App'
import banner from './img/Group 14.png'
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
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Pagination } from 'swiper/modules'
import zx from '../Index/img/zx.png'
import box1 from './img/image 5.png'
import jg from './img/jg.svg'
import pt from './img/pt.svg'
import pp from './img/pp.svg'
import zy from './img/zy.svg'
import px from './img/px.svg'
import fw from './img/fw.svg'
import nl from './img/nl.svg'
import zj from './img/zj.svg'
import ln from './img/ln.svg'
import jl from './img/jl.svg'
import jy from './img/jy.svg'
let arr = [
  {
    title: '价格优势',
    text: '只需投入少量启动资金即可开展业务维护运作，资金压力小，低成本，低风险',
    img: jg
  },
  {
    title: '平台优势',
    text: '竭律法务系一站式法律服务平台，我们提供大量案源精准客户，加盟即可享稳定收益',
    img: pt
  },
  {
    title: '品牌优势',
    text: '成立十余年的运营经验，专业运营团队操盘，竭律品牌业内可查，公司发展潜力巨大',
    img: pp
  },
  {
    title: '专业优势',
    text: '竭律法务团队提供全方面、全方位、全领域专业法律服务人才为加盟商拓展护航',
    img: zy
  },
  {
    title: '培训优势',
    text: '培训流程高度完善，培训部与运营部提供理论与实操全程培训，帮助代理商项目落地与运营',
    img: px
  },
  {
    title: '服务优势',
    text: '不断优化服务质量，不断提高服务效率，不断引进法律人才，竭律真正的做到售前售后无忧',
    img: fw
  }
]
let tj = [
  { img: nl, text: '具有承担民事责任能力的公司或者个人', lit: '01.' },
  { img: zj, text: '具有一定的社会资源关系和启动资金', lit: '02.' },
  { img: ln, text: '认同法千家的经营模式以及经营理念', lit: '03.' },
  { img: jl, text: '征信状况良好，近五年内无失信记录', lit: '04.' },
  { img: jy, text: '有销售团队管理经验', lit: '05.' }
]

const lc = [
  {
    title: '加盟咨询',
    msg: '投资者以电话、传真、网上留言等方式向总部专业的招商顾问咨询相关合作事项，索取有关资料。'
  },
  {
    title: '项目考察',
    msg: '投资者到总部所在地进行项目考察，并与总部工作人员进行业务交流。'
  },
  {
    title: '资质审核',
    msg: '总部对投资者进行审核，确认投资者的合作资格。'
  },
  {
    title: '签订加盟',
    msg: '双方确认考察结果无争议，正式签订合同。'
  },
  {
    title: '缴纳费用',
    msg: '投资者按所选择的投资类型向总部交纳相关的费用。'
  },
  {
    title: '总部培训',
    msg: '总部安排投资者进行相关培训，培训合格后颁发授权书。'
  },
  {
    title: '店面装修',
    msg: '总部为加盟者提供装修指导，与设计指导。'
  },
  {
    title: '开业',
    msg: '总部持续关注加盟者的经营情况，并给予经营指导与帮助。'
  }
]
export default function App(props) {
  let scal = props.windowWidthValue / 1920

  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <div className="join">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
          windowWidthValue={props.windowWidthValue}
        />
        <div className="zx">
          <img src={zx} alt="" />
          <a href="https://ada.baidu.com/imlp/?imid=b694179300c687ccf883b0fd6be0f2c4#back1705761185685">
            在线咨询
          </a>
        </div>
        <div className="banner" onClick={() => setIsShow(false)}>
          <img
            src={banner}
            alt="banner"
            style={{ height: 340 * scal + 'px' }}
          />
          <div
            className="aboutText"
            style={{
              left: 360 * scal + 'px',
              color: '#fff',
              textAlign: 'left'
            }}
          >
            <div className="pc">
              <div
                style={{ fontSize: 48 * scal + 'px', fontWeight: 700 * scal }}
              >
                竭律法务全国招商加盟
              </div>
              <div
                className="gy"
                style={{
                  fontSize: 24 * scal + 'px',
                  margin: `${10 * scal}px 0 ${20 * scal}px`,
                  color: '#fff'
                }}
              >
                人人参与法治建设 引领法律服务行业
              </div>
              <div className="sj">
                <div
                  style={{
                    padding: `0 ${15 * scal}px`,
                    height: 40 * scal + 'px',
                    lineHeight: 40 * scal + 'px',
                    fontSize: 18 * scal + 'px',
                    marginRight: 15 * scal + 'px'
                  }}
                >
                  0门槛
                </div>
                <div
                  style={{
                    padding: `0 ${15 * scal}px`,
                    height: 40 * scal + 'px',
                    lineHeight: 40 * scal + 'px',
                    fontSize: 18 * scal + 'px',
                    marginRight: 15 * scal + 'px'
                  }}
                >
                  轻投资
                </div>
                <div
                  style={{
                    padding: `0 ${15 * scal}px`,
                    height: 40 * scal + 'px',
                    lineHeight: 40 * scal + 'px',
                    fontSize: 18 * scal + 'px',
                    marginRight: 15 * scal + 'px'
                  }}
                >
                  高回报
                </div>
                <div
                  style={{
                    padding: `0 ${15 * scal}px`,
                    height: 40 * scal + 'px',
                    lineHeight: 40 * scal + 'px',
                    fontSize: 18 * scal + 'px',
                    marginRight: 15 * scal + 'px'
                  }}
                >
                  50平
                </div>
              </div>
            </div>
            <div className="ph">
              <div className="gy">加盟招商</div>
              <div className="sj">
                <div>以专业视角，应对各种复杂需求 </div>
                业务电话：400-652-0001
              </div>
            </div>
          </div>
        </div>

        <div className="content" onClick={() => setIsShow(false)} style={{}}>
          <div
            className="box1"
            style={{
              height: 516 * scal + 'px',
              margin: `${140 * scal}px ${160 * scal}px ${185 * scal}px`
            }}
          >
            <img
              src={box1}
              alt=""
              style={{ width: 640 * scal + 'px', height: 410 * scal + 'px' }}
            />
            <div
              className="right"
              style={{
                padding: `${80 * scal}px ${80 * scal}px ${60 * scal}px ${
                  360 * scal
                }px`,
                width: 1270 * scal + 'px',
                height: 516 * scal + 'px'
              }}
            >
              <div
                className="title"
                style={{
                  fontSize: 50 * scal + 'px',
                  height: 100 * scal + 'px',
                  lineHeight: 100 * scal + 'px',
                  marginBottom: 30 * scal + 'px'
                }}
              >
                竭律法务加盟前景
              </div>
              <div
                className="litte"
                style={{
                  fontSize: 24 * scal + 'px',
                  marginBottom: 10 * scal + 'px',
                  fontWeight: 700
                }}
              >
                法律服务市场需求大
              </div>
              <div
                className="msg"
                style={{
                  fontSize: 16 * scal + 'px',
                  lineHeight: 32 * scal + 'px',
                  textIndent: '2em'
                }}
              >
                全国范围内执业律师约50万人，律师事务所约3.3万所。以全国14亿人口为例，中国人口与执业律师的比例仅为3000:1！2020年全国人民法院受理案件超14518468件，2021年全国人民法院受理案件超16612893件，2022年全国法院受理案件超3300万件，随着人们的法律意识逐步上升，法律诉求也在成倍数增长，当然这其中还不包括仲裁案件、调解结案等等，再加上各类中小企业在我国企业占比高达99%，据不完全统计，有85%的中小企业并没有聘请法律顾问或者没有属于自己的法务部门，在经营过程中会遇到种种棘手的法律问题。
              </div>
            </div>
          </div>
          <div
            className="box2"
            style={{
              padding: `${80 * scal}px ${360 * scal}px ${100 * scal}px`
            }}
          >
            <div
              className="title"
              style={{
                fontSize: 50 * scal + 'px',
                height: 100 * scal + 'px',
                lineHeight: 100 * scal + 'px',
                marginBottom: 40 * scal + 'px',
                textAlign: 'center',
                color: '#4a4a4a'
              }}
            >
              竭律法务加盟优势
            </div>
            <div className="msg">
              <div className="top">
                {arr.map((item, index) => (
                  <div
                    className="div"
                    key={index}
                    style={{ marginBottom: index > 2 ? '' : 60 * scal + 'px' }}
                  >
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: 60 * scal + 'px',
                        height: 60 * scal + 'px',
                        marginRight: 20 * scal + 'px'
                      }}
                    />
                    <div>
                      <div
                        className="nn"
                        style={{
                          fontSize: 24 * scal + 'px',
                          marginBottom: 10 * scal + 'px',
                          color: '#333'
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: 16 * scal + 'px',
                          lineHeight: 26 * scal + 'px',
                          color: '#757575',
                          width: 280 * scal + 'px'
                        }}
                      >
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="box3"
            style={{
              padding: `${80 * scal}px ${360 * scal}px ${100 * scal}px`
            }}
          >
            <div
              className="title"
              style={{
                fontSize: 50 * scal + 'px',
                marginBottom: 15 * scal + 'px',
                height: 100 * scal + 'px',
                lineHeight: 100 * scal + 'px',
                textAlign: 'center',
                color: '#4a4a4a'
              }}
            >
              竭律法务加盟支持
            </div>
            <div className="shu">
              <div className="boxList">
                <div
                  className="box"
                  style={{
                    marginBottom: 20 * scal + 'px',
                    width: 387 * scal + 'px',
                    height: 340 * scal + 'px'
                  }}
                >
                  <img
                    src={png1}
                    alt=""
                    style={{
                      width: 387 * scal + 'px',
                      height: 340 * scal + 'px'
                    }}
                  />
                  <div
                    className="text white h180"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: 20 * scal + 'px'
                    }}
                  >
                    <div
                      className="big"
                      style={{
                        fontSize: 24 * scal + 'px',
                        fontWeight: 700,
                        marginTop: 97 * scal + 'px'
                      }}
                    >
                      服务支持
                    </div>
                    <div
                      className="line"
                      style={{
                        width: 60 * scal + 'px',
                        margin: `${10 * scal}px 0 ${30 * scal}px`
                      }}
                    ></div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 16 * scal + 'px',
                        lineHeight: 26 * scal + 'px'
                      }}
                    >
                      总部提供专业的产品售前、售中、售后服务，为客户解决关于公司产品与服务内容的问题，深度挖掘客户潜在需求，及时反馈相关信息给相关人员
                    </div>
                  </div>
                </div>
                <div
                  className="box"
                  style={{
                    marginBottom: 20 * scal + 'px',
                    width: 387 * scal + 'px',
                    height: 430 * scal + 'px'
                  }}
                >
                  <img
                    src={png2}
                    alt=""
                    style={{
                      width: 387 * scal + 'px',
                      height: 430 * scal + 'px'
                    }}
                  />
                  <div
                    className="text"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: 20 * scal + 'px'
                    }}
                  >
                    <div
                      className="big"
                      style={{
                        fontSize: 24 * scal + 'px',
                        fontWeight: 700,
                        marginTop: 187 * scal + 'px'
                      }}
                    >
                      宣发支持
                    </div>
                    <div
                      className="line"
                      style={{
                        width: 60 * scal + 'px',
                        margin: `${10 * scal}px 0 ${30 * scal}px`
                      }}
                    ></div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 16 * scal + 'px',
                        lineHeight: 26 * scal + 'px'
                      }}
                    >
                      为分公司提供全媒体平台的宣发策划，搭建新媒体与自媒体矩阵并进行品牌宣传和营销，优化品牌产品的总价值与竞争力，提高客单量与用户转化率
                    </div>
                  </div>
                </div>
                <div
                  className="box"
                  style={{
                    marginBottom: 20 * scal + 'px',
                    width: 387 * scal + 'px',
                    height: 340 * scal + 'px'
                  }}
                >
                  <img
                    src={png3}
                    alt=""
                    style={{
                      width: 387 * scal + 'px',
                      height: 340 * scal + 'px'
                    }}
                  />
                  <div
                    className="text white"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: 20 * scal + 'px'
                    }}
                  >
                    <div
                      className="big"
                      style={{
                        fontSize: 24 * scal + 'px',
                        fontWeight: 700,
                        marginTop: 97 * scal + 'px'
                      }}
                    >
                      系统支持
                    </div>
                    <div
                      className="line"
                      style={{
                        width: 60 * scal + 'px',
                        margin: `${10 * scal}px 0 ${30 * scal}px`
                      }}
                    ></div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 16 * scal + 'px',
                        lineHeight: 26 * scal + 'px'
                      }}
                    >
                      为分公司执行平台数据库的操作需求，提供平台系统的相关规划、设计、建议，及时反馈系统客制化功能的开发、升级、迭代，持续进行跟踪和支持
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxList">
                <div
                  className="box"
                  style={{
                    marginBottom: 20 * scal + 'px',
                    width: 387 * scal + 'px',
                    height: 430 * scal + 'px'
                  }}
                >
                  <img
                    src={png10}
                    alt=""
                    style={{
                      width: 387 * scal + 'px',
                      height: 430 * scal + 'px'
                    }}
                  />
                  <div
                    className="text white h180"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: 20 * scal + 'px'
                    }}
                  >
                    <div
                      className="big"
                      style={{
                        fontSize: 24 * scal + 'px',
                        fontWeight: 700,
                        marginTop: 187 * scal + 'px'
                      }}
                    >
                      培训支持
                    </div>
                    <div
                      className="line"
                      style={{
                        width: 60 * scal + 'px',
                        margin: `${10 * scal}px 0 ${30 * scal}px`
                      }}
                    ></div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 16 * scal + 'px',
                        lineHeight: 26 * scal + 'px'
                      }}
                    >
                      总部会针对专业岗位提供专业知识与技能培训，提高员工业务能力与职业素养，并为员工提供公司规章制度的培训，使员工更了解、适应工作环境
                    </div>
                  </div>
                </div>
                <div
                  className="box"
                  style={{
                    marginBottom: 20 * scal + 'px',
                    width: 387 * scal + 'px',
                    height: 340 * scal + 'px'
                  }}
                >
                  <img
                    src={png11}
                    alt=""
                    style={{
                      width: 387 * scal + 'px',
                      height: 340 * scal + 'px'
                    }}
                  />
                  <div
                    className="text"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: 20 * scal + 'px'
                    }}
                  >
                    <div
                      className="big"
                      style={{
                        fontSize: 24 * scal + 'px',
                        fontWeight: 700,
                        marginTop: 97 * scal + 'px'
                      }}
                    >
                      管理支持
                    </div>
                    <div
                      className="line"
                      style={{
                        width: 60 * scal + 'px',
                        margin: `${10 * scal}px 0 ${30 * scal}px`
                      }}
                    ></div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 16 * scal + 'px',
                        lineHeight: 26 * scal + 'px'
                      }}
                    >
                      为服务商提供依靠完善的企业管理制度和企业运营框架进行的员工管理，提高员工的工作效率与工作激情，搭建员工工作的思维框架和逻辑体系，有效促进分公司绩效的增长
                    </div>
                  </div>
                </div>
                <div
                  className="box"
                  style={{
                    marginBottom: 20 * scal + 'px',
                    width: 387 * scal + 'px',
                    height: 340 * scal + 'px'
                  }}
                >
                  <img
                    src={png12}
                    alt=""
                    style={{
                      width: 387 * scal + 'px',
                      height: 340 * scal + 'px'
                    }}
                  />
                  <div
                    className="text white"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: 20 * scal + 'px'
                    }}
                  >
                    <div
                      className="big"
                      style={{
                        fontSize: 24 * scal + 'px',
                        fontWeight: 700,
                        marginTop: 97 * scal + 'px'
                      }}
                    >
                      品牌支持
                    </div>
                    <div
                      className="line"
                      style={{
                        width: 60 * scal + 'px',
                        margin: `${10 * scal}px 0 ${30 * scal}px`
                      }}
                    ></div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 16 * scal + 'px',
                        lineHeight: 26 * scal + 'px'
                      }}
                    >
                      规划以核心价值为中心的品牌识别系统，持续优化品牌战略与架构，进行理性的延伸扩张，为分公司提供品牌营销工具的使用且不断升级迭代，并进行科学的管理
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxList">
                <div
                  className="box"
                  style={{
                    marginBottom: 20 * scal + 'px',
                    width: 387 * scal + 'px',
                    height: 340 * scal + 'px'
                  }}
                >
                  <img
                    src={png13}
                    alt=""
                    style={{
                      width: 387 * scal + 'px',
                      height: 340 * scal + 'px'
                    }}
                  />
                  <div
                    className="text white h180"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: 20 * scal + 'px'
                    }}
                  >
                    <div
                      className="big"
                      style={{
                        fontSize: 24 * scal + 'px',
                        fontWeight: 700,
                        marginTop: 97 * scal + 'px'
                      }}
                    >
                      技术支持
                    </div>
                    <div
                      className="line"
                      style={{
                        width: 60 * scal + 'px',
                        margin: `${10 * scal}px 0 ${30 * scal}px`
                      }}
                    ></div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 16 * scal + 'px',
                        lineHeight: 26 * scal + 'px'
                      }}
                    >
                      为分公司提供产品技术支持与服务技术支持，优化平台系统的运营与维护质量，给予专业的售前中后服务，提高用户的使用体验，促进用户留存率的增长
                    </div>
                  </div>
                </div>
                <div
                  className="box"
                  style={{
                    marginBottom: 20 * scal + 'px',
                    width: 387 * scal + 'px',
                    height: 430 * scal + 'px'
                  }}
                >
                  <img
                    src={png14}
                    alt=""
                    style={{
                      width: 387 * scal + 'px',
                      height: 430 * scal + 'px'
                    }}
                  />
                  <div
                    className="text"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: 20 * scal + 'px'
                    }}
                  >
                    <div
                      className="big"
                      style={{
                        fontSize: 24 * scal + 'px',
                        fontWeight: 700,
                        marginTop: 187 * scal + 'px'
                      }}
                    >
                      宣发支持
                    </div>
                    <div
                      className="line"
                      style={{
                        width: 60 * scal + 'px',
                        margin: `${10 * scal}px 0 ${30 * scal}px`
                      }}
                    ></div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 16 * scal + 'px',
                        lineHeight: 26 * scal + 'px'
                      }}
                    >
                      为分公司提供全媒体平台的宣发策划，搭建新媒体与自媒体矩阵并进行品牌宣传和营销，优化品牌产品的总价值与竞争力，提高客单量与用户转化率
                    </div>
                  </div>
                </div>
                <div
                  className="box"
                  style={{
                    marginBottom: 20 * scal + 'px',
                    width: 387 * scal + 'px',
                    height: 340 * scal + 'px'
                  }}
                >
                  <img
                    src={png15}
                    alt=""
                    style={{
                      width: 387 * scal + 'px',
                      height: 340 * scal + 'px'
                    }}
                  />
                  <div
                    className="text white"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: 20 * scal + 'px'
                    }}
                  >
                    <div
                      className="big"
                      style={{
                        fontSize: 24 * scal + 'px',
                        fontWeight: 700,
                        marginTop: 97 * scal + 'px'
                      }}
                    >
                      物料支持
                    </div>
                    <div
                      className="line"
                      style={{
                        width: 60 * scal + 'px',
                        margin: `${10 * scal}px 0 ${30 * scal}px`
                      }}
                    ></div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 16 * scal + 'px',
                        lineHeight: 26 * scal + 'px'
                      }}
                    >
                      企业画册、产品宣传折页、服务杯子、合同、服务牌匾、名片、工牌、文件夹、笔记本等
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="box4"
            style={{
              padding: `${60 * scal}px ${160 * scal}px ${100 * scal}px`
            }}
          >
            <div
              className="tj"
              style={{
                fontSize: 50 * scal + 'px',
                lineHeight: 100 * scal + 'px',
                textAlign: 'center',
                marginBottom: 30 * scal + 'px'
              }}
            >
              竭律法务加盟条件
            </div>
            <div className="right" style={{ fontSize: 24 * scal + 'px' }}>
              {tj.map((item, index) => (
                <div
                  className="boxx"
                  key={index}
                  style={{
                    width: 296 * scal + 'px',
                    height: 249 * scal + 'px',
                    padding: `${30 * scal}px ${30 * scal}px ${20 * scal}px`
                  }}
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      width: 50 * scal + 'px',
                      height: 50 * scal + 'px',
                      marginBottom: 15 * scal + 'px'
                    }}
                  />
                  <div
                    className="textt"
                    style={{
                      fontSize: 16 * scal + 'px',
                      color: '#333',
                      marginBottom: 30 * scal + 'px'
                    }}
                  >
                    {item.text}
                  </div>
                  <div
                    style={{
                      textAlign: 'right',
                      fontSize: 64 * scal + 'px',
                      color: '#f2f2f2',
                      fontWeight: 700,
                      bottom: 20 * scal + 'px',
                      right: 30 * scal + 'px'
                    }}
                    className="lit"
                  >
                    {item.lit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="box5" style={{ height: 1100 * scal + 'px' }}>
          <img
            src={png16}
            alt=""
            className="png16"
            style={{ height: 1100 * scal + 'px' }}
          />
          <div className="bo16" style={{ width: 1110 * scal + 'px' }}>
            <div
              className="title"
              style={{
                fontSize: 50 * scal + 'px',
                marginBottom: 16 * scal + 'px',
                marginTop: 60 * scal + 'px',
                marginLeft: 60 * scal + 'px',
                lineHeight: 100 * scal + 'px'
              }}
            >
              竭能法务加盟流程
            </div>

            <div className="lb" style={{}}>
              {lc.map((item, index) => (
                <div
                  key={index}
                  className="lc"
                  style={{
                    marginBottom: 35 * scal + 'px',
                    left: -35 * scal + 'px'
                  }}
                >
                  <div
                    className="num"
                    style={{
                      width: 60 * scal + 'px',
                      height: 60 * scal + 'px',
                      fontSize: 28 * scal + 'px',
                      marginRight: 40 * scal + 'px'
                    }}
                  >
                    <span>{index + 1}</span>
                  </div>
                  <div className="rig" style={{ width: 682 * scal + 'px' }}>
                    <div
                      className="tit"
                      style={{
                        fontSize: 28 * scal + 'px',
                        lineHeight: 42 * scal + 'px',
                        marginBottom: 4 * scal + 'px'
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="msgg"
                      style={{
                        fontSize: 18 * scal + 'px',
                        lineHeight: 26 * scal + 'px'
                      }}
                    >
                      {item.msg}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ transform: 'translateY(-5px)' }}>
          <Footer
            windowWidthValue={props.windowWidthValue}
            onSetState={props.onSetState}
          />
        </div>
      </div>
    </div>
  )
}
