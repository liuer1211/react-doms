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
                <div>诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>成王: 完成武王的遗愿，人民和睦，颂歌四起</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>钊: 康王，谨遵先帝遗风</div>
                  <br/>
                  <div>召公、毕公共同辅佐康王</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>瑕: 昭王，王道略有缺损</div>
                  <br/>
                  <div>满: 穆王，注重赏罚</div>
                  <br/>
                  <div>祭公谋父: 劝谏满，以德服人</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>邦畿之内是“甸服”，邦畿之外是“侯服”，设置侯、卫的地方叫“宾服”，蛮夷之地叫“要服”，戎翟之地叫“荒服”</div>
                  <br/>
                  <div>属于甸服的要“祭”，属于侯服的要“祀”，属于宾服的要“享”，属于要服的要“贡”，属于荒服的要“王”。</div>
                  <br/>
                  <div>“祭”是以日计，“祀”是以月计，“享”是以季节计，“贡”是以年计，“王”是以终身计。</div>
                  <br/>
                  <div>如果不“祭”就要端正其意志，如果不“祀”就要端正其言辞，如果不“享”就要端正其礼法，如果不“贡”就要端正其名分，如果不“王”就要端正其道德，</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>属于黥刑而不够定罪的，其罚金为一百率</div>
                  <br/>
                  <div>属于劓刑而不够定罪的，其罚金为前者的两倍</div>
                  <br/>
                  <div>属于膑刑而不够定罪的，其罚金为前者的两倍半</div>
                  <br/>
                  <div>属于宫刑而不够定罪的，其罚金为五百率</div>
                  <br/>
                  <div>属于大辟之刑而不够定罪的，其罚金为千率</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>繄扈: 共王，杀弄臣密康公</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>胡：厉王，贪图财利，不听劝诫</div>
                  <br/>
                  <div>芮良夫：劝诫王施惠众人</div>
                  <br/>
                  <div>荣夷公：贪财之辈</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>召公：太子遭难，用自己的儿子代替王太子（宣王），太子得免于难。</div>
                  <br/>
                  <div>静：宣王，召公、周公相辅佐，刚开始国运昌盛，后衰败</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>宫湦：幽王，山陵崩颓，水源枯竭，已显亡国征兆</div>
                  <div>伯阳甫：预测周，气数将尽</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>褒似：龙的涎沫所化</div>
                  <div>宫湦：幽王，废黜申后和太子，为日后骊山之死埋下祸端</div>
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
                <div>诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>成王: 完成武王的遗愿，人民和睦，颂歌四起</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>钊: 康王，谨遵先帝遗风</div>
                  <br/>
                  <div>召公、毕公共同辅佐康王</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>瑕: 昭王，王道略有缺损</div>
                  <br/>
                  <div>满: 穆王，注重赏罚</div>
                  <br/>
                  <div>祭公谋父: 劝谏满，以德服人</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>邦畿之内是“甸服”，邦畿之外是“侯服”，设置侯、卫的地方叫“宾服”，蛮夷之地叫“要服”，戎翟之地叫“荒服”</div>
                  <br/>
                  <div>属于甸服的要“祭”，属于侯服的要“祀”，属于宾服的要“享”，属于要服的要“贡”，属于荒服的要“王”。</div>
                  <br/>
                  <div>“祭”是以日计，“祀”是以月计，“享”是以季节计，“贡”是以年计，“王”是以终身计。</div>
                  <br/>
                  <div>如果不“祭”就要端正其意志，如果不“祀”就要端正其言辞，如果不“享”就要端正其礼法，如果不“贡”就要端正其名分，如果不“王”就要端正其道德，</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>属于黥刑而不够定罪的，其罚金为一百率</div>
                  <br/>
                  <div>属于劓刑而不够定罪的，其罚金为前者的两倍</div>
                  <br/>
                  <div>属于膑刑而不够定罪的，其罚金为前者的两倍半</div>
                  <br/>
                  <div>属于宫刑而不够定罪的，其罚金为五百率</div>
                  <br/>
                  <div>属于大辟之刑而不够定罪的，其罚金为千率</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>繄扈: 共王，杀弄臣密康公</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>胡：厉王，贪图财利，不听劝诫</div>
                  <br/>
                  <div>芮良夫：劝诫王施惠众人</div>
                  <br/>
                  <div>荣夷公：贪财之辈</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>召公：太子遭难，用自己的儿子代替王太子（宣王），太子得免于难。</div>
                  <br/>
                  <div>静：宣王，召公、周公相辅佐，刚开始国运昌盛，后衰败</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>宫湦：幽王，山陵崩颓，水源枯竭，已显亡国征兆</div>
                  <div>伯阳甫：预测周，气数将尽</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>褒似：龙的涎沫所化</div>
                  <div>宫湦：幽王，废黜申后和太子，为日后骊山之死埋下祸端</div>
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
                <div>诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>成王: 完成武王的遗愿，人民和睦，颂歌四起</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>钊: 康王，谨遵先帝遗风</div>
                  <br/>
                  <div>召公、毕公共同辅佐康王</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>瑕: 昭王，王道略有缺损</div>
                  <br/>
                  <div>满: 穆王，注重赏罚</div>
                  <br/>
                  <div>祭公谋父: 劝谏满，以德服人</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>邦畿之内是“甸服”，邦畿之外是“侯服”，设置侯、卫的地方叫“宾服”，蛮夷之地叫“要服”，戎翟之地叫“荒服”</div>
                  <br/>
                  <div>属于甸服的要“祭”，属于侯服的要“祀”，属于宾服的要“享”，属于要服的要“贡”，属于荒服的要“王”。</div>
                  <br/>
                  <div>“祭”是以日计，“祀”是以月计，“享”是以季节计，“贡”是以年计，“王”是以终身计。</div>
                  <br/>
                  <div>如果不“祭”就要端正其意志，如果不“祀”就要端正其言辞，如果不“享”就要端正其礼法，如果不“贡”就要端正其名分，如果不“王”就要端正其道德，</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>属于黥刑而不够定罪的，其罚金为一百率</div>
                  <br/>
                  <div>属于劓刑而不够定罪的，其罚金为前者的两倍</div>
                  <br/>
                  <div>属于膑刑而不够定罪的，其罚金为前者的两倍半</div>
                  <br/>
                  <div>属于宫刑而不够定罪的，其罚金为五百率</div>
                  <br/>
                  <div>属于大辟之刑而不够定罪的，其罚金为千率</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>繄扈: 共王，杀弄臣密康公</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>胡：厉王，贪图财利，不听劝诫</div>
                  <br/>
                  <div>芮良夫：劝诫王施惠众人</div>
                  <br/>
                  <div>荣夷公：贪财之辈</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>召公：太子遭难，用自己的儿子代替王太子（宣王），太子得免于难。</div>
                  <br/>
                  <div>静：宣王，召公、周公相辅佐，刚开始国运昌盛，后衰败</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>宫湦：幽王，山陵崩颓，水源枯竭，已显亡国征兆</div>
                  <div>伯阳甫：预测周，气数将尽</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>褒似：龙的涎沫所化</div>
                  <div>宫湦：幽王，废黜申后和太子，为日后骊山之死埋下祸端</div>
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
                <div>诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>成王: 完成武王的遗愿，人民和睦，颂歌四起</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>钊: 康王，谨遵先帝遗风</div>
                  <br/>
                  <div>召公、毕公共同辅佐康王</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>瑕: 昭王，王道略有缺损</div>
                  <br/>
                  <div>满: 穆王，注重赏罚</div>
                  <br/>
                  <div>祭公谋父: 劝谏满，以德服人</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>邦畿之内是“甸服”，邦畿之外是“侯服”，设置侯、卫的地方叫“宾服”，蛮夷之地叫“要服”，戎翟之地叫“荒服”</div>
                  <br/>
                  <div>属于甸服的要“祭”，属于侯服的要“祀”，属于宾服的要“享”，属于要服的要“贡”，属于荒服的要“王”。</div>
                  <br/>
                  <div>“祭”是以日计，“祀”是以月计，“享”是以季节计，“贡”是以年计，“王”是以终身计。</div>
                  <br/>
                  <div>如果不“祭”就要端正其意志，如果不“祀”就要端正其言辞，如果不“享”就要端正其礼法，如果不“贡”就要端正其名分，如果不“王”就要端正其道德，</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>属于黥刑而不够定罪的，其罚金为一百率</div>
                  <br/>
                  <div>属于劓刑而不够定罪的，其罚金为前者的两倍</div>
                  <br/>
                  <div>属于膑刑而不够定罪的，其罚金为前者的两倍半</div>
                  <br/>
                  <div>属于宫刑而不够定罪的，其罚金为五百率</div>
                  <br/>
                  <div>属于大辟之刑而不够定罪的，其罚金为千率</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>繄扈: 共王，杀弄臣密康公</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>胡：厉王，贪图财利，不听劝诫</div>
                  <br/>
                  <div>芮良夫：劝诫王施惠众人</div>
                  <br/>
                  <div>荣夷公：贪财之辈</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>召公：太子遭难，用自己的儿子代替王太子（宣王），太子得免于难。</div>
                  <br/>
                  <div>静：宣王，召公、周公相辅佐，刚开始国运昌盛，后衰败</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>宫湦：幽王，山陵崩颓，水源枯竭，已显亡国征兆</div>
                  <div>伯阳甫：预测周，气数将尽</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>褒似：龙的涎沫所化</div>
                  <div>宫湦：幽王，废黜申后和太子，为日后骊山之死埋下祸端</div>
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
                <div>诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>成王: 完成武王的遗愿，人民和睦，颂歌四起</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>钊: 康王，谨遵先帝遗风</div>
                  <br/>
                  <div>召公、毕公共同辅佐康王</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>瑕: 昭王，王道略有缺损</div>
                  <br/>
                  <div>满: 穆王，注重赏罚</div>
                  <br/>
                  <div>祭公谋父: 劝谏满，以德服人</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>邦畿之内是“甸服”，邦畿之外是“侯服”，设置侯、卫的地方叫“宾服”，蛮夷之地叫“要服”，戎翟之地叫“荒服”</div>
                  <br/>
                  <div>属于甸服的要“祭”，属于侯服的要“祀”，属于宾服的要“享”，属于要服的要“贡”，属于荒服的要“王”。</div>
                  <br/>
                  <div>“祭”是以日计，“祀”是以月计，“享”是以季节计，“贡”是以年计，“王”是以终身计。</div>
                  <br/>
                  <div>如果不“祭”就要端正其意志，如果不“祀”就要端正其言辞，如果不“享”就要端正其礼法，如果不“贡”就要端正其名分，如果不“王”就要端正其道德，</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>属于黥刑而不够定罪的，其罚金为一百率</div>
                  <br/>
                  <div>属于劓刑而不够定罪的，其罚金为前者的两倍</div>
                  <br/>
                  <div>属于膑刑而不够定罪的，其罚金为前者的两倍半</div>
                  <br/>
                  <div>属于宫刑而不够定罪的，其罚金为五百率</div>
                  <br/>
                  <div>属于大辟之刑而不够定罪的，其罚金为千率</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>繄扈: 共王，杀弄臣密康公</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>胡：厉王，贪图财利，不听劝诫</div>
                  <br/>
                  <div>芮良夫：劝诫王施惠众人</div>
                  <br/>
                  <div>荣夷公：贪财之辈</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>召公：太子遭难，用自己的儿子代替王太子（宣王），太子得免于难。</div>
                  <br/>
                  <div>静：宣王，召公、周公相辅佐，刚开始国运昌盛，后衰败</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>宫湦：幽王，山陵崩颓，水源枯竭，已显亡国征兆</div>
                  <div>伯阳甫：预测周，气数将尽</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>褒似：龙的涎沫所化</div>
                  <div>宫湦：幽王，废黜申后和太子，为日后骊山之死埋下祸端</div>
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
                <div>诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>成王: 完成武王的遗愿，人民和睦，颂歌四起</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>钊: 康王，谨遵先帝遗风</div>
                  <br/>
                  <div>召公、毕公共同辅佐康王</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>瑕: 昭王，王道略有缺损</div>
                  <br/>
                  <div>满: 穆王，注重赏罚</div>
                  <br/>
                  <div>祭公谋父: 劝谏满，以德服人</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>邦畿之内是“甸服”，邦畿之外是“侯服”，设置侯、卫的地方叫“宾服”，蛮夷之地叫“要服”，戎翟之地叫“荒服”</div>
                  <br/>
                  <div>属于甸服的要“祭”，属于侯服的要“祀”，属于宾服的要“享”，属于要服的要“贡”，属于荒服的要“王”。</div>
                  <br/>
                  <div>“祭”是以日计，“祀”是以月计，“享”是以季节计，“贡”是以年计，“王”是以终身计。</div>
                  <br/>
                  <div>如果不“祭”就要端正其意志，如果不“祀”就要端正其言辞，如果不“享”就要端正其礼法，如果不“贡”就要端正其名分，如果不“王”就要端正其道德，</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>属于黥刑而不够定罪的，其罚金为一百率</div>
                  <br/>
                  <div>属于劓刑而不够定罪的，其罚金为前者的两倍</div>
                  <br/>
                  <div>属于膑刑而不够定罪的，其罚金为前者的两倍半</div>
                  <br/>
                  <div>属于宫刑而不够定罪的，其罚金为五百率</div>
                  <br/>
                  <div>属于大辟之刑而不够定罪的，其罚金为千率</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>繄扈: 共王，杀弄臣密康公</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>胡：厉王，贪图财利，不听劝诫</div>
                  <br/>
                  <div>芮良夫：劝诫王施惠众人</div>
                  <br/>
                  <div>荣夷公：贪财之辈</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>召公：太子遭难，用自己的儿子代替王太子（宣王），太子得免于难。</div>
                  <br/>
                  <div>静：宣王，召公、周公相辅佐，刚开始国运昌盛，后衰败</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>宫湦：幽王，山陵崩颓，水源枯竭，已显亡国征兆</div>
                  <div>伯阳甫：预测周，气数将尽</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>褒似：龙的涎沫所化</div>
                  <div>宫湦：幽王，废黜申后和太子，为日后骊山之死埋下祸端</div>
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
                <div>诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>成王: 完成武王的遗愿，人民和睦，颂歌四起</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>钊: 康王，谨遵先帝遗风</div>
                  <br/>
                  <div>召公、毕公共同辅佐康王</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>瑕: 昭王，王道略有缺损</div>
                  <br/>
                  <div>满: 穆王，注重赏罚</div>
                  <br/>
                  <div>祭公谋父: 劝谏满，以德服人</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>邦畿之内是“甸服”，邦畿之外是“侯服”，设置侯、卫的地方叫“宾服”，蛮夷之地叫“要服”，戎翟之地叫“荒服”</div>
                  <br/>
                  <div>属于甸服的要“祭”，属于侯服的要“祀”，属于宾服的要“享”，属于要服的要“贡”，属于荒服的要“王”。</div>
                  <br/>
                  <div>“祭”是以日计，“祀”是以月计，“享”是以季节计，“贡”是以年计，“王”是以终身计。</div>
                  <br/>
                  <div>如果不“祭”就要端正其意志，如果不“祀”就要端正其言辞，如果不“享”就要端正其礼法，如果不“贡”就要端正其名分，如果不“王”就要端正其道德，</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>属于黥刑而不够定罪的，其罚金为一百率</div>
                  <br/>
                  <div>属于劓刑而不够定罪的，其罚金为前者的两倍</div>
                  <br/>
                  <div>属于膑刑而不够定罪的，其罚金为前者的两倍半</div>
                  <br/>
                  <div>属于宫刑而不够定罪的，其罚金为五百率</div>
                  <br/>
                  <div>属于大辟之刑而不够定罪的，其罚金为千率</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>繄扈: 共王，杀弄臣密康公</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>胡：厉王，贪图财利，不听劝诫</div>
                  <br/>
                  <div>芮良夫：劝诫王施惠众人</div>
                  <br/>
                  <div>荣夷公：贪财之辈</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>召公：太子遭难，用自己的儿子代替王太子（宣王），太子得免于难。</div>
                  <br/>
                  <div>静：宣王，召公、周公相辅佐，刚开始国运昌盛，后衰败</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>宫湦：幽王，山陵崩颓，水源枯竭，已显亡国征兆</div>
                  <div>伯阳甫：预测周，气数将尽</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>褒似：龙的涎沫所化</div>
                  <div>宫湦：幽王，废黜申后和太子，为日后骊山之死埋下祸端</div>
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
                <div>诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>成王: 完成武王的遗愿，人民和睦，颂歌四起</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>钊: 康王，谨遵先帝遗风</div>
                  <br/>
                  <div>召公、毕公共同辅佐康王</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>瑕: 昭王，王道略有缺损</div>
                  <br/>
                  <div>满: 穆王，注重赏罚</div>
                  <br/>
                  <div>祭公谋父: 劝谏满，以德服人</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>邦畿之内是“甸服”，邦畿之外是“侯服”，设置侯、卫的地方叫“宾服”，蛮夷之地叫“要服”，戎翟之地叫“荒服”</div>
                  <br/>
                  <div>属于甸服的要“祭”，属于侯服的要“祀”，属于宾服的要“享”，属于要服的要“贡”，属于荒服的要“王”。</div>
                  <br/>
                  <div>“祭”是以日计，“祀”是以月计，“享”是以季节计，“贡”是以年计，“王”是以终身计。</div>
                  <br/>
                  <div>如果不“祭”就要端正其意志，如果不“祀”就要端正其言辞，如果不“享”就要端正其礼法，如果不“贡”就要端正其名分，如果不“王”就要端正其道德，</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>属于黥刑而不够定罪的，其罚金为一百率</div>
                  <br/>
                  <div>属于劓刑而不够定罪的，其罚金为前者的两倍</div>
                  <br/>
                  <div>属于膑刑而不够定罪的，其罚金为前者的两倍半</div>
                  <br/>
                  <div>属于宫刑而不够定罪的，其罚金为五百率</div>
                  <br/>
                  <div>属于大辟之刑而不够定罪的，其罚金为千率</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div >燮（夷王）</div>
                <div >胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>繄扈: 共王，杀弄臣密康公</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>胡：厉王，贪图财利，不听劝诫</div>
                  <br/>
                  <div>芮良夫：劝诫王施惠众人</div>
                  <br/>
                  <div>荣夷公：贪财之辈</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>召公：太子遭难，用自己的儿子代替王太子（宣王），太子得免于难。</div>
                  <br/>
                  <div>静：宣王，召公、周公相辅佐，刚开始国运昌盛，后衰败</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>宫湦：幽王，山陵崩颓，水源枯竭，已显亡国征兆</div>
                  <div>伯阳甫：预测周，气数将尽</div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
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
                <div >诵代（成王）</div>
                <div >钊（康王）</div>
                <div >瑕（昭王）</div>
                <div >满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>褒似：龙的涎沫所化</div>
                  <div>宫湦：幽王，废黜申后和太子，为日后骊山之死埋下祸端</div>
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

 