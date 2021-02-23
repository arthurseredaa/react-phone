import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import IncomigCallSound from "../../assets/COMTelph_Tone ringback tone 1 (ID 1614)_BSB.mp3";
// import uaCreator from "../../helpers/uaCreator";
import { clearPhoneNumber, setPhoneNumber } from "../../redux/actions/phone";
import { PhoneButtons } from "./PhoneButtons/PhoneButtons";
import { PhoneInput } from "./PhoneInput/PhoneInput";
import { PhoneHeader } from "./PhoneHeader/PhoneHeader";
import { uaCreator } from "../../helpers/uaCreator";
import classes from "./Phone.module.scss";
import { NavigationButtons } from "./NavigationButtons/NavigationButtons";

export const Phone = ({ config }) => {
  const [state, setState] = useState({
    session: null,
    accept: false,
    showKeyboard: true,
    drag: {
      diffX: 0,
      diffY: 0,
      isDragging: false,
      styles: {
        top: "30%",
        left: "40%",
      },
    },
  });

  const [callData, setCallData] = useState({
    status: "",
  });

  const dispatch = useDispatch();

  const phoneRef = useRef();

  const { ua, remoteAudio, session } = uaCreator(config);

  const phoneNumber = useSelector((state) => state.phone.phoneNumber);

  // const socket = new JsSip.WebSocketInterface(config.host);
  // const configurations = {
  //   sockets: [socket],
  //   uri: config.uri,
  //   password: config.password,
  // };

  // const remoteAudio = new window.Audio();
  // remoteAudio.autoplay = true;
  // remoteAudio.addEventListener("canplaythrough", event => {
  //   remoteAudio.play();
  // });

  // const ua = new JsSip.UA(configurations);

  // ua.on("connected", () => console.log("Connected!"));

  // ua.on("disconnected", () => console.log("Disconnected!"));

  // ua.start();

  const handleCallStatus = (status, clear) => {
    setCallData({ ...state, status: status });
    if (clear) {
      setTimeout(() => setCallData({ ...state, status: "" }), 4000);
    }
  };

  const eventHandlers = {
    progress: (e) => {
      console.log(e);
      console.log("Call in progress");
      handleCallStatus("progress");
    },
    failed: (e) => {
      console.log(e);
      console.log("Call failed");
      handleCallStatus("failed", true);
    },
    ended: (e) => {
      console.log(e);
      console.log("Call ended");
      handleCallStatus("ended", true);
    },
    confirmed: (e) => {
      console.log(e);
      console.log("Call confirmed");
      handleCallStatus("confirmed");
    },
  };

  const options = {
    eventHandlers: eventHandlers,
    mediaConstraints: { audio: true, video: false },
  };

  const doCall = () => {
    if (phoneNumber.length >= 9) {
      ua.call(phoneNumber, options);
    }
    state.session &&
      state.session.connection.addEventListener("addstream", (e) => {
        remoteAudio.src = e.streams[0];
        remoteAudio.play();
      });
  };

  const hangUp = () => {
    if (session) {
      session.terminate();
    }
  };

  const clearNumber = () => dispatch(clearPhoneNumber());

  const handleShowKeyboard = () =>
    setState({ ...state, showKeyboard: !state.showKeyboard });

  const handleChangePhoneNumber = (e) => {
    e.stopPropagation();
    dispatch(setPhoneNumber(e.target.id + ""));
  };

  const handleSubElement = (e) => {
    e.stopPropagation();
    dispatch(setPhoneNumber(e.target.dataset.symbol + ""));
  };

  const handleMouseDown = (e) => {
    setState({
      ...state,
      drag: {
        ...state.drag,
        diffX: e.screenX - phoneRef.current.getBoundingClientRect().left,
        diffY: e.screenY - phoneRef.current.getBoundingClientRect().top,
        isDragging: true,
      },
    });
  };

  const handleMouseMove = (e) => {
    if (state.drag.isDragging) {
      let left = e.screenX - state.drag.diffX,
        top = e.screenY - state.drag.diffY;

      setState({
        ...state,
        drag: { ...state.drag, styles: { left: left, top: top } },
      });
    }
  };

  const handleMouseUp = () =>
    setState({ ...state, drag: { ...state.drag, isDragging: false } });

  // const doCall = () => console.log("test");

  return (
    <>
      <div
        id="phone-wrapper"
        className={`${classes.phoneWrapper} overflow-hidden display: flex flex-col text-center position: absolute border-2 border-gray-200 rounded-xl px-3 py-2 pt-10 pb-10 min-h-200 w-72`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={state.drag.styles}
        ref={phoneRef}
      >
        {/* <PhoneHeader /> */}
        <PhoneInput phoneNumber={phoneNumber} />
        {callData.status}
        <PhoneButtons
          handleChange={handleChangePhoneNumber}
          handleSubElement={handleSubElement}
          doCall={doCall}
          clearNumber={clearNumber}
          handleKeyboard={handleShowKeyboard}
          isHideKeyboard={state.showKeyboard}
          callProgress={callData.status}
          hangUp={hangUp}
        />
        <NavigationButtons />
      </div>
    </>
  );
};
