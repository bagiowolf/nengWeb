import React from 'react'
import png4 from './img/png4.png'
import png1 from './img/png1.png'
import png2 from './img/png2.png'
import png3 from './img/png3.png'
import png5 from './img/png5.png'
import './App.css'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="sub">
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
                <div>您的姓名</div>
                <div>您的手机</div>
              </div>
              <div className="ls">
                <div>执法律师</div>
                <div>刑事辩护委托</div>
              </div>
              <div className="save">
                <div>提交委托</div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="table">
              <div className="top">
                每日前十名预约咨询资深律师，一对一电话解答
              </div>
              <div className="tabletr">
                <div className="tr">
                  实时预约：陆先生139****5158五十分钟前已经成功预约
                </div>
                <div className="tr">
                  实时预约：黄女士139****5158五十分钟前已经成功预约
                </div>
                <div className="tr">
                  实时预约：李先生139****5158五十分钟前已经成功预约
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
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
                <li>调整链接</li>
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
        <div className="sub">
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
                <div>您的姓名</div>
                <div>您的手机</div>
              </div>
              <div className="ls">
                <div>执法律师</div>
                <div>刑事辩护委托</div>
              </div>
              <div className="save">
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
