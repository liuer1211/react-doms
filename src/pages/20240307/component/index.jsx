import { useEffect, useState } from 'react';
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css';
import styles from './index.module.less'

function Index() {

  useEffect(()=>{
    let certifySwiper = new Swiper('.certify .swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      speed:1000,
      autoplay: {
        delay: 15000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      on: {
        progress: function(progress) {
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            let slideProgress = this.slides[i].progress;
            let modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let translate = slideProgress * modify * 150 + 'px';
            let scale = 1 - Math.abs(slideProgress) / 3;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 1) {
              slide.css('opacity', 0);
            }
          }
        },
        setTransition: function(transition) {
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i)
            slide.transition(transition);
          }

        }
      }
    })
  },[])
  
  return (
    <div className={styles.mySwiper}>
      <div className='certify'>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>自皇帝时期到夏商周，都是皇帝本家的天下，帝喾，颛顼，尧，舜，禹皆是皇帝血脉</div>
                  <br/>
                  <div>周朝末期出现春秋五霸、战国七雄对王位虎视眈眈，后秦大一统</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>幽王：烽火戏诸侯</div>
                  <br/>
                  <div>申侯：申后的父亲，联合缯和犬戎攻打幽王，幽王死于骊山</div>
                  <br/>
                  <div>宜臼：平王，幽王申后之子，东迁，史称东周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>齐、楚、秦、晋霸主日益壮大</div>
                  <br/>
                  <div>四十九年，鲁隐公即位</div>
                  <br/>
                  <div>鲁隐公即位</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>周公黑肩打算杀死庄王而立王子克。辛伯报告王，王杀周公黑肩。王子克逃亡到燕国。</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                  <br/>
                  <div>惠王二年，当初庄王的宠妾姚氏生下子颓，颓有宠。</div>
                  <br/>
                  <div>二十五年，惠王死，其子襄王郑即位。</div>
                  <br/>
                  <div>管仲：知礼节，守君臣之道</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>十三年，郑伐滑</div>
                  <br/>
                  <div>二十四年，晋文公死</div>
                  <br/>
                  <div>三十一年，秦穆公死</div>
                  <br/>
                  <div>定王元年，楚庄王伐陆浑之戎，驻扎在洛，使人问九鼎</div>
                  <br/>
                  <div>十六年，楚庄王死</div>
                  <br/>
                  <div>四十一年，楚灭陈国。孔子死</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>威烈王二十三年，放置九鼎的王城地震。</div>
                  <br/>
                  <div>二十六年，周赐伯的称号给秦孝公。</div>
                  <br/>
                  <div>王赦时东周和西周分裂，各自为政。王赧迁都于西周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）  </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>八年，秦攻打宜阳，楚救宜阳</div>
                  <br/>
                  <div>秦借道于东、西周之间，准备攻打韩</div>
                  <br/>
                  <div>东周与西周交战，韩救两周。</div>
                  <br/>
                  <div>秦人何其强盛</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div >去疾（哀王） 叔袭（思王） 嵬（考王） </div>
                <div >午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>五十八年，三晋抵抗秦</div>
                  <br/>
                  <div>东周、西周都被归并入秦，周从此祀统断绝。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>自皇帝时期到夏商周，都是皇帝本家的天下，帝喾，颛顼，尧，舜，禹皆是皇帝血脉</div>
                  <br/>
                  <div>周朝末期出现春秋五霸、战国七雄对王位虎视眈眈，后秦大一统</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>幽王：烽火戏诸侯</div>
                  <br/>
                  <div>申侯：申后的父亲，联合缯和犬戎攻打幽王，幽王死于骊山</div>
                  <br/>
                  <div>宜臼：平王，幽王申后之子，东迁，史称东周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>齐、楚、秦、晋霸主日益壮大</div>
                  <br/>
                  <div>四十九年，鲁隐公即位</div>
                  <br/>
                  <div>鲁隐公即位</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>周公黑肩打算杀死庄王而立王子克。辛伯报告王，王杀周公黑肩。王子克逃亡到燕国。</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                  <br/>
                  <div>惠王二年，当初庄王的宠妾姚氏生下子颓，颓有宠。</div>
                  <br/>
                  <div>二十五年，惠王死，其子襄王郑即位。</div>
                  <br/>
                  <div>管仲：知礼节，守君臣之道</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>十三年，郑伐滑</div>
                  <br/>
                  <div>二十四年，晋文公死</div>
                  <br/>
                  <div>三十一年，秦穆公死</div>
                  <br/>
                  <div>定王元年，楚庄王伐陆浑之戎，驻扎在洛，使人问九鼎</div>
                  <br/>
                  <div>十六年，楚庄王死</div>
                  <br/>
                  <div>四十一年，楚灭陈国。孔子死</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>威烈王二十三年，放置九鼎的王城地震。</div>
                  <br/>
                  <div>二十六年，周赐伯的称号给秦孝公。</div>
                  <br/>
                  <div>王赦时东周和西周分裂，各自为政。王赧迁都于西周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）  </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>八年，秦攻打宜阳，楚救宜阳</div>
                  <br/>
                  <div>秦借道于东、西周之间，准备攻打韩</div>
                  <br/>
                  <div>东周与西周交战，韩救两周。</div>
                  <br/>
                  <div>秦人何其强盛</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div >去疾（哀王） 叔袭（思王） 嵬（考王） </div>
                <div >午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>五十八年，三晋抵抗秦</div>
                  <br/>
                  <div>东周、西周都被归并入秦，周从此祀统断绝。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>自皇帝时期到夏商周，都是皇帝本家的天下，帝喾，颛顼，尧，舜，禹皆是皇帝血脉</div>
                  <br/>
                  <div>周朝末期出现春秋五霸、战国七雄对王位虎视眈眈，后秦大一统</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>幽王：烽火戏诸侯</div>
                  <br/>
                  <div>申侯：申后的父亲，联合缯和犬戎攻打幽王，幽王死于骊山</div>
                  <br/>
                  <div>宜臼：平王，幽王申后之子，东迁，史称东周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>齐、楚、秦、晋霸主日益壮大</div>
                  <br/>
                  <div>四十九年，鲁隐公即位</div>
                  <br/>
                  <div>鲁隐公即位</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>周公黑肩打算杀死庄王而立王子克。辛伯报告王，王杀周公黑肩。王子克逃亡到燕国。</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                  <br/>
                  <div>惠王二年，当初庄王的宠妾姚氏生下子颓，颓有宠。</div>
                  <br/>
                  <div>二十五年，惠王死，其子襄王郑即位。</div>
                  <br/>
                  <div>管仲：知礼节，守君臣之道</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>十三年，郑伐滑</div>
                  <br/>
                  <div>二十四年，晋文公死</div>
                  <br/>
                  <div>三十一年，秦穆公死</div>
                  <br/>
                  <div>定王元年，楚庄王伐陆浑之戎，驻扎在洛，使人问九鼎</div>
                  <br/>
                  <div>十六年，楚庄王死</div>
                  <br/>
                  <div>四十一年，楚灭陈国。孔子死</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>威烈王二十三年，放置九鼎的王城地震。</div>
                  <br/>
                  <div>二十六年，周赐伯的称号给秦孝公。</div>
                  <br/>
                  <div>王赦时东周和西周分裂，各自为政。王赧迁都于西周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）  </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>八年，秦攻打宜阳，楚救宜阳</div>
                  <br/>
                  <div>秦借道于东、西周之间，准备攻打韩</div>
                  <br/>
                  <div>东周与西周交战，韩救两周。</div>
                  <br/>
                  <div>秦人何其强盛</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div >去疾（哀王） 叔袭（思王） 嵬（考王） </div>
                <div >午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>五十八年，三晋抵抗秦</div>
                  <br/>
                  <div>东周、西周都被归并入秦，周从此祀统断绝。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>自皇帝时期到夏商周，都是皇帝本家的天下，帝喾，颛顼，尧，舜，禹皆是皇帝血脉</div>
                  <br/>
                  <div>周朝末期出现春秋五霸、战国七雄对王位虎视眈眈，后秦大一统</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>幽王：烽火戏诸侯</div>
                  <br/>
                  <div>申侯：申后的父亲，联合缯和犬戎攻打幽王，幽王死于骊山</div>
                  <br/>
                  <div>宜臼：平王，幽王申后之子，东迁，史称东周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>齐、楚、秦、晋霸主日益壮大</div>
                  <br/>
                  <div>四十九年，鲁隐公即位</div>
                  <br/>
                  <div>鲁隐公即位</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>周公黑肩打算杀死庄王而立王子克。辛伯报告王，王杀周公黑肩。王子克逃亡到燕国。</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                  <br/>
                  <div>惠王二年，当初庄王的宠妾姚氏生下子颓，颓有宠。</div>
                  <br/>
                  <div>二十五年，惠王死，其子襄王郑即位。</div>
                  <br/>
                  <div>管仲：知礼节，守君臣之道</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>十三年，郑伐滑</div>
                  <br/>
                  <div>二十四年，晋文公死</div>
                  <br/>
                  <div>三十一年，秦穆公死</div>
                  <br/>
                  <div>定王元年，楚庄王伐陆浑之戎，驻扎在洛，使人问九鼎</div>
                  <br/>
                  <div>十六年，楚庄王死</div>
                  <br/>
                  <div>四十一年，楚灭陈国。孔子死</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>威烈王二十三年，放置九鼎的王城地震。</div>
                  <br/>
                  <div>二十六年，周赐伯的称号给秦孝公。</div>
                  <br/>
                  <div>王赦时东周和西周分裂，各自为政。王赧迁都于西周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）  </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>八年，秦攻打宜阳，楚救宜阳</div>
                  <br/>
                  <div>秦借道于东、西周之间，准备攻打韩</div>
                  <br/>
                  <div>东周与西周交战，韩救两周。</div>
                  <br/>
                  <div>秦人何其强盛</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div >去疾（哀王） 叔袭（思王） 嵬（考王） </div>
                <div >午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>五十八年，三晋抵抗秦</div>
                  <br/>
                  <div>东周、西周都被归并入秦，周从此祀统断绝。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>自皇帝时期到夏商周，都是皇帝本家的天下，帝喾，颛顼，尧，舜，禹皆是皇帝血脉</div>
                  <br/>
                  <div>周朝末期出现春秋五霸、战国七雄对王位虎视眈眈，后秦大一统</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>幽王：烽火戏诸侯</div>
                  <br/>
                  <div>申侯：申后的父亲，联合缯和犬戎攻打幽王，幽王死于骊山</div>
                  <br/>
                  <div>宜臼：平王，幽王申后之子，东迁，史称东周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>齐、楚、秦、晋霸主日益壮大</div>
                  <br/>
                  <div>四十九年，鲁隐公即位</div>
                  <br/>
                  <div>鲁隐公即位</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>周公黑肩打算杀死庄王而立王子克。辛伯报告王，王杀周公黑肩。王子克逃亡到燕国。</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                  <br/>
                  <div>惠王二年，当初庄王的宠妾姚氏生下子颓，颓有宠。</div>
                  <br/>
                  <div>二十五年，惠王死，其子襄王郑即位。</div>
                  <br/>
                  <div>管仲：知礼节，守君臣之道</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>十三年，郑伐滑</div>
                  <br/>
                  <div>二十四年，晋文公死</div>
                  <br/>
                  <div>三十一年，秦穆公死</div>
                  <br/>
                  <div>定王元年，楚庄王伐陆浑之戎，驻扎在洛，使人问九鼎</div>
                  <br/>
                  <div>十六年，楚庄王死</div>
                  <br/>
                  <div>四十一年，楚灭陈国。孔子死</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>威烈王二十三年，放置九鼎的王城地震。</div>
                  <br/>
                  <div>二十六年，周赐伯的称号给秦孝公。</div>
                  <br/>
                  <div>王赦时东周和西周分裂，各自为政。王赧迁都于西周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）  </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>八年，秦攻打宜阳，楚救宜阳</div>
                  <br/>
                  <div>秦借道于东、西周之间，准备攻打韩</div>
                  <br/>
                  <div>东周与西周交战，韩救两周。</div>
                  <br/>
                  <div>秦人何其强盛</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div >去疾（哀王） 叔袭（思王） 嵬（考王） </div>
                <div >午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>五十八年，三晋抵抗秦</div>
                  <br/>
                  <div>东周、西周都被归并入秦，周从此祀统断绝。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>自皇帝时期到夏商周，都是皇帝本家的天下，帝喾，颛顼，尧，舜，禹皆是皇帝血脉</div>
                  <br/>
                  <div>周朝末期出现春秋五霸、战国七雄对王位虎视眈眈，后秦大一统</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>幽王：烽火戏诸侯</div>
                  <br/>
                  <div>申侯：申后的父亲，联合缯和犬戎攻打幽王，幽王死于骊山</div>
                  <br/>
                  <div>宜臼：平王，幽王申后之子，东迁，史称东周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>齐、楚、秦、晋霸主日益壮大</div>
                  <br/>
                  <div>四十九年，鲁隐公即位</div>
                  <br/>
                  <div>鲁隐公即位</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>周公黑肩打算杀死庄王而立王子克。辛伯报告王，王杀周公黑肩。王子克逃亡到燕国。</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                  <br/>
                  <div>惠王二年，当初庄王的宠妾姚氏生下子颓，颓有宠。</div>
                  <br/>
                  <div>二十五年，惠王死，其子襄王郑即位。</div>
                  <br/>
                  <div>管仲：知礼节，守君臣之道</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>十三年，郑伐滑</div>
                  <br/>
                  <div>二十四年，晋文公死</div>
                  <br/>
                  <div>三十一年，秦穆公死</div>
                  <br/>
                  <div>定王元年，楚庄王伐陆浑之戎，驻扎在洛，使人问九鼎</div>
                  <br/>
                  <div>十六年，楚庄王死</div>
                  <br/>
                  <div>四十一年，楚灭陈国。孔子死</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>威烈王二十三年，放置九鼎的王城地震。</div>
                  <br/>
                  <div>二十六年，周赐伯的称号给秦孝公。</div>
                  <br/>
                  <div>王赦时东周和西周分裂，各自为政。王赧迁都于西周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）  </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>八年，秦攻打宜阳，楚救宜阳</div>
                  <br/>
                  <div>秦借道于东、西周之间，准备攻打韩</div>
                  <br/>
                  <div>东周与西周交战，韩救两周。</div>
                  <br/>
                  <div>秦人何其强盛</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div >去疾（哀王） 叔袭（思王） 嵬（考王） </div>
                <div >午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>五十八年，三晋抵抗秦</div>
                  <br/>
                  <div>东周、西周都被归并入秦，周从此祀统断绝。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>自皇帝时期到夏商周，都是皇帝本家的天下，帝喾，颛顼，尧，舜，禹皆是皇帝血脉</div>
                  <br/>
                  <div>周朝末期出现春秋五霸、战国七雄对王位虎视眈眈，后秦大一统</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>幽王：烽火戏诸侯</div>
                  <br/>
                  <div>申侯：申后的父亲，联合缯和犬戎攻打幽王，幽王死于骊山</div>
                  <br/>
                  <div>宜臼：平王，幽王申后之子，东迁，史称东周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div>佗（庄王）  王子克 </div>
                <div>胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>齐、楚、秦、晋霸主日益壮大</div>
                  <br/>
                  <div>四十九年，鲁隐公即位</div>
                  <br/>
                  <div>鲁隐公即位</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div>郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>周公黑肩打算杀死庄王而立王子克。辛伯报告王，王杀周公黑肩。王子克逃亡到燕国。</div>
                  <br/>
                  <div>釐王三年，齐桓公开始称霸。</div>
                  <br/>
                  <div>惠王二年，当初庄王的宠妾姚氏生下子颓，颓有宠。</div>
                  <br/>
                  <div>二十五年，惠王死，其子襄王郑即位。</div>
                  <br/>
                  <div>管仲：知礼节，守君臣之道</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div>班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>十三年，郑伐滑</div>
                  <br/>
                  <div>二十四年，晋文公死</div>
                  <br/>
                  <div>三十一年，秦穆公死</div>
                  <br/>
                  <div>定王元年，楚庄王伐陆浑之戎，驻扎在洛，使人问九鼎</div>
                  <br/>
                  <div>十六年，楚庄王死</div>
                  <br/>
                  <div>四十一年，楚灭陈国。孔子死</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）   </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>威烈王二十三年，放置九鼎的王城地震。</div>
                  <br/>
                  <div>二十六年，周赐伯的称号给秦孝公。</div>
                  <br/>
                  <div>王赦时东周和西周分裂，各自为政。王赧迁都于西周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）  </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>八年，秦攻打宜阳，楚救宜阳</div>
                  <br/>
                  <div>秦借道于东、西周之间，准备攻打韩</div>
                  <br/>
                  <div>东周与西周交战，韩救两周。</div>
                  <br/>
                  <div>秦人何其强盛</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div >佗（庄王）  王子克 </div>
                <div >胡齐（釐王） 颓</div>
                <div>阆（惠王）  叔带</div>
                <div >郑（襄王） </div>
                <div>壬臣（顷王） </div>
                <div >班（匡王） 瑜（定王）</div>
                <div>夷（简王） </div>
                <div>泄心（灵王） </div>
                <div>贵（景王） </div>
                <div >子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div >去疾（哀王） 叔袭（思王） 嵬（考王） </div>
                <div >午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>五十八年，三晋抵抗秦</div>
                  <br/>
                  <div>东周、西周都被归并入秦，周从此祀统断绝。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;

 