import { debounce } from "../../../helpers/debounce";
import { Dialpad } from "./Dialpad/Dialpad";
import { ControlButtons } from "./ControlButtons/ControlButtons";

export const PhoneButtons = ({
  handleChange,
  handleSubElement,
  doCall,
  clearNumber,
  handleKeyboard,
  isHideKeyboard,
  callProgress,
  hangUp,
}) => {

  const handleClick = async (e) => {
    debounce(() => handleChange(e));
    // timer = setTimeout(() => {
    //   if(!prevent) {
    //     handleChange(e);
    //   }
    //   setPrevent(false)
    // }, delay);
  };

  const handleDoubleClick = (e) => {
    // clearTimeout(timer);

    // setPrevent(true);

    handleSubElement(e);
  };

  return (
    <div className="text-center w-full" onClick={(e) => e.stopPropagation()}>
      <Dialpad
        isHideKeyboard={isHideKeyboard}
        handleClick={handleClick}
        handleDoubleClick={handleDoubleClick}
        handleChange={handleChange}
      />
      <ControlButtons
        handleKeyboard={handleKeyboard}
        isHideKeyboard={isHideKeyboard}
        callStatus={callProgress}
        hangUp={hangUp}
        doCall={doCall}
        clearNumber={clearNumber}
      />
    </div>
  );
};
