import { useEffect, useRef, useState } from 'react'
import styles from './index.module.less'
import LeftCom from './components/leftCom'
import Cover from './components/cover'
import Star from './components/star'
import Card from './components/card'
import TextDemo from './components/text'

import g1 from '../../assets/images/admin/g1.png'
import g2 from '../../assets/images/admin/g2.png'
import g3 from '../../assets/images/admin/g3.png'
import g4 from '../../assets/images/admin/g4.png'
import g5 from '../../assets/images/admin/g5.png'
import g6 from '../../assets/images/admin/g6.png'
import b1 from '../../assets/images/admin/b1.png'
import b2 from '../../assets/images/admin/b2.png'
import b3 from '../../assets/images/admin/b3.png'
import b4 from '../../assets/images/admin/b4.png'
import b5 from '../../assets/images/admin/b5.png'
import b6 from '../../assets/images/admin/b6.png'

function Active() {

  const admin = useRef(null);
  const [isCover,setIsCover] = useState(false)

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
      children[i].className = 'ani'
      const logStr = await sleepFun(6,i)
    }
  }
  
  const getCover=()=>{
    setTimeout(()=>{
      setIsCover(true);
    },82000)
  }
  const getCover1=()=>{
    setTimeout(()=>{
      setIsCover(true);
    },0)
  }

  useEffect(()=>{
    // setTimeout(()=>{
    //   animations();
    //   setIsCover(false);
    // },10000);
    // getCover();
    // getCover1();
  },[])

  return (
    <div className={styles.container}>
      <Card/>
      {/* <TextDemo/> */}
      {/* <div className='main' ref={admin}>
        <img src={g1} alt="" /><img src={b1} alt="" />
        <img src={g2} alt="" /><img src={b2} alt="" />
        <img src={g3} alt="" /><img src={b3} alt="" />
        <img src={g4} alt="" /><img src={b4} alt="" />
        <img src={g5} alt="" /><img src={b5} alt="" />
        <img src={g6} alt="" /><img src={b6} alt="" />
      </div> */}
      {/* <div>
        {isCover && <Cover/>}
      </div>
      <div className='leftComMain'>
        <LeftCom/>
      </div>
      <div className='botTit'>
        {
          isCover ? <div className="msg one">
            夜灵犀传奇
            <span>之</span> 
            <span>邪剑黑曜</span> 
          </div> : null
        }
      </div> */}
      <Star/>
    </div>
  );
}

export default Active;
