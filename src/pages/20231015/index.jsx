import styles from './index.module.less'

import g1 from '../../assets/images/20231015/g1.png'
import g2 from '../../assets/images/20231015/g2.png'
import g3 from '../../assets/images/20231015/g3.png'
import g4 from '../../assets/images/20231015/g4.png'
import g5 from '../../assets/images/20231015/g5.png'
import g6 from '../../assets/images/20231015/g6.png'

import b1 from '../../assets/images/20231015/b1.png'
import b2 from '../../assets/images/20231015/b2.png'
import b3 from '../../assets/images/20231015/b3.png'
import b4 from '../../assets/images/20231015/b4.png'
import b5 from '../../assets/images/20231015/b5.png'
import b6 from '../../assets/images/20231015/b6.png'

import bg1 from '../../assets/images/20231015/bg1.jpg'
import bg2 from '../../assets/images/20231015/bg2.jpg'

function Index() {

  return (
    <div className={styles.indexMain}>
      <div className='oneModel'>
        <div className='model'>
          <img className='bg ani' src={bg1} alt="" />
        </div>
        <img className='peo' src={g1} alt="" />
        <div className='bot'>
          <div>苏晚·魔教</div>
        </div>
        <div className='tit'>
        苏晚·魔教苏晚·魔教苏晚·魔教苏晚·魔教苏晚·魔教
        </div>
      </div>
      <div className='oneModel'>
        <div className='model'>
          <img className='bg ani' src={bg2} alt="" />
        </div>
        <img className='peo' src={b1} alt="" />
        <div className='bot'>
          <div>夜灵犀·燕云山庄</div>
        </div>
        <div className='tit'></div>

      </div>
      <div className='oneModel'>
        <div className='model'>
          <img className='bg ani' src={bg1} alt="" />
        </div>
        <img className='peo' src={g3} alt="" />
        <div className='bot'>
          <div>陆秋艳·江南陆家</div>
          <div></div>
        </div>
        <div className='tit'></div>
      </div>

      {/* <div className='oneModel'>
        <div className='model'>
          <img className='bg ani' src={bg2} alt="" />
        </div>
        <img className='peo' src={b2} alt="" />
        <div className='bot'>
          <div>李玉帛·魔教</div>
          <div>回天绝响、百家剑法</div>
        </div>
        <div className='tit'></div>
      </div> */}

      <div className='song'>
        <div>
          <p>倾城</p>
          <p> qwqweqwe</p>
        </div>
        <div>
          <p>asdada</p>
          <p>123123</p>
        </div>
      </div>

      <div className='fixed'></div>
    </div>
  )
}

export default Index;