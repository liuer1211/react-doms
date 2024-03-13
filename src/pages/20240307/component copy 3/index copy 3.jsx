import { useEffect, useState } from 'react';
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css';
import styles from './index.module.less'

function Index() {

  useEffect(()=>{
    // new Swiper('.swiper-container', {
    //   autoplay: {
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: true,
    //   },
    //   // loop: true,
    //   // slidesPerView: 3,
    //   centeredSlides: true,
    //   spaceBetween : 20,
    //   speed:500,
    // })
    let certifySwiper = new Swiper('.certify .swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      speed:1000,
      autoplay: {
        delay: 20000,
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
                <div className='big'>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
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
                  <div>幽王举烽火 褒姒才大笑</div>
                  <div>虢石父为卿士 喜欢阿谀奉承和贪图财利</div>
                  <div>申侯发了怒。联合缯和属于西夷的犬戎攻打幽王 幽王杀死在骊山下，掳走褒姒</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div className='big'>宜臼（平王，申后之子） 伯服（褒姒之子）</div>
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
                  <div>东迁到雒邑</div>
                  <div>齐、楚、秦、晋开始强大，</div>
                  <div>鲁隐公即位</div>
                  <div>郑庄公来朝见，桓王不予礼遇。</div>
                  <div>鲁国杀隐公，立桓公。十三年，伐郑，郑射伤桓王，桓王逃跑回来。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div >宜臼（平王，申后之子） 伯服（褒姒之子）</div>
                <div>亶父</div>
                <div>林（桓王）</div>
                <div className='big'>佗（庄王）  王子克 </div>
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
                  <div>釐王三年，齐桓公开始称霸。</div>
                  <div>惠王二年，当初庄王的宠妾姚氏生下子颓，颓有宠。</div>
                  <div>策划召燕、卫的军队，讨伐惠王。惠王逃奔到温，</div>
                  <div>郑国和虢国的国君来讨伐，重新迎立惠王</div>
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
                <div className='big'>郑（襄王） </div>
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
                  <div>叔带与戎、翟策划攻打襄玉，襄王想杀掉叔带，叔带逃奔到齐。</div>
                  <div>齐桓公派管仲为戎与周说和，派隰朋为戎与晋说和。</div>
                  <div>管仲到底还是只受下卿之礼而归。九年，齐桓公死。十二年，叔带又回到周。</div>
                  <div>王发怒，准备用翟人伐郑</div>
                  <div>王不听。十六年，王废黜翟女之后，翟人来讨伐，杀死谭伯。</div>
                  <div>二十年，晋文公召襄王，襄王与他在河阳、践土会见，诸侯都来朝见，史书加以掩饰，说是“天王巡狩至于河阳”。</div>
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
                <div className='big'>班（匡王） 瑜（定王）</div>
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
                  <div>楚庄王伐陆浑之戎，驻扎在洛，使人问九鼎。</div>
                  <div>简王十三年，晋杀死他们的国君厉公，从周接回子周，把他立为悼公。</div>
                  <div>灵王二十四年，齐国的崔杼杀死其国君庄公。</div>
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
                <div className='big'>子朝 子丐（敬王） 猛（ 悼王）</div>
                <div>仁（元王） </div>
                <div>介（定王） </div>
                <div>去疾（哀王） 叔袭（思王） 嵬（考王）  </div>
                <div>午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>二十年，景王宠爱子朝，打算立他为太子，但景王却在这时死掉，</div>
                  <div>子丐一伙人与子朝争立，国都中的人立长子猛为王，</div>
                  <div>子朝攻打并杀死猛</div>
                  <div>晋人攻打子朝而立丐为王，就是敬王</div>
                  <div>四年，晋率诸侯送敬王回到周都，子朝称臣</div>
                  <div>十六年，子朝一伙人再次作乱，敬王逃亡到晋。十七年，晋定公终于把周王送回周都。</div>
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
                <div className='big'>去疾（哀王） 叔袭（思王） 嵬（考王） </div>
                <div >午（威烈王）</div>
                <div>骄（安王）</div>
                <div>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>定王十六年，赵、魏、韩三国灭智伯，瓜分其土地。</div>
                  <div>考王把他的弟弟封在河南，就是西周桓公，</div>
                  <div>惠公的幼子封在巩，让他奉侍周王，号称东周惠公。</div>
                  <div>威烈王二十三年，放置九鼎的王城地震。策命韩、魏、赵为诸侯。</div>
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
                <div className='big'>喜（烈王） 扁（显王）</div>
                <div>定（慎靓王）</div>
                <div>延（赧王）</div>
                <div className='pos'>
                  <div>显王五年，祝贺秦献公，献公称伯</div>
                  <div>二十五年，秦在周大会诸侯。</div>
                  <div>二十六年，周赐伯的称号给秦孝公。</div>
                  <div>四十四年，秦惠王称王。这以后诸侯都称王。</div>
                  <div>王赦时东周和西周分裂，各自为政。王赧迁都于西周。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div> 西周武公的共太子死了，他有五个庶子 </div>
                <div>八年，秦攻打宜阳，楚救宜阳</div>
                <div>秦借道于东、西周之间，准备攻打韩，</div>
                <div>秦召西周君，西周君不愿前往，</div>
                <div>东周与西周交战，韩救两周。</div>
                <div>苏厉对周君说：“秦攻破韩、魏，杀师武。北取赵国的蔺、离石，都是白起所为。</div>
                <div>四十二年，秦攻破华阳要塞。</div>
                <div>四十五年，西周君前往秦国，</div>
                <div>五十八年，三晋抵抗秦</div>
                <div>五十九年，秦夺取韩国的阳城和负黍，西周害了怕，背叛秦</div>
                <div>西周君逃奔到秦，叩首认罪，</div>
                <div>过了七年，秦庄襄王灭亡东周。东周、西周都被归并入秦，周从此祀统断绝。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;

 