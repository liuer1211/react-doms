import { useEffect, useRef, useState } from 'react'
import styles from './index.module.less'

function LeftCom() {

  const [song1,setSong1] = useState(false)
  const [song2,setSong2] = useState(false)
  const [song3,setSong3] = useState(false)
  const [song4,setSong4] = useState(false)


  // 红尘路漫漫 爱恨难解 儿女多情长 贪恋  
  // 生死两茫茫 悲欢执念 名利如云烟 终散
  // 江湖多风雨 霜雪刀剑 月下酒独酌 凭栏
  // 江山兴几许 盈虚无关 余生只愿与君 常伴 

  const s1=`红尘路漫漫 爱恨难解`;
  const s2=`儿女多情长 贪恋`;
  const s3=`生死两茫茫 悲欢执念`;
  const s4=`名利如云烟 终散`;
  const s5=`江湖多风雨 霜雪刀剑`;
  const s6=`月下酒独酌 凭栏`;
  const s7=`江山兴几许 盈虚无关`;
  const s8=`余生只愿与君 常伴`;

  const getSong1 = ()=>{
    setTimeout(()=>{
      setSong1(true)
    },10000)
  }
  const getSong2 = ()=>{
    setTimeout(()=>{
      setSong1(false)
      setSong2(true)
    },26000)
  }
  const getSongHide = ()=>{
    setTimeout(()=>{
      setSong2(false)
    },39000)
  }
  const getSong3 = ()=>{
    setTimeout(()=>{
      setSong3(true)
    },54000)
  }
  const getSong4 = ()=>{
    setTimeout(()=>{
      setSong3(false)
      setSong4(true)
    },70000)
  }

  useEffect(()=>{
    getSong1();
    getSong2();
    getSong3();
    getSong4();
    getSongHide();
  },[])

  return (
    <div className={styles.main}> 
      <div className={song1?'first active':'first'}>
        <div className='left'>{s1}</div>
        <div className='right'>{s2}</div>
      </div>
      <div className={song2?'first active':'first'}>
        <div className='left'>{s3}</div>
        <div className='right'>{s4}</div>
      </div>
      <div className={song3?'first active':'first'}>
        <div className='left'>{s5}</div>
        <div className='right'>{s6}</div>
      </div>
      <div className={song4?'first active':'first'}>
        <div className='left'>{s7}</div>
        <div className='right'>{s8}</div>
      </div>
    </div>
  );
}

export default LeftCom;
