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
                <div className='big'>弃(后稷/姬氏/农师)</div> 
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
                <div className='pos'>
                  <div>能根据土地的栽培特性，选择适宜的谷物加以种植培养</div>
                  <div>全在陶唐、虞、夏几代之间，历任者都很有美德。</div>
                  <div>封弃干邰，号称后稷，另外得姓为姬氏</div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" >
              <div className='cen'>
                <div>帝喾{'[夫]'}-姜原{'[妻]'}</div> 
                <div>弃(后稷/姬氏/农师)</div> 
                <div>不窋</div>
                <div>鞠</div>
                <div className='big'>公刘</div>
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
                <div className='pos'>
                  <div>恢复后稷的旧业，致力农作</div>
                  <div>周人治道的大兴是从这里开始的</div>
                  <div>庆节建都于豳</div>
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
                <div className='big'>古公亶父{'[夫]'}-太姜{'[妻]'}</div>
                <div>太伯(长子)   虞仲(次子)   季历(小儿子){'[夫]'}-太任{'[妻]'}</div>
                <div>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div className='pos'>
                  <div>恢复后稷、公刘的旧业</div>
                  <div>黛盲等戎狄部族攻打他</div>
                  <div>离开了囱，涉漆、沮二水，翻过梁山，定居在歧山脚下</div>
                  <div>设立司徒、司马、司空、司士、司寇五种官职</div>
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
                <div className='big'>昌（西伯、文王）</div>
                <div>发（武王）</div>
                <div>诵代 （成王）</div>
                <div className='pos'>
                  <div>伯夷、叔齐在孤竹国，听说西伯善于敬养老人，一起投奔了他</div>
                  <div>太颠、闳夭、散宜生、鬻子、辛甲大夫等人也去投奔了他</div>
                  <div>帝纣把西伯囚禁在羑里</div>
                  <div>莘氏的美女,骊戎的彩色骏马,有熊的九套驾车之马</div>
                  <div>次年，伐犬戎。又次年，伐密须。又次年，打败耆国</div>
                  <div>又次年，伐邘。又次年，伐崇侯虎，并开始营建丰邑，从岐山下迁都到丰邑</div>
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
                <div className='big'>发（武王）</div>
                <div>诵代 （成王）</div>
                <div className='pos'>
                  <div>太公望做他的师，周公旦做他的傅</div>
                  <div>武王渡黄河，白鱼祭祀</div>
                  <div>渡过河之后，火团从天而降，落在王的屋顶上，凝固成乌鸦状，它的颜色是红的，班师回来</div>
                  <div>纣，杀死王子比干，囚禁箕子</div>
                  <div>东进伐纣，战于牧野</div>
                  <div>纣鹿台自焚</div>
                  <div>武王以殷的遗民封商纣之子禄父</div>
                  <div>毕公放百姓，南宫括发钱财粮食，宫括、史件搬走殷人的九鼎和宝玉，闳夭为比干之墓培土为冢，命宗祝祭享于军中</div>
                  <div>封尚父于营丘，为齐；其弟同公旦于曲旱，为鲁；封召公奭于燕。封其弟叔鲜于管，其弟叔度于蔡</div>
                  <div>放马于华山之南，放牛于桃林之野，放下于戈不用，整顿军队，解除武装：向天下表示不再用兵。</div>
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
                <div className='big'>诵代 （成王）</div>
                <div className='pos'>
                  <div>周公摄政</div>
                  <div>管叔、蔡叔等兄弟怀疑周公，勾结武庚作乱，背叛周</div>
                  <div>周公还政给成王，重新北面称臣。</div>
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

 