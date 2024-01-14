import React, { useState } from 'react'
import png4 from './img/png4.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import png5 from './img/png5.png'
import './App.css'
import { post } from '../../utils/api/api'
import dayjs from 'dayjs'

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

export default function Footer(props) {
  let scal = props.windowWidthValue / 1919

  let state = props.isShow ?? true

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [lawyer_name, setLawyer_name] = useState('北京市')
  const [delegation_type, setDelegation_type] = useState('民事纠纷')
  const save = () => {
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
    <div>
      <div className="footer">
        <div
          className={`sub ${state ? '' : 'dn'}`}
          style={{
            padding: `0 ${160 * scal}px 0 ${212 * scal}px`
          }}
        >
          <div className="box box1">
            <img
              src={png4}
              alt="png4"
              style={{ width: 110 * scal + 'px', height: 100 * scal + 'px' }}
            />
            <div>
              <div>
                已经为<span>2000</span>余位当事人成功解决问题,
              </div>
              <div>
                为当事人争取直接经济利益<span>64,658,200</span>元
              </div>
            </div>
          </div>
          <div className="box">
            <div className="form" style={{ width: 418 * scal + 'px' }}>
              <div className="name">
                <div style={{ width: 200 * scal + 'px' }}>
                  <input
                    type="text"
                    placeholder="您的名字"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div style={{ width: 200 * scal + 'px' }}>
                  <input
                    type="text"
                    placeholder="您的手机"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="ls">
                <div style={{ width: 200 * scal + 'px' }}>
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
                <div style={{ width: 200 * scal + 'px' }}>
                  <select
                    value={delegation_type}
                    onChange={(e) => setDelegation_type(e.target.value)}
                  >
                    <option value="民事纠纷">民事纠纷</option>
                    <option value="刑事案件">刑事案件</option>
                    <option value="企业顾问">企业顾问</option>
                    <option value="信用修复">信用修复</option>
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
            <div className="table" style={{ width: 460 * scal + 'px' }}>
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
        <div
          className="bottom"
          style={{ padding: `${93 * scal}px ${335 * scal}px ${46 * scal}px` }}
        >
          <div className="list">
            <div>
              <div className="title">关于我们</div>
              <ul>
                <li>律师团队</li>
                <li>法律服务</li>
                <li>联系我们&留言板</li>
              </ul>
            </div>
            <div>
              <div className="title">地址</div>
              <ul>
                <li>江苏省常州市武进区人民路吾悦大厦1号楼1205室</li>
              </ul>
            </div>
            <div>
              <div className="title">其他链接</div>
              <ul>
                <li>
                  <a href="https://www.court.gov.cn/index.html">
                    中国最高人民法院
                  </a>
                </li>
                <li>
                  <a href="https://www.moj.gov.cn">中国司法部</a>
                </li>
                <li>
                  <a href="www.jienenglaw.com">江苏竭能律所</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="title">关注我们</div>
              <img src={png1} alt="" style={{ marginRight: '12px' }} />
              <img src={png1} alt="" />
            </div>
          </div>

          <div className="line"></div>
          <div className="copyRight">
            江苏竭能信息咨询服务有限公司 版权所有© www.jieneng.com.cn
            苏ICP备17015514号-3|
            <img src={png2} alt="png2" />
            苏公网安备32041202001595号
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className={`sub ${state ? '' : 'dn'}`}>
          <div className="box box1">
            <img src={png4} alt="png4" />
            <div>
              <div>
                已经为<span>2000</span>余位当事人成功解决问题,
              </div>
              <div>
                为当事人争取直接经济利益<span>64,658,200</span>元
              </div>
            </div>
          </div>
          <div className="box">
            <div className="form">
              <div className="name">
                <div>
                  <input
                    type="text"
                    placeholder="您的名字"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="您的手机"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="ls">
                <div>
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
                <div>
                  <select
                    value={delegation_type}
                    onChange={(e) => setDelegation_type(e.target.value)}
                  >
                    <option value="民事纠纷">民事纠纷</option>
                    <option value="刑事案件">刑事案件</option>
                    <option value="企业顾问">企业顾问</option>
                    <option value="信用修复">信用修复</option>
                    <option value="其他问题">其他问题</option>
                  </select>
                </div>
              </div>
              <div className="save" onClick={save}>
                <div>提交委托</div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <div>江苏竭能信息咨询服务有限公司</div>
          <div>版权所有©www.jieneng.com.cn苏ICP备17015514号-3</div>
          <div>
            <img src={png2} alt="png2" />
            苏公网安备32041202001595号
          </div>
        </div>
      </div>
    </div>
  )
}
