import s from "./Pazl.module.css";
import fermaBtn from "./../../photos/ferma.jpg";
import ferma1_3x3 from "./../../photos/ferma1-3x3.png";
import ferma2_3x3 from "./../../photos/ferma2-3x3.png";
import ferma3_3x3 from "./../../photos/ferma3-3x3.png";
import ferma4_3x3 from "./../../photos/ferma4-3x3.png";
import ferma5_3x3 from "./../../photos/ferma5-3x3.png";
import ferma6_3x3 from "./../../photos/ferma6-3x3.png";
import ferma7_3x3 from "./../../photos/ferma7-3x3.png";
import ferma8_3x3 from "./../../photos/ferma8-3x3.png";
import ferma9_3x3 from "./../../photos/ferma9-3x3.png";
import ferma1_4x4 from "./../../photos/ferma1-4x4.jpg";
import ferma2_4x4 from "./../../photos/ferma2-4x4.jpg";
import ferma3_4x4 from "./../../photos/ferma3-4x4.jpg";
import ferma4_4x4 from "./../../photos/ferma4-4x4.jpg";
import ferma5_4x4 from "./../../photos/ferma5-4x4.jpg";
import ferma6_4x4 from "./../../photos/ferma6-4x4.jpg";
import ferma7_4x4 from "./../../photos/ferma7-4x4.jpg";
import ferma8_4x4 from "./../../photos/ferma8-4x4.jpg";
import ferma9_4x4 from "./../../photos/ferma9-4x4.jpg";
import ferma10_4x4 from "./../../photos/ferma10-4x4.jpg";
import ferma11_4x4 from "./../../photos/ferma11-4x4.jpg";
import ferma12_4x4 from "./../../photos/ferma12-4x4.jpg";
import ferma13_4x4 from "./../../photos/ferma13-4x4.jpg";
import ferma14_4x4 from "./../../photos/ferma14-4x4.jpg";
import ferma15_4x4 from "./../../photos/ferma15-4x4.jpg";
import ferma16_4x4 from "./../../photos/ferma16-4x4.jpg";

import shrekBtn from "./../../photos/shrek.jpg";
import shrek1_3x3 from "./../../photos/shrek1-3x3.jpg";
import shrek2_3x3 from "./../../photos/shrek2-3x3.jpg";
import shrek3_3x3 from "./../../photos/shrek3-3x3.jpg";
import shrek4_3x3 from "./../../photos/shrek4-3x3.jpg";
import shrek5_3x3 from "./../../photos/shrek5-3x3.jpg";
import shrek6_3x3 from "./../../photos/shrek6-3x3.jpg";
import shrek7_3x3 from "./../../photos/shrek7-3x3.jpg";
import shrek8_3x3 from "./../../photos/shrek8-3x3.jpg";
import shrek9_3x3 from "./../../photos/shrek9-3x3.jpg";
import mashaBtn from "./../../photos/masha.jpg";
import masha1_3x3 from "./../../photos/masha1-3x3.jpg";
import masha2_3x3 from "./../../photos/masha2-3x3.jpg";
import masha3_3x3 from "./../../photos/masha3-3x3.jpg";
import masha4_3x3 from "./../../photos/masha4-3x3.jpg";
import masha5_3x3 from "./../../photos/masha5-3x3.jpg";
import masha6_3x3 from "./../../photos/masha6-3x3.jpg";
import masha7_3x3 from "./../../photos/masha7-3x3.jpg";
import masha8_3x3 from "./../../photos/masha8-3x3.jpg";
import masha9_3x3 from "./../../photos/masha9-3x3.jpg";



import { useEffect, useState } from "react";
const ferma = {
  '3x3':[
  ferma1_3x3,
  ferma2_3x3,
  ferma3_3x3,
  ferma4_3x3,
  ferma5_3x3,
  ferma6_3x3,
  ferma7_3x3,
  ferma8_3x3,
  ferma9_3x3,
],
'4x4':[
  ferma1_4x4,
  ferma2_4x4,
  ferma3_4x4,
  ferma4_4x4,
  ferma5_4x4,
  ferma6_4x4,
  ferma7_4x4,
  ferma8_4x4,
  ferma9_4x4,
  ferma10_4x4,
  ferma11_4x4,
  ferma12_4x4,
  ferma13_4x4,
  ferma14_4x4,
  ferma15_4x4,
  ferma16_4x4,

]};
const masha = {'3x3':[
  masha1_3x3,
  masha2_3x3,
  masha3_3x3,
  masha4_3x3,
  masha5_3x3,
  masha6_3x3,
  masha7_3x3,
  masha8_3x3,
  masha9_3x3,
]}
const shrek = {'3x3':[
  shrek1_3x3,
  shrek2_3x3,
  shrek3_3x3,
  shrek4_3x3, 
  shrek5_3x3, 
  shrek6_3x3, 
  shrek7_3x3, 
  shrek8_3x3,
  shrek9_3x3
]}

export const Pazl = (props) => {
  const [start, setStart] = useState(false)
  const [hidNum, setHidnum] = useState(9)
  const [state, setState] = useState({
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
});
const [mode, setMode] = useState('3x3')
const [currentPhoto, setCurrentPhoto] = useState(ferma)
  
  function gameOver(obj, hidNum) {
    //Возвращает массив с ключами, кроме"hidNum" 
    let keysArr = Object.keys(obj).filter(key=>+key!==hidNum)
    // Проверяет, все ли элементы находятся на своих позициях и возвращает значение
    return keysArr.every((key) => +key === obj[key]);
  }

  function getKeyByValue(object, value) { 
    //Находит ключ по значению и возвращает его
    return Object.keys(object).find((key) => object[key] === value);
  }
function currentPhotoChange(photo){
  if(currentPhoto!==photo){
    const keysArr = Object.keys(state)
    const newObj = {}
    keysArr.map((value, index)=>{
      newObj[index+1]=+index+1
    })
setState(newObj)
  setStart(false)
  setCurrentPhoto(photo)
  }
}
  
 

  const keyDown = (e) => {
    

  const vpravo = () => {
    if (
      state[state[hidNum] - 1] &&
      state[hidNum] !== 7 &&
      state[hidNum]  !== 4
    ) {
      const twoNum = getKeyByValue(state, state[hidNum] - 1);
      setState({
        ...state,
        [hidNum]: state[hidNum] - 1,
        [+twoNum]: state[hidNum],
      });
    }
  };
  const vlevo = () => {
    if (
      state[state[hidNum] + 1] &&
      state[hidNum]  !== 3 &&
      state[hidNum]  !== 6
    ) {
      const twoNum = getKeyByValue(state, state[hidNum] + 1);
      setState({
        ...state,
        [hidNum]: state[hidNum] + 1,
        [+twoNum]: state[hidNum],
      });
    }
  };
  const vniz = () => {
    if (state[state[hidNum] - 3]) {
      const twoNum = getKeyByValue(state, state[hidNum] - 3);
      setState({
        ...state,
        [hidNum]: state[hidNum] - 3,
        [+twoNum]: state[hidNum],
      });
    }
  };
  const vverh = () => {
    if (state[+state[hidNum] + 3]) {
      const twoNum = getKeyByValue(state, state[hidNum] + 3);
      setState({
        ...state,
        [hidNum]: state[hidNum] + 3,
        [twoNum]: state[hidNum],
      });
    }
  };

    switch (e.keyCode) {
      case 40:
        vniz();
        break;
      case 38:
        vverh();
        break;
      case 39:
        vpravo();
        break;
      case 37:
        vlevo();
        break;
      default:
        break;
    }
  };
  function mixer(obj) {

    // Перемешивает пазл
    const mixedArr = Object.keys(obj).sort(() => Math.random() - 0.5);
    const newObj = {}
    mixedArr.map((value, index)=>{
      newObj[index+1]=+value
    })
    // Выбирает случайный элемент массива(фото, чтобы вытащить его из пазла)
    let rand = Math.floor(Math.random() * mixedArr.length);
     setHidnum(mixedArr[rand])
    // setState({...newObj})
    // Запускает игру
    setStart(true)

  }
  useEffect(()=>{
    gameOver(state, hidNum)&&setStart(false)
  }, [state])

  return (
    <div autoFocus tabIndex="1" onKeyDown={start?keyDown:undefined} className={s.pazl}>
      <div className={s.pazlContent}>
        <div className={s.selectDiv}>
          <img onClick={()=>{currentPhotoChange(ferma)}} alt="Выбираемое фото" src={fermaBtn} className={`${s.selectPhotoImg} ${currentPhoto==ferma&&s.currentImg}`}/>
          <img onClick={()=>{currentPhotoChange(shrek)}} alt="Выбираемое фото" src={shrekBtn} className={`${s.selectPhotoImg} ${currentPhoto==shrek&&s.currentImg}`}/>
          <img onClick={()=>{currentPhotoChange(masha)}} alt="Выбираемое фото" src={mashaBtn} className={`${s.selectPhotoImg} ${currentPhoto==masha&&s.currentImg}`}/>
        
        </div>
        <div>
      <div className={s.gameWindow}>
        {currentPhoto[mode].map((element, id) => {
          return (<div key={id} className={`${s.element} ${s["element" + state[id + 1]+mode]} ${hidNum == id + 1 && start && s.missing} 
          ${hidNum == id + 1 && !start && s.missing2} ${start && s.startEl}`}>
         <img className={`${s.elementImg} ${!start&&s['offBorder'+mode]}`} src={element} />
            </div>
          );
        })}
        <div className={s.emptyDiv}>
          
        </div>
      </div>
      <button className={s.startBtn} disabled={start} onClick={()=>{
        mixer(state)

      }}>Начать</button>
      </div>
      <div className={s.selectDiv}>
        <button className={s.selectModeBtn}>3x3</button>
        <button className={s.selectModeBtn}>4x4</button>
        </div>
      </div>

    </div>
  );
};
