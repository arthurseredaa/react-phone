import { useState } from "react";
import classes from "./NavigationButtons.module.scss";

export const NavigationButtons = ({ activeId = 1 }) => {
  const [buttonState, setButtonState] = useState({active: "1"});

  const handleClick = (e) => {
    setButtonState({...buttonState, active: e.target.id});
    console.log(buttonState)
  };

  return (
    <div
      className={
        "w-full bg-blue-800 position: absolute bottom-0 left-0 h-12 text-white flex justify-around items-center text-sm px-2"
      }
    >
      <div className={classes.activeBorder}></div>
      <button
        id={1}
        onClick={(e) => handleClick(e)}
        className={`${buttonState.active === "1" ? classes.controlButton : null } ${buttonState.active === "1" ? "" : "opacity-50"}`}
      >
        Набор
      </button>
      <button
        id={2}
        onClick={(e) => handleClick(e)}
        className={`${buttonState.active === "2" ? classes.controlButton : null } ${buttonState.active === "2" ? "" : "opacity-50"}`}
      >
        Последние
      </button>
      <button
        id={3}
        onClick={(e) => handleClick(e)}
        className={`${buttonState.active === "3" ? classes.controlButton : null } ${buttonState.active === "3" ? "" : "opacity-50"}`}
      >
        Контакты
      </button>
    </div>
  );
};
