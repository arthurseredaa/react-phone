import KeyboardIcon from "../../../../assets/icons/keyboard.svg";
import PhoneIcon from "../../../../assets/icons/phone.svg";
import CrossIcon from "../../../../assets/icons/delete.svg";
import PhoneRectangle from "../../../../assets/icons/phone-rectangle.svg";

export const ControlButtons = ({
  handleKeyboard,
  isHideKeyboard,
  callStatus,
  hangUp,
  doCall,
  clearNumber,
}) => {
  return (
    <div
      className={`display: flex justify-around items-center my-3 position: absolute bottom-10 w-full left-0`}
    >
      <button
        type="button"
        className={`flex flex-col items-center w-16 h-7 rounded px-2 focus:outline-none`}
        onClick={handleKeyboard}
      >
        <img src={KeyboardIcon} width="30px" alt="keyboard icon" />
        <span className={`text-xs text-gray-400`}>
          {isHideKeyboard ? "Клавиатура" : "Скрыть"}
        </span>
      </button>
      <button
        type="button"
        className={`${
          callStatus === "progress" || callStatus === "confirmed"
            ? "bg-red-300 hover:bg-red-500"
            : "bg-figmaGreen hover:bg-figmaGreenHover"
        } rounded mx-2 my-1 focus:outline-none w-16 h-7 flex items-center justify-center`}
        onClick={
          callStatus === "progress" || callStatus === "confirmed"
            ? hangUp
            : doCall
        }
      >
        <div className="position: relative">
          <img
            src={PhoneRectangle}
            width=""
            alt="phone rectangle"
            className={"position: absolute top-1/4 left-1/4"}
          />

          <img src={PhoneIcon} width="23px" alt="phone icon" />
        </div>
      </button>
      <button
        type="button"
        className="w-16 h-7 rounded hover:bg-gray-300 focus:outline-none bg-gray-500 flex items-center justify-center"
        onClick={clearNumber}
      >
        {/* <div className={classes.triangle}></div> */}
        <img src={CrossIcon} width="23px" alt="cross icon" />
      </button>
    </div>
  );
};
