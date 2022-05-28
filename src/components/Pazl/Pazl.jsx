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
  function gameOver(obj) {
    //Проверяет, все ли элементы находятся на своих позициях
    return Object.keys(obj).every((key) => +key === obj[key]);
  }
  // useEffect(()=>{
  //   gameOver(state)&&alert('f')
  // }, [state])

  function getKeyByValue(object, value) { 
    return Object.keys(object).find((key) => object[key] === value);
  }
  const hidNum = 5;


  const keyDown = (e) => {
    

  const vpravo = () => {
    if (
      state[state[hidNum] - 1] &&
      state[hidNum] - 1 !== 6 &&
      state[hidNum] - 1 !== 3
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
      state[hidNum] + 1 !== 4 &&
      state[hidNum] + 1 !== 7
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
    //Перемешивает части фотографии
    const mixedArr = Object.keys(obj).sort(() => Math.random() - 0.5);
    const newObj = {}
    mixedArr.map((value, index)=>{
      newObj[index+1]=+value
    })
    setState({...newObj})

  }

  return (
    <div autoFocus tabIndex="1" onKeyDown={keyDown} className={s.pazl}>
      <div className={s.gameWindow}>
        {ferma.map((element, id) => {
          return (
            <div
              key={id}
              className={`${s.element} ${s["element" + state[id + 1]]} ${
                hidNum == id + 1 && s.free
              }`}
            >
              <img className={s.elementImg} src={element} />
            </div>
          );
        })}
      </div>
      <button onClick={()=>{
         mixer(state)

      }}>Начать</button>
    </div>
  );
};
