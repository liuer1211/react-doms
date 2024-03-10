import { useEffect,useRef } from 'react'
import styles from './index.module.less'

import MySwiper from './component'

function Index() {
  
  useEffect(()=>{
  },[])

  return (
    <div className={styles.indexMain}>
      <div className='title'>史记·周本纪</div>
      <MySwiper/>
    </div>
  )
}

export default Index;