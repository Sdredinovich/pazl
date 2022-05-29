import s from "./Pazl.module.css";
import ferma1 from "./../../photos/ferma11.png";
import ferma2 from "./../../photos/ferma12.png";
import ferma3 from "./../../photos/ferma13.png";
import ferma4 from "./../../photos/ferma21.png";
import ferma5 from "./../../photos/ferma22.png";
import ferma6 from "./../../photos/ferma23.png";
import ferma7 from "./../../photos/ferma31.png";
import ferma8 from "./../../photos/ferma32.png";
import ferma9 from "./../../photos/ferma33.png";
import { useEffect, useState } from "react";
const ferma = [
  ferma1,
  ferma2,
  ferma3,
  ferma4,
  ferma5,
  ferma6,
  ferma7,
  ferma8,
  ferma9,
];

export const Pazl = (props) => {
  const [start, setStart] = useState(false)
  const [hidNum, setHidnum] = useState(null)
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
 
console.log('Отрисовка');

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
    setState({...newObj})
    // Запускает игру
    setStart(true)

  }
  useEffect(()=>{
    gameOver(state, hidNum)&&setStart(false)
  }, [state])

  return (
    <div autoFocus tabIndex="1" onKeyDown={start?keyDown:undefined} className={s.pazl}>
      <div className={s.gameWindow}>
        {ferma.map((element, id) => {
          return (
            <div
              key={id}
              className={`${s.element} ${s["element" + state[id + 1]]} ${
                hidNum == id + 1 && start && s.missing
              } ${
                hidNum == id + 1 && !start && s.missing2
              }`}
            >
              <img className={`${s.elementImg} ${!start&&s.offBorder}`} src={element} />
            </div>
          );
        })}
      </div>
      <button  onClick={()=>{
        !start&&mixer(state)

      }}>Начать</button>
    </div>
  );
};
