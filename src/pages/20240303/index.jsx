import { useEffect,useRef } from 'react'
import styles from './index.module.less'

// const tagArr=[
//   {name:'伏羲氏'},
//   {name:'神农氏'},
//   {name:'黄帝'},
//   {name:'蚩尤'},
//   {name:'炎帝'},
//   {name:'阪泉之战'},
//   {name:'涿鹿之战'},
//   {name:'熊'},
//   {name:'罴'},
//   {name:'貔貅'},
//   {name:'躯'},
//   {name:'虎'},
//   {name:'风后'},
//   {name:'力牧'},
//   {name:'常先'},
//   {name:'大鸿'},
//   {name:'嫘祖'},
//   {name:'玄嚣'},
//   {name:'蛟极'},
//   {name:'高辛(帝喾)'},
//   {name:'陈锋氏'},
//   {name:'娵訾氏'},
//   {name:'放勋(尧)'},
//   {name:'丹朱'},
//   {name:'挚'},
//   {name:'昌意'},
//   {name:'昌仆'},
//   {name:'高阳(颛顼帝)'},
//   {name:'穷蝉'},
//   {name:'敬康'},
//   {name:'句望'},
//   {name:'桥牛'},
//   {name:'瞽叟'},
//   {name:'舜(重华)'},
//   {name:'象'},
//   {name:'鲧'},
//   {name:'禹'},
// ]

// const tagArr = [
//   {name:'羲仲'},
//   {name:'羲叔'},
//   {name:'和仲'},
//   {name:'和叔'},
//   {name:'放齐'},
//   {name:'驩兜'},
//   {name:'共工'},
//   {name:'四岳'},
//   {name:'鲧'},
//   {name:'八恺'},
//   {name:'八元'},
//   {name:'浑沌'},
//   {name:'穷奇'},
//   {name:'梼杌'},
//   {name:'饕餮'},
//   {name:'皋陶'},
//   {name:'契'},
//   {name:'后稷'},
//   {name:'伯夷'},
//   {name:'夔'},
//   {name:'龙'},
//   {name:'倕'},
//   {name:'益'},
//   {name:'彭祖'},
//   {name:'弃'},
//   {name:'启'},
//   {name:'太康'},
//   {name:'羿'},
//   {name:'中康'},
//   {name:'相'},
//   {name:'少康'},
//   {name:'予'},
//   {name:'槐'},
//   {name:'芒'},
//   {name:'泄'},
//   {name:'不降'},
//   {name:'扃'},
//   {name:'孔甲'},
//   {name:'廑'},
//   {name:'皋'},
//   {name:'发'},
//   {name:'履癸(桀)'},
//   {name:'汤'},
// ]

const tagArr = [
  {name:'简狄'},
  {name:'契'},
  {name:'昭明'},
  {name:'相'},
  {name:'昌若'},
  {name:'曹圉'},
  {name:'冥'},
  {name:'振'},
  {name:'微'},
  {name:'报丁'},
  {name:'报乙'},
  {name:'报丙'},
  {name:'主壬'},
  {name:'主癸'},
  {name:'天乙(成汤)'},
  {name:'太丁'},
  {name:'太甲'},
  {name:'沃丁'},
  {name:'外丙'},
  {name:'太庚'},
  {name:'小甲'},
  {name:'中壬'},
  {name:'雍已'},
  {name:'太戊'},
  {name:'中丁'},
  {name:'外壬'},
  {name:'河亶甲'},
  {name:'祖乙'},
  {name:'祖辛'},
  {name:'沃甲'},
  {name:'祖丁'},
  {name:'南庚'},
  {name:'阳甲'},
  {name:'盘庚'},
  {name:'小辛'},
  {name:'小乙'},
  {name:'武丁'},
  {name:'祖庚'},
  {name:'祖甲'},
  {name:'廪辛'},
  {name:'庚丁'},
  {name:'武乙'},
  {name:'太丁'},
  {name:'乙帝'},
  {name:'微子启'},
  {name:'辛(纣)'},
  {name:'葛伯'},
  {name:'伊尹(阿衡)'},
  {name:'祝祷'},
  {name:'昆吾'},
  {name:'义伯'},
  {name:'仲伯'},
  {name:'中垒'},
  {name:'伊陟'},
  {name:'巫咸'},
  {name:'傅说'},
  {name:'祖己'},
  {name:'西伯昌'},
  {name:'崇侯虎'},
  {name:'闳夭'},
  {name:'比干'},
  {name:'祖伊'},
  {name:'箕子'},
  {name:'太师'},
  {name:'少师'},
  {name:'武庚'},
  {name:'管叔'},
  {name:'蔡叔'},
  {name:'周成王'},
  {name:'周公旦'},
  {name:'女鸠'},
  {name:'女房'},
]

function Index() {

  // 初始面板
  const getInit=()=> {
    try {
      TagCanvas.Start('myCanvas', 'tags', {
        textColour: '#fff',
        dragControl: 1,
        decel: 0.95,
        textHeight: 20,
        minSpeed: 0.01,
        initial: [0.1,0.1],
      });
    } catch (e) {
      document.getElementById('cnvasModel').style.display = 'none';
    }
  }

  useEffect(()=>{
    getInit()
  },[])

  return (
    <div className={styles.indexMain}>
      <div className='title'>史记·殷本纪</div>
      <div className='kungfu-main'>
        <div id="cnvasModel">
          <canvas width="700px" height="700px" id="myCanvas">
            <p>Anything in here will be replaced on browsers that support the canvas element</p>
          </canvas>
        </div>
        <div id="tags">
          <ul>
            {
              tagArr.map((item, index)=>{
                return (
                  <li key={index}>
                    <a href={'#'} >{item.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Index;