import { useEffect, useRef, useState } from 'react'
import styles from './index.module.less'

import Img1 from '../../../assets/images/chuchang/b1.png'
import Img2 from '../../../assets/images/chuchang/b2.png'
import Img3 from '../../../assets/images/chuchang/b3.png'
import Img4 from '../../../assets/images/chuchang/b4.png'
import Img5 from '../../../assets/images/chuchang/b5.png'
import Img6 from '../../../assets/images/chuchang/g1.png'
import Img7 from '../../../assets/images/chuchang/g2.png'
import Img8 from '../../../assets/images/chuchang/g3.png'
import Img9 from '../../../assets/images/chuchang/g4.png'
import Img10 from '../../../assets/images/chuchang/g5.png'

function Cover() {

  return (
    <div className={styles.cover}>
      <div className="msg two">
        <div>
          <img className="img1 top" src={Img5} alt="" />
          <img className="img2 bot" src={Img4} alt="" />
          <img className="img3 top" src={Img3} alt="" />
          <img className="img4 bot" src={Img2} alt="" />
          <img className="img5 top" src={Img1} alt="" />
          <img className="img6 bot" src={Img6} alt="" />
          <img className="img7 top" src={Img7} alt="" />
          <img className="img8 bot" src={Img8} alt="" />
          <img className="img9 top" src={Img9} alt="" />
          <img className="img10 bot" src={Img10} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cover;
