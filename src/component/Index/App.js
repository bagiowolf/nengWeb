import React, { useEffect, useRef, useState } from 'react'
import png1 from './img/banner-1.jpg'
import banner2 from './img/banner-2.jpg'
import png2 from './img/1.png'
import png3 from './img/2.png'
import png4 from './img/3.png'
import png5 from './img/4.png'
import png6 from './img/5.png'
import png7 from './img/领域.svg'
import png8 from './img/团队.svg'
import png9 from './img/优势.svg'
import png10 from './img/愿景/bg.png'
import png11 from './img/10.png'
import png12 from './img/11.svg'
import png13 from './img/12.png'
import png14 from './img/13.png'
import png15 from './img/14.svg'
import png16 from './img/15.png'
import png17 from './img/png4.png'
import png18 from './img/问题标题.svg'
import wenti1 from './img/wenti1.png'
import wenti2 from './img/wenti2.png'
import wenti3 from './img/wenti3.png'
import wenti4 from './img/wenti4.png'
import wenti5 from './img/wenti5.png'
import icon1 from './img/信用修复icon.png'
import icon2 from './img/法律服务icon.png'
import icon3 from './img/案源合作icon.png'
import icon4 from './img/招商加盟icon.png'
import toRight from './img/toRight.png'
import zybg from './img/专业领域bg-大.jpg'
import zybgx from './img/专业领域bg小.png'
import icon5 from './img/企业信用修复icon.png'
import icon6 from './img/法律服务icon1.png'
import icon7 from './img/律师合作icon.png'
import icon8 from './img/招商加盟icon1.png'
import team1 from './img/team/1.png'
import team2 from './img/team/2.png'
import team3 from './img/team/3.png'
import team4 from './img/team/4.png'
import team5 from './img/team/5.png'
import team6 from './img/team/6.png'
import team7 from './img/team/7.png'
import team8 from './img/team/8.png'
import ys from './img/优势/插图.png'
import ysbg from './img/优势/1.png'
import ys1 from './img/优势/社会群体-企业职工.png'
import ys2 from './img/优势/标准服务.png'
import ys3 from './img/优势/24小时.png'
import ys4 from './img/优势/一对一.png'
import ys5 from './img/优势/icon-yjtj.png'
import ys6 from './img/优势/四只团结手.png'
import yj from './img/愿景/logo.png'
import zx from './img/zx.png'

import './index.css'
import Footer from '../Footer/App'
import Header from '../Header/App'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Pagination } from 'swiper/modules'
import { post } from '../../utils/api/api'
import dayjs from 'dayjs'
import { get } from '../../utils/api/api'
import formatTime from '../../utils/formatTime/time'
import returnDom from '../../utils/returnDom'
import setTime from '../../utils/formatTime/time'
import NewsInfo from '../NewsInfo/App'
import CaseInfo from '../CaseInfo/App'

const NumberAnimation = ({ targetValue, isSplit }) => {
  const [currentValue, setCurrentValue] = useState(0)
  useEffect(() => {
    if (targetValue) {
      const animationDuration = 500 // 动画持续时间（毫秒）
      const framesPerSecond = 60 // 每秒渲染帧数
      const totalFrames = (animationDuration / 1000) * framesPerSecond
      const frameInterval = 1000 / framesPerSecond
      const increment = (targetValue - currentValue) / totalFrames

      let currentFrame = 0
      const intervalId = setInterval(() => {
        currentFrame++

        if (currentFrame <= totalFrames) {
          setCurrentValue((prevValue) => prevValue + increment)
        } else {
          setCurrentValue(targetValue)
          clearInterval(intervalId)
        }
      }, frameInterval)

      return () => clearInterval(intervalId)
    }
  }, [targetValue, currentValue])
  if (targetValue) {
    if (isSplit) {
      return <span>{Math.round(currentValue).toLocaleString()}</span>
    } else {
      return <span>{Math.round(currentValue)}</span>
    }
  } else {
    return 0
  }
}

const InfiniteScroll = ({ data }) => {
  const [scrolling, setScrolling] = useState(true)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current

    const handleScroll = () => {
      if (scrolling) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer

        // 检查是否滚动到底部
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          // 滚动到底部时重置到顶部
          scrollContainer.scrollTop = 0
        } else {
          // 没有到达底部，继续滚动
          scrollContainer.scrollTop += 2 // 滚动速度，根据需要调整
        }
      }
    }

    const scrollInterval = setInterval(handleScroll, 50)

    return () => {
      clearInterval(scrollInterval)
    }
  }, [scrolling])

  const handleMouseEnter = () => {
    setScrolling(false)
  }

  const handleMouseLeave = () => {
    setScrolling(true)
  }

  return (
    <div
      ref={scrollContainerRef}
      style={{ overflow: 'hidden', height: '200px', border: '1px solid #ccc' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {data.map((item, index) => (
        <div key={index} style={{ padding: '10px' }}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default function App(props) {
  let scal = props.windowWidthValue / 1919
  const [activeInfo, setActiveInfo] = useState({})
  const setInfo = (info) => {
    setState(false)
    setActiveInfo(info)
  }
  let arr = [
    '实时预约：陆先生139****5158五十分钟前已经成功预约',
    '实时预约：陆先生139****5158五十分钟前已经成功预约',
    '实时预约：陆先生139****5158五十分钟前已经成功预约',
    '实时预约：陆先生139****5158五十分钟前已经成功预约',
    '实时预约：陆先生139****5158五十分钟前已经成功预约',
    '实时预约：陆先生139****5158五十分钟前已经成功预约',
    '实时预约：陆先生139****5158五十分钟前已经成功预约',
    '实时预约：陆先生139****5158五十分钟前已经成功预约',
    '实时预约：陆先生139****5158五十分钟前已经成功预约',
    '实时预约：陆先生139****5158五十分钟前已经成功预约'
  ]
  const chineseProvinces = [
    '江苏省',
    '北京市',
    '天津市',
    '河北省',
    '山西省',
    '内蒙古自治区',
    '辽宁省',
    '吉林省',
    '黑龙江省',
    '上海市',
    '浙江省',
    '安徽省',
    '福建省',
    '江西省',
    '山东省',
    '河南省',
    '湖北省',
    '湖南省',
    '广东省',
    '广西壮族自治区',
    '海南省',
    '重庆市',
    '四川省',
    '贵州省',
    '云南省',
    '西藏自治区',
    '陕西省',
    '甘肃省',
    '青海省',
    '宁夏回族自治区',
    '新疆维吾尔自治区',
    '台湾省',
    '香港特别行政区',
    '澳门特别行政区'
  ]

  const wentiList = [
    {
      title: '企业信用',
      msg: '招投标资格审查不过关、申请不到低息贷款、享受不到惠企政策、企业评优评奖被拒之门外',
      img: wenti1,
      toIndex: 2
    },
    {
      title: '个人信用',
      msg: '突然被反诈机关或金融机构冻结银行卡而手足无措，甚至惹上官司',
      img: wenti2,
      toIndex: 2
    },
    {
      title: '法律服务',
      msg: '商务合同纠纷、婚姻家庭纠纷、工伤事故争议、刑事辩护不利、交通事故追责、风险规避不当',
      img: wenti3,
      toIndex: 4
    },
    {
      title: '律师合作',
      msg: '懂专业有执照但找不到客户，老客户流失、新客户拓展难，代理费没有最低只有更低',
      img: wenti4,
      toIndex: 5
    },
    {
      title: '招商加盟',
      msg: '找不到方向，寻不到团队，得不到信任，发展前景迷茫，缺乏从零到壹的创业经验',
      img: wenti5,
      toIndex: 7
    }
  ]

  const setType = (type) => {
    props.onSetState(type)
  }
  const [state, setState] = useState(true)
  const [casestate, setcaseState] = useState(true)
  const [casesInfo, setcasesInfo] = useState({})

  const setcasestate = (info) => {
    setcaseState(false)
    setcasesInfo(info)
  }
  const [isShow, setIsShow] = useState(false)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [lawyer_name, setLawyer_name] = useState('江苏省')
  const [delegation_type, setDelegation_type] = useState('民事纠纷')
  const [caseArr, setCaseArr] = useState([])

  const save = () => {
    // 定义手机号正则表达式
    const phoneRegex = /^1[3456789]\d{9}$/

    if (!phoneRegex.test(phone)) {
      alert('手机号格式错误,请重新输入' + phone)
      return
    }
    if (!name) {
      alert('请输入姓名')
      return
    }

    if (!name || !phone || !lawyer_name || !delegation_type) return
    post('create_business_delegations', {
      name,
      phone,
      lawyer_name,
      delegation_type,
      delegation_time: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    })
  }
  const getArr = (num) => {
    let nu = num ?? 9
    get('/get_case_studies_all').then((res) => {
      let data = res.data?.[0] ?? []

      data = data.slice(0, nu)
      if (data.length % 3 === 2) {
        data.push({})
      }
      data.forEach((item) => {
        item.published_at = formatTime(item.published_at)
      })

      setCaseArr(data)
    })
  }
  const [newsArr, setNewsArr] = useState([])
  const [first, setFirst] = useState([])

  const getNews = (index) => {
    get(`/get_news_all/?skip=0&limit=10`).then((res) => {
      let data = res.data[0]
      data.forEach((item) => {
        item.published_at = setTime(item.published_at)
      })
      setFirst(data[0] || {})

      setNewsArr(data.splice(1, 6))
    })
  }
  const [num, setNum] = useState({})
  const [wan, setWan] = useState(0)
  const [yi, setYi] = useState(0)
  const getNum = () => {
    function extractMillions(number) {
      return Math.floor(number / 10000) % 10000
    }
    get('/get_lawyer_economic/1').then((res) => {
      setNum(res.data)

      setWan(extractMillions(res.data.index_economic_losses))
      setYi(Math.floor(res.data.index_economic_losses / 100000000) % 10)
    })
  }
  useEffect(() => {
    getArr()
    getNews()
    getNum()
  }, [])
  return (
    <>
      {state && casestate && (
        <div className="HeadDiv">
          <Header
            state={props.state}
            onSetState={props.onSetState}
            isShow={isShow}
            onSetIsShow={setIsShow}
            windowWidthValue={props.windowWidthValue}
            bgc={false}
          ></Header>

          <div className="zx">
            <img src={zx} alt="" />
            <a href="https://ada.baidu.com/imlp/?imid=b694179300c687ccf883b0fd6be0f2c4#back1705761185685">
              在线咨询
            </a>
          </div>

          <div
            className="lunboBox"
            style={{ height: 817 * scal + 'px', top: -122 * scal + 'px' }}
          >
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="box1">
                  <img className="HeadDivBg" src={png1} alt=""></img>
                  <div
                    className="lunboText"
                    style={{ fontSize: 30 * scal + 'px' }}
                  >
                    <img
                      src={png2}
                      alt=""
                      style={{
                        width: 288 * scal + 'px',
                        height: 30 * scal + 'px'
                      }}
                    />
                    <div style={{ fontSize: 72 * scal + 'px' }}>
                      一站式法律服务平台
                    </div>
                    <div style={{ display: 'flex' }}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          marginRight: 60 * scal + 'px',
                          fontSize: 22 * scal + 'px'
                        }}
                      >
                        <img
                          src={icon1}
                          alt=""
                          style={{
                            width: 90 * scal + 'px',
                            height: 90 * scal + 'px',
                            marginBottom: 15 * scal + 'px'
                          }}
                        />
                        <span>信用修复</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          marginRight: 60 * scal + 'px',
                          fontSize: 22 * scal + 'px'
                        }}
                      >
                        <img
                          src={icon2}
                          alt=""
                          style={{
                            width: 90 * scal + 'px',
                            height: 90 * scal + 'px',
                            marginBottom: 15 * scal + 'px'
                          }}
                        />
                        <span>法律服务</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          marginRight: 60 * scal + 'px',
                          fontSize: 22 * scal + 'px'
                        }}
                      >
                        <img
                          src={icon3}
                          alt=""
                          style={{
                            width: 90 * scal + 'px',
                            height: 90 * scal + 'px',
                            marginBottom: 15 * scal + 'px'
                          }}
                        />
                        <span>案源合作</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          fontSize: 22 * scal + 'px'
                        }}
                      >
                        <img
                          src={icon4}
                          alt=""
                          style={{
                            width: 90 * scal + 'px',
                            height: 90 * scal + 'px',
                            marginBottom: 15 * scal + 'px'
                          }}
                        />
                        <span>加盟招商</span>
                      </div>
                    </div>
                  </div>
                  <div className="lunboBtn" onClick={() => setType(1)}>
                    了解更多
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box1">
                  <img className="HeadDivBg" src={banner2} alt=""></img>
                  <div
                    className="lunboText"
                    style={{ fontSize: 30 * scal + 'px' }}
                  >
                    <div>
                      按专业设置团队，全面深度剖析原委，挖掘有利信息，快速反应，
                    </div>
                    <div>为客户最大化主张权益</div>
                    <div>____期待为您服务</div>
                  </div>
                  <div className="lunboBtn" onClick={() => setType(1)}>
                    了解更多
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className="num"
            onClick={() => setIsShow(false)}
            style={{
              position: 'relative',
              top: -127 * scal + 'px',
              display: 'flex',
              justifyContent: 'center',
              background: '#2b68ff',
              color: '#fff',
              height: 187 * scal + 'px',
              paddingTop: 30 * scal + 'px'
            }}
          >
            <div style={{ width: 343 * scal + 'px' }}>
              <div
                className="num"
                style={{
                  fontSize: 56 * scal + 'px',
                  marginBottom: 20 * scal + 'px'
                }}
              >
                {/* 30,000 */}
                {/* {NumberAnimation(30000)} */}
                <NumberAnimation
                  targetValue={num.index_litigant}
                  isSplit={true}
                ></NumberAnimation>
              </div>
              <div className="text" style={{ fontSize: 14 * scal + 'px' }}>
                当事人
              </div>
            </div>
            <div style={{ width: 510 * scal + 'px' }}>
              <div
                className="num"
                style={{
                  fontSize: 56 * scal + 'px',
                  marginBottom: 20 * scal + 'px'
                }}
              >
                <NumberAnimation
                  targetValue={yi}
                  isSplit={false}
                ></NumberAnimation>
                <span style={{ fontSize: 34 * scal + 'px' }}>亿</span>
                <NumberAnimation
                  targetValue={wan}
                  isSplit={false}
                ></NumberAnimation>
                <span style={{ fontSize: 34 * scal + 'px' }}>余万</span>
              </div>
              <div className="text" style={{ fontSize: 14 * scal + 'px' }}>
                挽回经济利益
              </div>
            </div>
            <div style={{ width: 365 * scal + 'px' }}>
              <div
                className="num"
                style={{
                  fontSize: 56 * scal + 'px',
                  marginBottom: 20 * scal + 'px'
                }}
              >
                <NumberAnimation
                  targetValue={num.index_lawyer_num}
                  isSplit={true}
                ></NumberAnimation>
              </div>
              <div className="text" style={{ fontSize: 14 * scal + 'px' }}>
                实战律师
              </div>
            </div>
            <div style={{ width: 334 * scal + 'px' }}>
              <div
                className="num"
                style={{
                  fontSize: 56 * scal + 'px',
                  marginBottom: 20 * scal + 'px'
                }}
              >
                全国
              </div>
              <div className="text" style={{ fontSize: 14 * scal + 'px' }}>
                案例范围
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsShow(false)}
            className="form"
            style={{
              height: 265 * scal + 'px',
              width: 1642 * scal + 'px',
              top: (-50 - 127) * scal + 'px',
              boxShadow: '12px 12px 20px 6px rgba(158, 213, 255, 0.35)'
            }}
          >
            <div
              className={`sub`}
              style={{
                padding: `0 ${58 * scal}px 0 ${64 * scal}px`
              }}
            >
              <div className="box box1">
                <img
                  src={png17}
                  alt="png4"
                  style={{ width: 110 * scal + 'px', height: 97 * scal + 'px' }}
                />
                <div style={{ color: '#2b68ff' }}>
                  <div>
                    已经为
                    <NumberAnimation
                      targetValue={num.form_litigant}
                      isSplit={true}
                    ></NumberAnimation>
                    余位当事人成功解决问题,
                  </div>
                  <div>
                    为当事人争取直接经济利益{' '}
                    <NumberAnimation
                      targetValue={num.form_economic_losses}
                      isSplit={true}
                    ></NumberAnimation>
                    元
                  </div>
                </div>
              </div>
              <div className="box">
                <div
                  className="form"
                  style={{
                    width: 418 * scal + 'px',
                    height: 192 * scal + 'px'
                  }}
                >
                  <div className="name">
                    <div
                      style={{
                        width: 200 * scal + 'px',
                        height: 48 * scal + 'px',
                        lineHeight: 48 * scal + 'px'
                      }}
                    >
                      <input
                        type="text"
                        placeholder="您的名字"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div
                      style={{
                        width: 200 * scal + 'px',
                        height: 48 * scal + 'px',
                        lineHeight: 48 * scal + 'px'
                      }}
                    >
                      <input
                        type="text"
                        placeholder="您的手机"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="ls">
                    <div
                      style={{
                        width: 200 * scal + 'px',
                        height: 48 * scal + 'px',
                        lineHeight: 48 * scal + 'px'
                      }}
                    >
                      <select
                        value={lawyer_name}
                        onChange={(e) => setLawyer_name(e.target.value)}
                      >
                        {chineseProvinces.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      style={{
                        width: 200 * scal + 'px',
                        height: 48 * scal + 'px',
                        lineHeight: 48 * scal + 'px'
                      }}
                    >
                      <select
                        value={delegation_type}
                        onChange={(e) => setDelegation_type(e.target.value)}
                      >
                        <option value="法律问题">法律问题</option>
                        <option value="信用修复">信用修复</option>
                        <option value="案源合作">案源合作</option>
                        <option value="招商加盟">招商加盟</option>
                        <option value="其他问题">其他问题</option>
                      </select>
                    </div>
                  </div>
                  <div className="save" onClick={save}>
                    <div style={{ width: 418 * scal + 'px' }}>提交委托</div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div
                  className="table"
                  style={{
                    width: 460 * scal + 'px',
                    height: 192 * scal + 'px'
                  }}
                >
                  <div className="top" style={{ fontSize: 16 * scal + 'px' }}>
                    每日前十名预约咨询资深律师，一对一电话解答
                  </div>
                  <div
                    className="tabletr"
                    style={{ fontSize: 16 * scal + 'px' }}
                  >
                    <InfiniteScroll data={arr}></InfiniteScroll>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsShow(false)}
            className="HeadDivBg1"
            style={{ top: -52 * scal + 'px' }}
          >
            <img src={png18} alt="" style={{ width: 300 * scal + 'px' }} />
            <div className="wentiList" style={{ padding: `0 ${140 * scal}px` }}>
              {wentiList.map((item, index) => (
                <div
                  className="wenti"
                  style={{
                    width: 312 * scal + 'px',
                    height: 435 * scal + 'px',
                    padding: `${58 * scal}px ${25 * scal}px`
                  }}
                  key={index}
                >
                  <img src={item.img} alt="" />
                  <div className="lkjasdf">
                    <div
                      className="title"
                      style={{
                        fontSize: 28 * scal + 'px',
                        marginBottom: 32 * scal + 'px',
                        fontWeight: 'bold'
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="msg"
                      style={{
                        fontSize: 16 * scal + 'px',
                        marginBottom: 15 * scal + 'px'
                      }}
                    >
                      {item.msg}
                    </div>
                  </div>
                  <div
                    className="to"
                    onClick={() => setType(item.toIndex)}
                    style={{
                      fontSize: 18 * scal + 'px',
                      width: 128 * scal + 'px',
                      height: 40 * scal + 'px',
                      lineHeight: 40 * scal + 'px',
                      bottom: 50 * scal + 'px'
                    }}
                  >
                    免费咨询
                    <img
                      src={toRight}
                      style={{
                        width: 16 * scal + 'px',
                        height: 10 * scal + 'px',
                        marginLeft: 10 * scal + 'px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => setIsShow(false)}
            style={{ position: 'relative' }}
            className="ly"
          >
            <img
              src={png7}
              alt=""
              style={{
                width: 120 * scal + 'px',
                position: 'relative',
                zIndex: 9,
                marginTop: 80 * scal + 'px'
              }}
            />
            <img
              src={zybg}
              alt=""
              style={{ width: '100%', position: 'absolute', top: 0, left: 0 }}
            />
            <div
              style={{
                width: 1200 * scal + 'px',
                height: 580 * scal + 'px',
                position: 'relative',
                zIndex: 9,
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: 50 * scal + 'px'
              }}
            >
              <img
                src={zybgx}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  left: 0
                }}
              />
              <div
                style={{
                  position: 'relative',
                  zIndex: 9,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  height: '100%',
                  paddingTop: 37 * scal + 'px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={icon5}
                    alt=""
                    style={{
                      width: 66 * scal + 'px',
                      height: 82 * scal + 'px'
                    }}
                  />
                  <div
                    style={{
                      fontSize: 24 * scal + 'px',
                      margin: `${12 * scal}px 0 ${20 * scal}px 0`
                    }}
                  >
                    企业信用修复
                  </div>
                  <div
                    style={{
                      fontSize: 16 * scal + 'px',
                      width: 460 * scal + 'px',
                      color: '#5a5a5a'
                    }}
                  >
                    修复个人信用，解冻银行卡;修复企业行政处罚、失信执行、司法涉诉、历史不良信息等信用记录，可消除平台为：信用中国，中国裁判文书网，国家企业信用信息公示系统及第三方平台如：企查查，天眼查，水滴信用等。
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={icon6}
                    alt=""
                    style={{
                      width: 66 * scal + 'px',
                      height: 82 * scal + 'px'
                    }}
                  />
                  <div
                    style={{
                      fontSize: 24 * scal + 'px',
                      margin: `${12 * scal}px 0 ${20 * scal}px 0`
                    }}
                  >
                    法律服务
                  </div>
                  <div
                    style={{
                      fontSize: 16 * scal + 'px',
                      width: 460 * scal + 'px',
                      color: '#5a5a5a'
                    }}
                  >
                    提供公司实务、刑事辩护、民事纠纷、劳动仲裁、交通事故、婚姻家事、工伤认定、法律顾问等法律咨询及专业服务。
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={icon7}
                    alt=""
                    style={{
                      width: 66 * scal + 'px',
                      height: 82 * scal + 'px'
                    }}
                  />
                  <div
                    style={{
                      fontSize: 24 * scal + 'px',
                      margin: `${12 * scal}px 0 ${20 * scal}px 0`
                    }}
                  >
                    律师合作
                  </div>
                  <div
                    style={{
                      fontSize: 16 * scal + 'px',
                      width: 460 * scal + 'px',
                      color: '#5a5a5a'
                    }}
                  >
                    利用各种获客渠道及专业服务团队的全天候服务，为法律人获得最新的一手案源信息并参与促成合作，让法律人能够为更多客户伸张正义，避免损失。
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={icon8}
                    alt=""
                    style={{
                      width: 66 * scal + 'px',
                      height: 82 * scal + 'px'
                    }}
                  />
                  <div
                    style={{
                      fontSize: 24 * scal + 'px',
                      margin: `${12 * scal}px 0 ${20 * scal}px 0`
                    }}
                  >
                    加盟招商
                  </div>
                  <div
                    style={{
                      fontSize: 16 * scal + 'px',
                      width: 460 * scal + 'px',
                      color: '#5a5a5a'
                    }}
                  >
                    赋能合伙人，提供全方位的团队服务及技术支持，通过软硬件综合打造，借助大IP，大平台的引流优势，从零到一的帮扶创业者实现人生价值。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsShow(false)}
            style={{ marginTop: 100 * scal + 'px', position: 'relative' }}
            className="ls"
          >
            <img
              className="HeadDivBg1"
              style={{
                width: 120 * scal + 'px',
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
              alt=""
              src={png8}
            />
            <div
              style={{
                display: 'flex',
                width: '100%',
                marginTop: 30 * scal + 'px'
              }}
            >
              <div
                className="left"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: 640 * scal + 'px'
                }}
              >
                <img
                  src={team1}
                  alt=""
                  style={{
                    width: 320 * scal + 'px',
                    height: 330 * scal + 'px'
                  }}
                />
                <img
                  src={team2}
                  alt=""
                  style={{
                    width: 320 * scal + 'px',
                    height: 330 * scal + 'px'
                  }}
                />
                <div
                  style={{
                    width: 320 * scal + 'px',
                    height: 330 * scal + 'px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#2b68ff',
                    color: '#fff',
                    fontSize: 58 * scal + 'px'
                  }}
                >
                  <div>竭能</div>
                  法律
                </div>
                <img
                  src={team3}
                  alt=""
                  style={{
                    width: 320 * scal + 'px',
                    height: 330 * scal + 'px'
                  }}
                />
              </div>
              <div className="center" style={{ width: 610 * scal + 'px' }}>
                <img
                  src={team4}
                  alt=""
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div
                className="right"
                style={{
                  display: 'flex',
                  width: 640 * scal + 'px',
                  flexWrap: 'wrap'
                }}
              >
                <img
                  src={team5}
                  alt=""
                  style={{
                    width: 320 * scal + 'px',
                    height: 330 * scal + 'px'
                  }}
                />
                <img
                  src={team6}
                  alt=""
                  style={{
                    width: 320 * scal + 'px',
                    height: 330 * scal + 'px'
                  }}
                />
                <img
                  src={team7}
                  alt=""
                  style={{
                    width: 320 * scal + 'px',
                    height: 330 * scal + 'px'
                  }}
                />
                <img
                  src={team8}
                  alt=""
                  style={{
                    width: 320 * scal + 'px',
                    height: 330 * scal + 'px'
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              background: 'linear-gradient(180deg, #0d469b 0%, #6699ee 100%)',
              height: 810 * scal + 'px',
              paddingTop: 90 * scal + 'px'
            }}
            className="ys"
          >
            <img
              className="HeadDivBg1"
              src={png9}
              alt=""
              style={{
                width: 150 * scal + 'px',
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            />
            <img
              src={ys}
              alt=""
              style={{
                width: 348 * scal + 'px',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-35%)',
                bottom: 115 * scal + 'px',
                zIndex: 11
              }}
            />
            <div style={{ display: 'flex' }}>
              <div style={{ position: 'relative', left: 362 * scal + 'px' }}>
                <div
                  style={{
                    width: 565 * scal + 'px',
                    height: 100 * scal + 'px',
                    position: 'relative',
                    marginTop: 100 * scal + 'px'
                  }}
                >
                  <img
                    src={ysbg}
                    alt=""
                    style={{
                      width: 565 * scal + 'px',
                      position: 'absolute',
                      left: 0
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      height: '100%',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: 80 * scal + 'px',
                        height: 80 * scal + 'px',
                        background: '#0580c5',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: `0px ${22 * scal}px 0 ${14 * scal}px`
                      }}
                    >
                      <img
                        src={ys1}
                        style={{
                          width: 35 * scal + 'px',
                          position: 'relative'
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontSize: 18 * scal + 'px',
                        position: 'relative',
                        zIndex: 9,
                        color: '#fff'
                      }}
                    >
                      团队成员兼具专业性和跨领域复合能力
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 565 * scal + 'px',
                    height: 100 * scal + 'px',
                    position: 'relative',
                    marginTop: 100 * scal + 'px'
                  }}
                >
                  <img
                    src={ysbg}
                    alt=""
                    style={{
                      width: 565 * scal + 'px',
                      position: 'absolute',
                      left: 0
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      height: '100%',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: 80 * scal + 'px',
                        height: 80 * scal + 'px',
                        background: '#0580c5',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: `0px ${22 * scal}px 0 ${14 * scal}px`
                      }}
                    >
                      <img
                        src={ys2}
                        style={{
                          width: 35 * scal + 'px',
                          position: 'relative'
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontSize: 18 * scal + 'px',
                        position: 'relative',
                        zIndex: 9,
                        color: '#fff'
                      }}
                    >
                      为客户提供标准化体系化服务
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 565 * scal + 'px',
                    height: 100 * scal + 'px',
                    position: 'relative',
                    marginTop: 100 * scal + 'px'
                  }}
                >
                  <img
                    src={ysbg}
                    alt=""
                    style={{
                      width: 565 * scal + 'px',
                      position: 'absolute',
                      left: 0
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      height: '100%',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: 80 * scal + 'px',
                        height: 80 * scal + 'px',
                        background: '#0580c5',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: `0px ${22 * scal}px 0 ${14 * scal}px`
                      }}
                    >
                      <img
                        src={ys3}
                        style={{
                          width: 35 * scal + 'px',
                          position: 'relative'
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontSize: 18 * scal + 'px',
                        position: 'relative',
                        zIndex: 9,
                        color: '#fff'
                      }}
                    >
                      具备24小时受理服务能力
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: 'relative',
                  left: (1238 - 565) * scal + 'px'
                }}
              >
                <div
                  style={{
                    width: 565 * scal + 'px',
                    height: 100 * scal + 'px',
                    position: 'relative',
                    marginTop: 100 * scal + 'px'
                  }}
                >
                  <img
                    src={ysbg}
                    alt=""
                    style={{
                      width: 565 * scal + 'px',
                      position: 'absolute',
                      left: 0
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      height: '100%',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: 80 * scal + 'px',
                        height: 80 * scal + 'px',
                        background: '#0580c5',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: `0px ${22 * scal}px 0 ${14 * scal}px`
                      }}
                    >
                      <img
                        src={ys4}
                        style={{
                          width: 35 * scal + 'px',
                          position: 'relative'
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontSize: 18 * scal + 'px',
                        position: 'relative',
                        zIndex: 9,
                        color: '#fff'
                      }}
                    >
                      一对一设计专属方案
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 565 * scal + 'px',
                    height: 100 * scal + 'px',
                    position: 'relative',
                    marginTop: 100 * scal + 'px'
                  }}
                >
                  <img
                    src={ysbg}
                    alt=""
                    style={{
                      width: 565 * scal + 'px',
                      position: 'absolute',
                      left: 0
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      height: '100%',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: 80 * scal + 'px',
                        height: 80 * scal + 'px',
                        background: '#0580c5',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: `0px ${22 * scal}px 0 ${14 * scal}px`
                      }}
                    >
                      <img
                        src={ys5}
                        style={{
                          width: 35 * scal + 'px',
                          position: 'relative'
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontSize: 18 * scal + 'px',
                        position: 'relative',
                        zIndex: 9,
                        color: '#fff'
                      }}
                    >
                      具有绝对市场竞争力的性价比
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 565 * scal + 'px',
                    height: 100 * scal + 'px',
                    position: 'relative',
                    marginTop: 100 * scal + 'px'
                  }}
                >
                  <img
                    src={ysbg}
                    alt=""
                    style={{
                      width: 565 * scal + 'px',
                      position: 'absolute',
                      left: 0
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      height: '100%',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: 80 * scal + 'px',
                        height: 80 * scal + 'px',
                        background: '#0580c5',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: `0px ${22 * scal}px 0 ${14 * scal}px`
                      }}
                    >
                      <img
                        src={ys6}
                        style={{
                          width: 35 * scal + 'px',
                          position: 'relative'
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontSize: 18 * scal + 'px',
                        position: 'relative',
                        zIndex: 9,
                        color: '#fff'
                      }}
                    >
                      拥有大道天下互利共赢的企业情怀
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsShow(false)}
            style={{ position: 'relative', height: 290 * scal + 'px' }}
            className="my"
          >
            <img
              className="HeadDivBg1"
              src={png10}
              alt=""
              style={{
                position: 'absolute',
                left: 0,
                height: '100%',
                width: '100%'
              }}
            ></img>
            <div
              style={{
                position: 'relative',
                zIndex: 9,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                textAlign: 'left'
              }}
            >
              <img
                src={yj}
                alt=""
                style={{
                  width: 127 * scal + 'px',
                  marginRight: 64 * scal + 'px'
                }}
              />
              <div style={{ position: 'relative', zIndex: 9 }}>
                <div style={{ fontSize: 20 * scal + 'px', color: '#333333' }}>
                  “为利益纠葛的尘世间，争一分正义；为披荆斩棘的独行者，递一把薪火；为心怀天下的播种人，获一方丰碑。”
                </div>
                <div
                  style={{
                    fontSize: 24 * scal + 'px',
                    color: '#333333',
                    marginTop: 30 * scal + 'px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: 60 * scal + 'px',
                      border: '1px solid #2b68ff',
                      marginRight: 10 * scal + 'px'
                    }}
                  ></span>
                  江苏竭能法律咨询服务有限公司
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsShow(false)}
            style={{
              position: 'relative',
              padding: `${80 * scal}px 0 0 ${140 * scal}px`,
              display: 'flex',
              textAlign: 'left'
            }}
            className="gy"
          >
            <div className="left" style={{ width: 720 * scal + 'px' }}>
              <div
                style={{ fontSize: 50 * scal + 'px', color: '#333' }}
                className="title"
              >
                关于江苏竭能法律公司
              </div>
              <div
                style={{
                  fontSize: 18 * scal + 'px',
                  color: '#999',
                  marginTop: 20 * scal + 'px'
                }}
                className="title1"
              >
                JIANGSU JIENENG LEGAL CONSULTING SERVICE CO.,LTD
              </div>
              <div
                className="line"
                style={{
                  width: 60 * scal + 'px',
                  border: '1px solid #2b68ff',
                  margin: `${32 * scal}px 0 ${56 * scal}px`
                }}
              ></div>
              <div
                className="msg"
                style={{
                  fontSize: 18 * scal + 'px',
                  color: '#333'
                }}
              >
                <div style={{ marginBottom: 30 * scal + 'px' }}>
                  江苏竭能法律咨询服务有限公司成立于2013年，坐落在风景秀美、人文底蕴深厚的江南历史文化名城——常州，也是新中国第一任司法部女部长史良的故乡。
                </div>
                <div style={{ marginBottom: 30 * scal + 'px' }}>
                  江苏竭能自成立以来，始终秉持通过我们精准的服务和精通的专业知识来实现长期繁荣发展。我们致力于运用自身的从业经验、专项业务能力和事件的洞察力，帮助客户应对不断变化的客观环境，提振信心、谋求稳定发展。
                </div>
                <div style={{ marginBottom: 30 * scal + 'px' }}>
                  江苏竭能以建设复合型、专业化的人才队伍为导向，团队成员拥有国内外知名院校法学专业教育背景以及丰富的法律职业经历，助力客户应对日益复杂的商业挑战，为客户提供“一站无忧”的问题解决方案。
                </div>
                <div style={{ marginBottom: 30 * scal + 'px' }}>
                  客户是我们开展一切工作的核心。江苏竭能将继续秉持“专业、专心、专注”的服务理念继续坚持提升业务能力，不断寻求突破，从根本上理解客户的需求，帮助客户解决问题和发掘机遇。
                </div>
                <div>
                  我们将以精品服务作为立司之本，以海纳四方同仁志士作为发展之路，以审慎独立的态度作为成长理念，以砥砺深耕作为创新理念，以互利共赢作为昌盛之道，为国家的法治建设贡献力量。
                </div>
              </div>
            </div>
            <div
              className="right"
              style={{
                width: 958 * scal + 'px',
                height: 770 * scal + 'px',
                marginLeft: 100 * scal + 'px'
              }}
            >
              <img className="HeadDivBg1" src={png11} alt=""></img>
            </div>
          </div>
          <div
            onClick={() => setIsShow(false)}
            className="HeadDivBg4"
            style={{
              marginTop: 40 * scal + 'px',
              paddingBottom: 217 * scal + 'px'
            }}
          >
            <img src={png12} alt=""></img>
            <div
              className="HeadDivBg5"
              style={{
                height: 470 * scal + 'px',
                marginTop: 40 * scal + 'px',
                marginLeft: 100 * scal + 'px'
              }}
            >
              <div className="HeadDivBg6" style={{ height: 470 * scal + 'px' }}>
                <div
                  className="HeadDivBg7"
                  style={{
                    width: 542 * scal + 'px',
                    height: 470 * scal + 'px'
                  }}
                  onClick={() => setcasestate(caseArr[0])}
                >
                  <img
                    src={caseArr[0]?.case_image_path}
                    className="HeadDivBg8"
                    alt=""
                    style={{
                      width: 536 * scal + 'px',
                      height: 311 * scal + 'px'
                    }}
                  ></img>
                  <div
                    className="HeadDivBg11"
                    style={{ padding: 10 * scal + 'px' }}
                  >
                    <div
                      className="imgtop"
                      style={{ marginBottom: 10 * scal + 'px' }}
                    >
                      <img
                        className="HeadDivBg9"
                        alt=""
                        src={png14}
                        style={{
                          width: 54 * scal + 'px',
                          height: 54 * scal + 'px'
                        }}
                      ></img>
                      <div
                        className="HeadDivBg9"
                        style={{ marginLeft: 10 * scal + 'px' }}
                      >
                        <label
                          className="HeadDivBg10"
                          style={{ fontSize: 14 * scal + 'px', color: '#333' }}
                        >
                          中国电信
                        </label>
                        <label
                          className="hez"
                          style={{ fontSize: 14 * scal + 'px' }}
                        >
                          {caseArr[0]?.view_count}次合作
                        </label>
                      </div>
                    </div>
                    <div
                      className="anli"
                      style={{
                        fontSize: 18 * scal + 'px',
                        marginBottom: 10 * scal + 'px'
                      }}
                    >
                      {caseArr[0]?.title}
                    </div>
                    <div
                      className="HeadDivBg12"
                      style={{
                        height: 48 * scal + 'px',
                        fontSize: 15 * scal + 'px',
                        color: '#999'
                      }}
                    >
                      {returnDom(caseArr[0]?.content)}
                    </div>
                  </div>
                </div>
                {caseArr[1] && (
                  <div
                    className="HeadDivBg7"
                    style={{
                      width: 542 * scal + 'px',
                      height: 470 * scal + 'px',
                      marginLeft: 20 * scal + 'px'
                    }}
                    onClick={() => setcasestate(caseArr[1])}
                  >
                    <img
                      src={caseArr[1]?.case_image_path}
                      className="HeadDivBg8"
                      alt=""
                      style={{
                        width: 536 * scal + 'px',
                        height: 311 * scal + 'px'
                      }}
                    ></img>
                    <div
                      className="HeadDivBg11"
                      style={{ padding: 10 * scal + 'px' }}
                    >
                      <div
                        className="imgtop"
                        style={{ marginBottom: 10 * scal + 'px' }}
                      >
                        <img
                          className="HeadDivBg9"
                          alt=""
                          src={png14}
                          style={{
                            width: 54 * scal + 'px',
                            height: 54 * scal + 'px'
                          }}
                        ></img>
                        <div
                          className="HeadDivBg9"
                          style={{ marginLeft: 10 * scal + 'px' }}
                        >
                          <label
                            className="HeadDivBg10"
                            style={{
                              fontSize: 14 * scal + 'px',
                              color: '#333'
                            }}
                          >
                            中国电信
                          </label>
                          <label
                            className="hez"
                            style={{ fontSize: 14 * scal + 'px' }}
                          >
                            {caseArr[1]?.view_count}次合作
                          </label>
                        </div>
                      </div>
                      <div
                        className="anli"
                        style={{
                          fontSize: 18 * scal + 'px',
                          marginBottom: 10 * scal + 'px'
                        }}
                      >
                        {caseArr[1]?.title}
                      </div>
                      <div
                        className="HeadDivBg12"
                        style={{
                          height: 48 * scal + 'px',
                          fontSize: 15 * scal + 'px',
                          color: '#999'
                        }}
                      >
                        {returnDom(caseArr[1]?.content)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ marginLeft: 20 * scal + 'px' }}>
                {caseArr[2] && (
                  <div
                    className="HeadDivBg13"
                    style={{
                      width: 532 * scal + 'px',
                      height: 240 * scal + 'px'
                    }}
                    onClick={() => setcasestate(caseArr[2])}
                  >
                    <div
                      className="HeadDivBg14"
                      style={{
                        width: 284 * scal + 'px',
                        height: 240 * scal + 'px'
                      }}
                    >
                      <img
                        src={caseArr[2]?.case_image_path}
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
                          padding: 10 * scal + 'px',
                          fontSize: 12 * scal + 'px'
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
                          <label className="HeadDivBg18">中国电信</label>
                          <label>3次合作</label>
                        </div>
                      </div>
                    </div>
                    <div
                      className="HeadDivBg19"
                      style={{ marginLeft: 20 * scal + 'px' }}
                    >
                      <div
                        className="color33"
                        style={{
                          marginBottom: 5 * scal + 'px',
                          fontSize: 18 * scal + 'px',
                          color: '#333'
                        }}
                      >
                        {caseArr[2]?.title}
                      </div>
                      <div
                        className="HeadDivBg20"
                        style={{
                          height: 142 * scal + 'px',
                          fontSize: 15 * scal + 'px',
                          color: '#999'
                        }}
                      >
                        {returnDom(caseArr[2]?.content)}
                      </div>
                    </div>
                  </div>
                )}
                {caseArr[3] && (
                  <div
                    className="HeadDivBg13"
                    style={{
                      width: 532 * scal + 'px',
                      height: 240 * scal + 'px'
                    }}
                    onClick={() => setcasestate(caseArr[3])}
                  >
                    <div
                      className="HeadDivBg14"
                      style={{
                        width: 284 * scal + 'px',
                        height: 240 * scal + 'px'
                      }}
                    >
                      <img
                        src={caseArr[3]?.case_image_path}
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
                          padding: 10 * scal + 'px',
                          fontSize: 12 * scal + 'px'
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
                          <label className="HeadDivBg18">中国电信</label>
                          <label>3次合作</label>
                        </div>
                      </div>
                    </div>
                    <div
                      className="HeadDivBg19"
                      style={{ marginLeft: 20 * scal + 'px' }}
                    >
                      <div
                        className="color33"
                        style={{
                          marginBottom: 5 * scal + 'px',
                          fontSize: 18 * scal + 'px',
                          color: '#333'
                        }}
                      >
                        {caseArr[3]?.title}
                      </div>
                      <div
                        className="HeadDivBg20"
                        style={{
                          height: 142 * scal + 'px',
                          fontSize: 15 * scal + 'px',
                          color: '#999'
                        }}
                      >
                        {returnDom(caseArr[3]?.content)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsShow(false)}
            className="xinwen"
            style={{
              padding: `${50 * scal}px ${360 * scal}px`,
              boxSizing: 'border-box'
            }}
          >
            <div className="bgimg">
              <img src={png16} alt="" />
            </div>
            <div className="top" style={{ marginBottom: 50 * scal + 'px' }}>
              <img src={png15} alt="" />
            </div>
            <div className="imgBox123">
              <div
                className="left"
                style={{ width: 580 * scal + 'px', height: 521 * scal + 'px' }}
                onClick={() => setInfo(first)}
              >
                <div
                  className="top"
                  style={{
                    width: 580 * scal + 'px',
                    height: 320 * scal + 'px'
                  }}
                >
                  <img
                    src={first?.image_path}
                    style={{ width: '100%', height: '100%' }}
                    alt=""
                  />
                </div>
                <div
                  className="bottom"
                  style={{
                    padding: 20 * scal + 'px',
                    height: 200 * scal + 'px',
                    boxSizing: 'border-box'
                  }}
                >
                  <div className="title" style={{ fontSize: 20 * scal + 'px' }}>
                    {first?.title}
                  </div>
                  <div
                    className="msg"
                    style={{
                      fontSize: 16 * scal + 'px',
                      height: 90 * scal + 'px',
                      overflow: 'hidden'
                    }}
                  >
                    {returnDom(first?.content)}
                  </div>
                </div>
              </div>
              <div
                className="right"
                style={{
                  width: 580 * scal + 'px',
                  height: 521 * scal + 'px',
                  padding: 20 * scal + 'px'
                }}
              >
                <div className="boxList1">
                  {newsArr.map((item) => (
                    <div
                      className="box"
                      key={item.id}
                      style={{
                        display: 'flex',
                        marginBottom: 20 * scal + 'px'
                      }}
                      onClick={() => setInfo(item)}
                    >
                      <div
                        className="left"
                        style={{
                          width: 81 * scal + 'px',
                          height: 81 * scal + 'px'
                        }}
                      >
                        <img
                          src={item?.image_path}
                          style={{ width: '100%', height: '100%' }}
                          alt=""
                        />
                      </div>
                      <div
                        className="right"
                        style={{
                          width: 430 * scal + 'px',
                          height: 81 * scal + 'px',
                          marginLeft: 10 * scal + 'px'
                        }}
                      >
                        <div
                          className="title"
                          style={{
                            fontSize: 20 * scal + 'px',
                            marginBottom: 13 * scal + 'px'
                          }}
                        >
                          {item?.title}
                        </div>
                        <div
                          className="msg"
                          style={{
                            fontSize: 16 * scal + 'px',
                            height: 41 * scal + 'px',
                            overflow: 'hidden'
                          }}
                        >
                          {returnDom(item?.content)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              onClick={() => setType(5)}
              className="laojie"
              style={{
                width: 225 * scal + 'px',
                height: 48 * scal + 'px',
                lineHeight: 48 * scal + 'px',
                marginTop: 70 * scal + 'px'
              }}
            >
              了解更多
            </div>
          </div>
          <Footer
            isShow={false}
            windowWidthValue={props.windowWidthValue}
            onSetState={props.onSetState}
          />
        </div>
      )}
      {!state && (
        <NewsInfo
          state={props.state}
          onSetState={props.onSetState}
          info={activeInfo}
          windowWidthValue={props.windowWidthValue}
        />
      )}
      {!casestate && (
        <CaseInfo
          state={props.state}
          onSetState={props.onSetState}
          info={casesInfo}
          windowWidthValue={props.windowWidthValue}
        ></CaseInfo>
      )}
    </>
  )
}
