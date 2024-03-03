import React, { useEffect } from "react";

import styles from './index.module.less'

function Star() {

  const getInitData =()=>{
    let list = [];
    for(let i=0;i<400;i++){
      list.push(i);
    }
    let data = '';
    data = list.map((item)=>{
      let x = item* Math.random()*10;
      let y = item* Math.random()*10;
      let h = Math.random()*10/2;
      return (
        <div 
          key={item} 
          className="starMall" 
          style={{top: x, left: y, height: h, width: h}}
        ></div>
      )
    })
    return data;
  }
  const getInitData1 =()=>{
    let list = [];
    for(let i=0;i<400;i++){
      list.push(i);
    }
    let data = '';
    data = list.map((item)=>{
      let x = (item* Math.random()*10);
      let y = (item* Math.random()*10);
      let h = Math.random()*10/2;
      return (
        <div 
          key={item} 
          className="starMall" 
          style={{bottom: x, right: y, height: h, width: h}}
        ></div>
      )
    })
    return data;
  }

  return (
    <div className={styles.starMain}>
      <div className="night-sky">  
        <div className="constellation">  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
        </div>  
         <div className="constellation">  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div> 
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div> 
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div> 
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
        </div>  
        <div className="constellation">  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
        </div>
        <div className="constellation">  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
        </div> 
        <div className="constellation">  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
        </div>
        <div className="constellation">  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
        </div>    
        <div className="constellation">  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
        </div>   
        <div className="constellation">  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
        </div>   
        <div className="constellation">  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
          <div className="star"></div>  
        </div>      
      </div>
      <div className="starMallMain">
        {
          getInitData()
        }
        {
          getInitData1()
        }
      </div>
    </div>
  )
}

export default Star;