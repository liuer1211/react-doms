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
                <div className='big'>诵代（成王）</div>
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
                  <div>周公摄政</div>
                  <div>管叔、蔡叔等兄弟怀疑周公，勾结武庚作乱，背叛周</div>
                  <div>周公还政给成王，重新北面称臣。</div>
                  <div>将九鼎安放在城内</div>
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
                <div className='big'>钊（康王）</div>
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
                  <div>召公、毕公率诸侯共同辅佐太子使之即位</div>
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
                <div className='big'>满（穆王）</div>
                <div >繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>邦畿之内是“甸服”，邦畿之外是“侯服”，设置侯、卫的地方叫“宾服”，蛮夷之地叫“要服”，戎翟之地叫“荒服”。</div>
                  <div>属于甸服的要“祭”，属于侯服的要“祀”，属于宾服的要“享”，属于要服的要“贡”，属于荒服的要“王”。</div>
                  <div>“祭”是以日计，“祀”是以月计，“享”是以季节计，“贡”是以年计，“王”是以终身计。</div>
                  <div>如果不“祭”就要端正其意志，如果不“祀”就要端正其言辞，如果不“享”就要端正其礼法，如果不“贡”就要端正其名分，如果不“王”就要端正其道德，</div>
                  <div>对不祀者的攻伐，对不享者的征讨，对不贡者的谴责，对不王者的告谕天下</div>
                  <div>才有刑罚的各种规定，才有攻伐的各种武器，才有征讨的各种准备，才有严厉谴责的命令，才有大告天下的文辞。</div>
                  <div>言辞、表情、呼吸、听觉反应和目光 五辞</div>
                  <div>五刑 五罚 五过</div>
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
                <div className='big'>繄扈（共王，兄）  辟方（孝王，弟）</div>
                <div>懿王</div>
                <div>燮（夷王）</div>
                <div>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>有三个女子来投奔密康公</div>
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
                <div className='big'>胡（厉王）</div>
                <div >静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>贪图财利，亲近荣夷公</div>
                  <div>荣夷公喜欢垄断财利却不知道大难临头</div>
                  <div>召公 因此天子为了了解下情，要让上至公卿下至列士的人都献诗，让盲乐师献曲，让史官献书，让师规诫，让无眼珠的盲人叙事，让有眼珠的盲人朗诵，让百工劝谏，让庶人街谈巷议，让近臣都来砚劝，让亲戚补察过失，让音乐师和史官来教诲，让老人们来整理，而后由帝王斟酌，所以政书得以施行而不违背情理</div>
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
                <div className='big'>静（宣王）</div>
                <div >宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>，修明政治，遵循文王、武王、成王、康王的遗风</div>
                  <div>废弃天子籍田上的籍礼，</div>
                  <div>王的军队在千亩与姜氏之戎交战，大败。</div>
                  <div>仲山甫 民户是不可以由王直接加以统计的</div>
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
                <div className='big'>宫湦（幽王）{'[夫]'}-申{'[妻]'}-褒似{'[妻]'}</div>
                <div>宜臼 伯服</div>
                <div className='pos'>
                  <div>伯阳甫 天地二气，不可失去其秩序</div>
                  <div>伯阳 周将要亡国了。</div>
                  <div>夏帝 神龙 褒国的两个君主</div>
                  <div>龙走后留下涎沫 被盛在匣中收藏起来</div>
                  <div>厉王末年 打开观看 涎沫流于庭院 涎沫化为黑色的蜥蜴，钻进王的后宫</div>
                  <div>童女刚满七岁，碰上它，到十五岁行过笄礼后怀了孕 生褒姒</div>
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

 