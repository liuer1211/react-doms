import React from 'react';  
// import { Swiper, SwiperSlide } from 'react-id-swiper';  
// import 'swiper/swiper-bundle.css';  
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
 
import styles from './index.module.less'

function Index() {

  const params = {  
    loop: true, // 启用循环模式  
    autoplay: {
      delay: 1000,
      disableOnInteraction: false, // 防止手动切换 轮播失效
    },
    spaceBetween: 20,  
  };  
  
  return (
    <div className={styles.mySwiper}>
      <Swiper {...params}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Index;



// const params = {  
//   loop: true, // 启用循环模式  
//   autoplay: {
//     delay: 1000,
//     disableOnInteraction: false, // 防止手动切换 轮播失效
//   },
//   spaceBetween: 20,   
// };  
// class Index extends React.Component{
//   render(){
//     return(
//       <div className={styles.mySwiper}>
//         <Swiper {...params}>  
//           <SwiperSlide>Slide 1</SwiperSlide>  
//           <SwiperSlide>Slide 2</SwiperSlide>  
//           <SwiperSlide>Slide 3</SwiperSlide>  
//         </Swiper>  
//       </div>
//     )
//   }
// }
// export default Index;