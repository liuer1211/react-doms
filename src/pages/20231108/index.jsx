import { useEffect,useRef } from 'react'

import styles from './index.module.less'
import P1 from '../../assets/images/20231108/1.png'
import P2 from '../../assets/images/20231108/2.png'
import P3 from '../../assets/images/20231108/3.png'
import P4 from '../../assets/images/20231108/4.png'
import P5 from '../../assets/images/20231108/5.png'

function Index() {

  return (
    <div className={styles.indexMain}>
      {/* <div className='model'>
        <div className='star'>
          <div className='par'>
            <span>灭蒙鸟</span>
            <img src={P1} alt="" />
          </div>
        </div>
        <div className='star'>
          <div className='par'>
            <span>结胸国</span>
            <img src={P2} alt="" />
          </div>
        </div>
        <div className='star'>
          <div className='par'>
            <span>比翼鸟</span>
            <img src={P3} alt="" />
          </div>
        </div>
        <div className='star'>
          <div className='par'>
            <span>毕方鸟</span>
            <img src={P3} alt="" />
          </div>
        </div>
      </div> */}
      <div className='bgimg'>
        <img src={P5} alt="" />
      </div>
      <div className='bg'>
        <div>灭蒙鸟</div>
        <div>结胸国</div>

        <div>比翼鸟</div>
        <div>毕方鸟</div>
        <div>青水</div>
        <div>南山</div>

        <div>羽民国</div>
        <div>神人</div>

        <div>讙头国/讙朱国</div>
        <div>厌火国</div>
        <div>三珠树</div>
        <div>赤水</div>
        <div>三苗国/三毛国</div>
        <div>臷国</div>

        <div>贯胸国</div>
        <div>交胫国</div>
        <div>不死民</div>

        <div>反舌国</div>
        <div>昆仑山</div>
        <div>寿华·羿/凿齿</div>

        <div>三首国</div>
        <div>周饶国</div>
        <div>长臂国</div>

        <div>狄山/汤山</div>
        <div>吁咽/文王</div>
        <div>帝喾</div>
        <div>唐尧</div>
        <div>林</div>
        <div>祝融</div>

      </div>
      <div className='fixed'></div>
    </div>
  )
}

export default Index;