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
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>姜原：帝喾的第一个配偶</div>
                  <br/>
                  <div>姜原：怀胎满月生弃</div>
                  <br/>
                  <div>弃：天生异象。满月而生，因不吉利，被弃。牛马不踩，飞鸟相护。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div >公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>弃：善种谷物，尧举弃为农师，舜封弃于干邰，号称后稷，姓为姬氏。</div>
                  <br/>
                  <div>公刘:恢复后稷的旧业，致力农作，受人敬仰</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div >古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>公刘：周人治道的大兴之始</div>
                  <br/>
                  <div>古公亶父：重新恢复后稷、公刘的旧业，受人爱戴</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>古公亶父：移居歧山脚下，建造城郭和房屋，分成邑落居住，设立司徒、司马、司空、司士、司寇五种官职。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：文王，继承后稷、公刘的事业，遵照古公、公季的法则</div>
                  <br/>
                  <div>昌：礼遇贤能，士人纷纷投奔他</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：被囚羑里，谋士搭救。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：文可治理一方，武可征战各地</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：武王，太公望做他的师，周公旦做他的傅</div>
                  <br/>
                  <div>发：举行阅兵，欲起兵</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：起兵渡河，白鱼入舟</div>
                  <br/>
                  <div>发：八百诸侯会盟，因时机未到，班师回朝</div>
                  <br/>
                  <div>纣：杀比干，囚箕子，臣子投奔周</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：告天下书，起兵伐纣，会师牧野</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：誓师伐纣</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>纣：鹿台自焚</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：奉天伐纣，入住殷商</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：解救百姓于水火</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：分封有功之臣</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：天下安定，息武止戈</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>周公：武王死，辅佐成王，摄政</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>周公：摄政七年，还政成王</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>姜原：帝喾的第一个配偶</div>
                  <br/>
                  <div>姜原：怀胎满月生弃</div>
                  <br/>
                  <div>弃：天生异象。满月而生，因不吉利，被弃。牛马不踩，飞鸟相护。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div >公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>弃：善种谷物，尧举弃为农师，舜封弃于干邰，号称后稷，姓为姬氏。</div>
                  <br/>
                  <div>公刘:恢复后稷的旧业，致力农作，受人敬仰</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div >古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>公刘：周人治道的大兴之始</div>
                  <br/>
                  <div>古公亶父：重新恢复后稷、公刘的旧业，受人爱戴</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>古公亶父：移居歧山脚下，建造城郭和房屋，分成邑落居住，设立司徒、司马、司空、司士、司寇五种官职。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：文王，继承后稷、公刘的事业，遵照古公、公季的法则</div>
                  <br/>
                  <div>昌：礼遇贤能，士人纷纷投奔他</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：被囚羑里，谋士搭救。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：文可治理一方，武可征战各地</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：武王，太公望做他的师，周公旦做他的傅</div>
                  <br/>
                  <div>发：举行阅兵，欲起兵</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：起兵渡河，白鱼入舟</div>
                  <br/>
                  <div>发：八百诸侯会盟，因时机未到，班师回朝</div>
                  <br/>
                  <div>纣：杀比干，囚箕子，臣子投奔周</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：告天下书，起兵伐纣，会师牧野</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：誓师伐纣</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>纣：鹿台自焚</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：奉天伐纣，入住殷商</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：解救百姓于水火</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：分封有功之臣</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：天下安定，息武止戈</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>周公：武王死，辅佐成王，摄政</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>周公：摄政七年，还政成王</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>姜原：帝喾的第一个配偶</div>
                  <br/>
                  <div>姜原：怀胎满月生弃</div>
                  <br/>
                  <div>弃：天生异象。满月而生，因不吉利，被弃。牛马不踩，飞鸟相护。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div >公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>弃：善种谷物，尧举弃为农师，舜封弃于干邰，号称后稷，姓为姬氏。</div>
                  <br/>
                  <div>公刘:恢复后稷的旧业，致力农作，受人敬仰</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div >古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>公刘：周人治道的大兴之始</div>
                  <br/>
                  <div>古公亶父：重新恢复后稷、公刘的旧业，受人爱戴</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>古公亶父：移居歧山脚下，建造城郭和房屋，分成邑落居住，设立司徒、司马、司空、司士、司寇五种官职。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：文王，继承后稷、公刘的事业，遵照古公、公季的法则</div>
                  <br/>
                  <div>昌：礼遇贤能，士人纷纷投奔他</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：被囚羑里，谋士搭救。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：文可治理一方，武可征战各地</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：武王，太公望做他的师，周公旦做他的傅</div>
                  <br/>
                  <div>发：举行阅兵，欲起兵</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：起兵渡河，白鱼入舟</div>
                  <br/>
                  <div>发：八百诸侯会盟，因时机未到，班师回朝</div>
                  <br/>
                  <div>纣：杀比干，囚箕子，臣子投奔周</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：告天下书，起兵伐纣，会师牧野</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：誓师伐纣</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>纣：鹿台自焚</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：奉天伐纣，入住殷商</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：解救百姓于水火</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：分封有功之臣</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：天下安定，息武止戈</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>周公：武王死，辅佐成王，摄政</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>周公：摄政七年，还政成王</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>姜原：帝喾的第一个配偶</div>
                  <br/>
                  <div>姜原：怀胎满月生弃</div>
                  <br/>
                  <div>弃：天生异象。满月而生，因不吉利，被弃。牛马不踩，飞鸟相护。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div >公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>弃：善种谷物，尧举弃为农师，舜封弃于干邰，号称后稷，姓为姬氏。</div>
                  <br/>
                  <div>公刘:恢复后稷的旧业，致力农作，受人敬仰</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div >古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>公刘：周人治道的大兴之始</div>
                  <br/>
                  <div>古公亶父：重新恢复后稷、公刘的旧业，受人爱戴</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>古公亶父：移居歧山脚下，建造城郭和房屋，分成邑落居住，设立司徒、司马、司空、司士、司寇五种官职。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div>诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：文王，继承后稷、公刘的事业，遵照古公、公季的法则</div>
                  <br/>
                  <div>昌：礼遇贤能，士人纷纷投奔他</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：被囚羑里，谋士搭救。</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>昌：文可治理一方，武可征战各地</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：武王，太公望做他的师，周公旦做他的傅</div>
                  <br/>
                  <div>发：举行阅兵，欲起兵</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：起兵渡河，白鱼入舟</div>
                  <br/>
                  <div>发：八百诸侯会盟，因时机未到，班师回朝</div>
                  <br/>
                  <div>纣：杀比干，囚箕子，臣子投奔周</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：告天下书，起兵伐纣，会师牧野</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：誓师伐纣</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>纣：鹿台自焚</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：奉天伐纣，入住殷商</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：解救百姓于水火</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：分封有功之臣</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>发：天下安定，息武止戈</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>周公：武王死，辅佐成王，摄政</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div>公刘</div>
                <div>庆节</div>
                <div>皇仆</div>
                <div>毁隃</div>
                <div>公非</div>
                <div>高圉</div>
                <div>亚圉</div>
                <div>公叔祖类</div>
                <div>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div >昌（西伯、文王）</div>
                <div >发（武王）</div>
                <div >诵代 （成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼（平王） 伯服</div>
                <div className='pos'>
                  <div>周公：摄政七年，还政成王</div>
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

 