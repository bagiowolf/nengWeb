import React, { useState } from 'react'
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
import png15 from './img/14.png'
import png16 from './img/15.png'
import png17 from './img/png4.png'
import png18 from './img/17.png'
import wenti1 from './img/wenti1.png'
import wenti2 from './img/wenti2.png'
import wenti3 from './img/wenti3.png'
import wenti4 from './img/wenti4.png'
import wenti5 from './img/wenti5.png'

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

export default function App(props) {
  let scal = props.windowWidthValue / 1919
  const list = [
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
  var deslitt = [
    {
      des1: '中国电信',
      des2: '3次合作',
      des3: '[信用修复类]等待客户文案提供',
      des4: '等待客户文案提供等待客户文案提供等待客户文案提供等待客户文等待客户文案提供等待客户文案提供案提供等待客户文案提供等待客户文案提供'
    }
  ]
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
    '北京市',
    '天津市',
    '河北省',
    '山西省',
    '内蒙古自治区',
    '辽宁省',
    '吉林省',
    '黑龙江省',
    '上海市',
    '江苏省',
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
      toIndex: 1
    },
    {
      title: '个人信用',
      msg: '招投标资格审查不过关、申请不到低息贷款、享受不到惠企政策、企业评优评奖被拒之门外',
      img: wenti2,
      toIndex: 1
    },
    {
      title: '法律服务',
      msg: '招投标资格审查不过关、申请不到低息贷款、享受不到惠企政策、企业评优评奖被拒之门外',
      img: wenti3,
      toIndex: 3
    },
    {
      title: '律师合作',
      msg: '招投标资格审查不过关、申请不到低息贷款、享受不到惠企政策、企业评优评奖被拒之门外',
      img: wenti4,
      toIndex: 4
    },
    {
      title: '招商加盟',
      msg: '招投标资格审查不过关、申请不到低息贷款、享受不到惠企政策、企业评优评奖被拒之门外',
      img: wenti5,
      toIndex: 6
    }
  ]
  const setType = (type) => {
    console.log(type)
    props.onSetState(type)
  }

  const [isShow, setIsShow] = useState(false)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [lawyer_name, setLawyer_name] = useState('北京市')
  const [delegation_type, setDelegation_type] = useState('民事纠纷')

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

  return (
    <div className="HeadDiv">
      <div
        style={{
          height: 806 * scal + 'px'
        }}
        className="hhhh"
      >
        {/* <img className="HeadDivBg" src={png1} alt=""></img> */}
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

        <div className="lunbo">
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
                  <div>
                    按专业设置团队，全面深度剖析原委，挖掘有利信息，快速反应，
                  </div>
                  <div>为客户最大化主张权益</div>
                  <div>____期待为您服务</div>
                </div>
                <div className="lunboBtn" onClick={() => setType(0)}>
                  了解更多
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box1">
                <img className="HeadDivBg" src={png1} alt=""></img>
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
                <div className="lunboBtn" onClick={() => setType(0)}>
                  了解更多
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="aaa">
        <Header
          state={props.state}
          onSetState={props.onSetState}
          isShow={isShow}
          onSetIsShow={setIsShow}
          windowWidthValue={props.windowWidthValue}
        ></Header>
      </div>
      <div className="lunboBox">
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
              <div className="lunboText" style={{ fontSize: 30 * scal + 'px' }}>
                <div>
                  按专业设置团队，全面深度剖析原委，挖掘有利信息，快速反应，
                </div>
                <div>为客户最大化主张权益</div>
                <div>____期待为您服务</div>
              </div>
              <div className="lunboBtn" onClick={() => setType(0)}>
                了解更多
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box1">
              <img className="HeadDivBg" src={png1} alt=""></img>
              <div className="lunboText" style={{ fontSize: 30 * scal + 'px' }}>
                <div>
                  按专业设置团队，全面深度剖析原委，挖掘有利信息，快速反应，
                </div>
                <div>为客户最大化主张权益</div>
                <div>____期待为您服务</div>
              </div>
              <div className="lunboBtn" onClick={() => setType(0)}>
                了解更多
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div onClick={() => setIsShow(false)}>
        <img className="HeadDivBg1 none" src={png4} alt=""></img>
      </div>
      <div
        onClick={() => setIsShow(false)}
        className="form"
        style={{
          height: 265 * scal + 'px',
          width: 1642 * scal + 'px',
          top: -50 * scal + 'px'
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
            <div>
              <div>已经为2000余位当事人成功解决问题,</div>
              <div>为当事人争取直接经济利益64,658,200元</div>
            </div>
          </div>
          <div className="box">
            <div
              className="form"
              style={{ width: 418 * scal + 'px', height: 192 * scal + 'px' }}
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
              style={{ width: 460 * scal + 'px', height: 192 * scal + 'px' }}
            >
              <div className="top">
                每日前十名预约咨询资深律师，一对一电话解答
              </div>
              <div className="tabletr">
                {arr.map((item, index) => (
                  <div className="tr" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => setIsShow(false)} className="HeadDivBg1">
        <img src={png18} alt=""></img>
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
                    marginBottom: 32 * scal + 'px'
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
                <div
                  className="to"
                  onClick={() => setType(item.toIndex)}
                  style={{ fontSize: 18 * scal + 'px' }}
                >
                  免费咨询
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div onClick={() => setIsShow(false)}>
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
              style={{ width: 542 * scal + 'px', height: 470 * scal + 'px' }}
            >
              <img
                src={png13}
                className="HeadDivBg8"
                alt=""
                style={{ width: 536 * scal + 'px', height: 311 * scal + 'px' }}
              ></img>
              <div className="HeadDivBg11">
                <div className="imgtop">
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
                    <label className="hez">{deslitt[0].des2}</label>
                  </div>
                </div>
                <div className="anli">{deslitt[0].des3}</div>
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
              <img
                src={png13}
                className="HeadDivBg8"
                alt=""
                style={{ width: 536 * scal + 'px', height: 311 * scal + 'px' }}
              ></img>
              <div className="HeadDivBg11">
                <div className="imgtop">
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
                    <label className="hez">{deslitt[0].des2}</label>
                  </div>
                </div>
                <div className="anli">{deslitt[0].des3}</div>
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
              style={{ width: 532 * scal + 'px', height: 240 * scal + 'px' }}
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
                    width: 284 * scal + 'px'
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
                <div className="color33">{deslitt[0].des3}</div>
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
              style={{ width: 532 * scal + 'px', height: 240 * scal + 'px' }}
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
                    width: 284 * scal + 'px'
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
                <div className="color33">{deslitt[0].des3}</div>
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

      <div
        onClick={() => setIsShow(false)}
        className="xinwen"
        style={{
          padding: `${50 * scal}px ${360 * scal}px`
        }}
      >
        <div className="bgimg">
          <img src={png16} alt="" />
        </div>
        <div className="top" style={{ marginBottom: 50 * scal + 'px' }}>
          <img src={png15} alt="" />
        </div>
        <div className="imgBox123">
          <div className="left" style={{ width: 587 * scal + 'px' }}>
            <div
              className="top"
              style={{ width: 587 * scal + 'px', height: 364 * scal + 'px' }}
            ></div>
            <div className="bottom" style={{ padding: 20 * scal + 'px' }}>
              <div className="title" style={{ fontSize: 20 * scal + 'px' }}>
                新闻名称新闻名称新闻名称新闻名称
              </div>
              <div className="msg" style={{ fontSize: 16 * scal + 'px' }}>
                新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
              </div>
            </div>
          </div>
          <div
            className="right"
            style={{
              width: 587 * scal + 'px',
              height: 521 * scal + 'px',
              padding: 20 * scal + 'px'
            }}
          >
            <div className="boxList">
              <div className="box">
                <div
                  className="left"
                  style={{ width: 81 * scal + 'px', height: 81 * scal + 'px' }}
                ></div>
                <div
                  className="right"
                  style={{
                    width: 430 * scal + 'px',
                    height: 81 * scal + 'px',
                    marginLeft: 10 * scal + 'px'
                  }}
                >
                  <div className="title" style={{ fontSize: 20 * scal + 'px' }}>
                    新闻名称新闻名称新闻名称新闻名称
                  </div>
                  <div className="msg" style={{ fontSize: 16 * scal + 'px' }}>
                    新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                  </div>
                </div>
              </div>
              <div className="box">
                <div
                  className="left"
                  style={{ width: 81 * scal + 'px', height: 81 * scal + 'px' }}
                ></div>
                <div
                  className="right"
                  style={{
                    width: 430 * scal + 'px',
                    height: 81 * scal + 'px',
                    marginLeft: 10 * scal + 'px'
                  }}
                >
                  <div className="title" style={{ fontSize: 20 * scal + 'px' }}>
                    新闻名称新闻名称新闻名称新闻名称
                  </div>
                  <div className="msg" style={{ fontSize: 16 * scal + 'px' }}>
                    新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                  </div>
                </div>
              </div>
              <div className="box">
                <div
                  className="left"
                  style={{ width: 81 * scal + 'px', height: 81 * scal + 'px' }}
                ></div>
                <div
                  className="right"
                  style={{
                    width: 430 * scal + 'px',
                    height: 81 * scal + 'px',
                    marginLeft: 10 * scal + 'px'
                  }}
                >
                  <div className="title" style={{ fontSize: 20 * scal + 'px' }}>
                    新闻名称新闻名称新闻名称新闻名称
                  </div>
                  <div className="msg" style={{ fontSize: 16 * scal + 'px' }}>
                    新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                  </div>
                </div>
              </div>
              <div className="box">
                <div
                  className="left"
                  style={{ width: 81 * scal + 'px', height: 81 * scal + 'px' }}
                ></div>
                <div
                  className="right"
                  style={{
                    width: 430 * scal + 'px',
                    height: 81 * scal + 'px',
                    marginLeft: 10 * scal + 'px'
                  }}
                >
                  <div className="title" style={{ fontSize: 20 * scal + 'px' }}>
                    新闻名称新闻名称新闻名称新闻名称
                  </div>
                  <div className="msg" style={{ fontSize: 16 * scal + 'px' }}>
                    新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                  </div>
                </div>
              </div>
              <div className="box">
                <div
                  className="left"
                  style={{ width: 81 * scal + 'px', height: 81 * scal + 'px' }}
                ></div>
                <div
                  className="right"
                  style={{
                    width: 430 * scal + 'px',
                    height: 81 * scal + 'px',
                    marginLeft: 10 * scal + 'px'
                  }}
                >
                  <div className="title" style={{ fontSize: 20 * scal + 'px' }}>
                    新闻名称新闻名称新闻名称新闻名称
                  </div>
                  <div className="msg" style={{ fontSize: 16 * scal + 'px' }}>
                    新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                  </div>
                </div>
              </div>
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
      <Footer isShow={false} windowWidthValue={props.windowWidthValue} />
    </div>
  )
}
