import { useEffect,useRef } from 'react'

import styles from './index.module.less'

import g1 from '../../../assets/images/admin/img/g1.png'
import g2 from '../../../assets/images/admin/img/g2.png'
import g3 from '../../../assets/images/admin/img/g3.png'
import g4 from '../../../assets/images/admin/img/g4.png'
import g5 from '../../../assets/images/admin/img/g5.png'
import g6 from '../../../assets/images/admin/img/g6.png'
import b1 from '../../../assets/images/admin/img/b1.png'
import b2 from '../../../assets/images/admin/img/b2.png'
import b3 from '../../../assets/images/admin/img/b3.png'
import b4 from '../../../assets/images/admin/img/b4.png'
import b5 from '../../../assets/images/admin/img/b5.png'
import b6 from '../../../assets/images/admin/img/b6.png'

import img1 from '../../../assets/images/admin/imgs/1.jpg'
import img2 from '../../../assets/images/admin/imgs/2.jpg'
import img3 from '../../../assets/images/admin/imgs/3.jpg'
import img4 from '../../../assets/images/admin/imgs/4.jpg'
import img5 from '../../../assets/images/admin/imgs/5.jpg'
import img6 from '../../../assets/images/admin/imgs/6.jpg'
import img7 from '../../../assets/images/admin/imgs/7.jpg'
import img8 from '../../../assets/images/admin/imgs/8.jpg'
import img9 from '../../../assets/images/admin/imgs/9.jpg'
import img10 from '../../../assets/images/admin/imgs/10.jpg'
import img11 from '../../../assets/images/admin/imgs/11.jpg'
import img12 from '../../../assets/images/admin/imgs/12.jpg'

function Card(){
  const admin = useRef(null);
  useEffect(()=>{
    // 延时执行
    const sleepFun = (times,i)=> {
      let time =times * 1000;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(time);
        }, time);
      })
    }

    const animations = async()=>{
      const children = Array.from(admin.current.children);  
      for(let i=0;i<children.length;i++){
        children[i].className = 'main active'
        const logStr = await sleepFun(9,i)
      }
    }

    const animations1 = async()=>{
      const children = Array.from(admin.current.children);  
      for(let i=0;i<children.length;i++){
        children[i].className = 'main'
        const logStr = await sleepFun(9,i)
      }
    }
    animations()
    setTimeout(()=>{
      animations1()
    },27000)
  },[])

  return(
    <div className={styles.card} ref={admin}>
      <div key={1} className='main active'>
        <div className='bg'>
          <img src={g1} alt="" />
          <div className='text'>
            <p>苏晚·魔教</p>
            <div>青楼幽梦深，脂粉烈如血。</div>
            <div>明月照孤影，浮生难自禁。</div>
            <div>一曲断人肠，心事又几重。</div>
            <div>恩怨终需了，难猜女儿心。</div>
          </div>
          <div className='img-bg'>
            <img src={img1}/>
          </div>
          <div className='bot'>
            <div>兵家</div>
            <div>本家</div>
          </div>
        </div>
      </div>
      <div key={2} className='main'>
        <div className='bg'>
          <img src={b1} alt="" />
          <div className='text'>
            <p>夜灵犀·燕云山庄</p>
            <div>燕云马蹄疾，江湖初入浅。</div>
            <div>落日映山岗，浮生轻似梦。</div>
            <div>儿女情长时，回忆终难消。</div>
            <div>少侠远志向，大义存心中。</div>
          </div>
          <div className='img-bg'>
            <img src={img2}/>
          </div>
          <div className='bot'>
            <div>道家</div>
            <div>儒家</div>
          </div>
        </div>
      </div>
      <div key={3} className='main'>
        <div className='bg'>
          <img src={b5} alt="" />
          <div className='text font si'>
            <p>陈瞎子·群侠</p>
            <div>上知天文，下知地理，</div>
            <div>掐指一算，便知江湖事。</div>
            <div>一日答一问，</div>
            <div>一问六十六两雪花银。</div>
          </div>
          <div className='img-bg'>
            <img src={img3}/>
          </div>
          <div className='bot'>
            <div>阴阳家</div>
            <div>兵家</div>
          </div>
        </div>
      </div>
      <div key={4} className='main'>
        <div className='bg'>
          <img src={g2} alt="" />
          <div className='text'>
            <p>百里梦·名剑山庄</p>
            <div>山庄少男儿，无奈女扮男。</div>
            <div>貌美如花颜，天下人不知。</div>
            <div>立志承家业，苦练终大成。</div>
            <div>剑气破苍穹，江湖难逢敌。</div>
          </div>
          <div className='img-bg'>
            <img src={img4}/>
          </div>
          <div className='bot'>
            <div>道家</div>
            <div>儒家</div>
          </div>
        </div>
      </div>
      <div key={5} className='main'>
        <div className='bg'>
          <img src={b2} alt="" />
          <div className='text font si'>
            <p>李玉帛·魔教</p>
            <div>故国不堪回首，今人犹记凤阙。</div>
            <div>卧薪尝胆，不忘复国志。</div>
            <div>手段何其奸诈，野心与日俱增。</div>
            <div>一招棋差，往事皆作罢。</div>
          </div>
          <div className='img-bg'>
            <img src={img5}/>
          </div>
          <div className='bot'>
            <div>法家</div>
            <div>兵家</div>
          </div>
        </div>
      </div>
      <div key={6} className='main'>
        <div className='bg'>
          <img src={b6} alt="" />
          <div className='text font si'>
            <p>落梅·别离门</p>
            <div>无梅谷，别离门，</div>
            <div>一个天下人都不敢得罪的地方。</div>
            <div>神医落梅，</div>
            <div>一个可以一指定人生死的男人。</div>
          </div>
          <div className='img-bg'>
            <img src={img6}/>
          </div>
          <div className='bot'>
            <div>医家</div>
            <div>农家</div>
          </div>
        </div>
      </div>
      <div key={7} className='main'>
        <div className='bg'>
          <img src={g3} alt="" />
          <div className='text font'>
            <p>陆秋艳·江南陆家</p>
            <div>沉鱼落雁之容，闭月羞花之颜。</div>
            <div>江南陆家，一双碧玉，羡煞好男儿。</div>
            <div>爱时倾其所有，恨时挫骨扬灰</div>
            <div>落花有意，流水无情，终成生死敌。</div>
          </div>
          <div className='img-bg'>
            <img src={img7}/>
          </div>
          <div className='bot'>
            <div>阴阳家</div>
            <div>兵家</div>
          </div>
        </div>
      </div>
      <div key={8} className='main'>
        <div className='bg'>
          <img src={b3} alt="" />
          <div className='text font'>
            <p>妙乐·少林寺</p>
            <div>琴棋书画皆明，佛法禅经少成。</div>
            <div>酒肉穿肠，修心不修口。</div>
            <div>平生欢愉有三，比武斗嘴跑腿。</div>
            <div>无欲无求，他日见如来。</div>
          </div>
          <div className='img-bg'>
            <img src={img8}/>
          </div>
          <div className='bot'>
            <div>佛教</div>
          </div>
        </div>
      </div>
      <div key={9} className='main'>
        <div className='bg'>
          <img src={g6} alt="" />
          <div className='text font si'>
            <p>欧阳岚·幽冥宫</p>
            <div>落鸿渊，幽冥殿，</div>
            <div>不死不灭欧阳岚。</div>
            <div>容颜不老，轮回不入。</div>
            <div>几度天劫，笑看生死。</div>
          </div>
          <div className='img-bg'>
            <img src={img9}/>
          </div>
          <div className='bot'>
            <div>道家</div>
          </div>
        </div>
      </div>
      <div key={10} className='main'>
        <div className='bg'>
          <img src={g4} alt="" />
          <div className='text font si'>
            <p>雪女·幽冥宫</p>
            <div>风花雪月，雪女剑法世无双。</div>
            <div>天姿国色，久居深宫无人知。</div>
            <div>面如霜雪，敢作敢为不服输。</div>
            <div>玄妙功法，悠悠岁月仍童颜。</div>
          </div>
          <div className='img-bg'>
            <img src={img10}/>
          </div>
          <div className='bot'>
            <div>道家</div>
          </div>
        </div>
      </div>
      <div key={11} className='main'>
        <div className='bg'>
          <img src={b4} alt="" />
          <div className='text font si'>
            <p>慕容雪·群侠</p>
            <div>塞外孤鹰，冷面残剑傲群雄。</div>
            <div>剑术修行，愈挫愈勇越强劲。</div>
            <div>侠骨柔情，大义凛然身不驯。</div>
            <div>浪子巾帼，好事多磨终相守。</div>
          </div>
          <div className='img-bg'>
            <img src={img11}/>
          </div>
          <div className='bot'>
            <div>法家</div>
          </div>
        </div>
      </div>
      <div key={12} className='main'>
        <div className='bg'>
          <img src={g5} alt="" />
          <div className='text font si'>
            <p>小蝶·群侠</p>
            <div>天真烂漫，乖巧可爱。</div>
            <div>无忧无虑，无拘无束。</div>
            <div>爷孙相伴，隐居山林。</div>
            <div>花香鸟语，世外桃源。</div>
          </div>
          <div className='img-bg'>
            <img src={img12}/>
          </div>
          <div className='bot'>
            <div>农家</div>
            <div>本家</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;