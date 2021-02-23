import JsSip from "jssip";
import { useState } from "react";

export const useUaCreator = (config) => {
  const [call_status, setCallStatus] = useState("");

  let active_call,
    ua = null;
  let registered = false,
    callStart = 0;

  console.info(
    "Create SIP stack with configuration: " + JSON.stringify(config)
  );

  const socket = new JsSip.WebSocketInterface(config.host);
  const configurations = {
    sockets: [socket],
    uri: config.uri,
    password: config.password,
  };

  try {
    ua = new JsSip.UA(configurations);
  } catch(e) {
    console.debug(e.toString());
  }

  ua.on("connected", (e) => console.debug("Connected to websocket."));
  ua.on("disconnected", (e) => console.debug("Disconnected from websocket."));

  ua.on("newRTCSession", (e) => {
    console.debug("New session created!")
    if(active_call === null && e.session !== undefined) {
      active_call = e.session;
      // handle sesion's event's

      // FAILED
      active_call.on("failed", (e) => {
        console.log("Call failed", e);
        active_call = null;
        setCallStatus("failed")
      });
      // PROGRESS
      active_call.on("progress", (e) => {
        console.log("Call in progress", e);
        if(e.originator === "remote") {
          e.response.body = null;
        }
        setCallStatus("progress");
      });
      // CONFIRMED
      active_call.on("confirmed", (e) => {
        console.log("Call confirmed!", e);
        callStart = new Date().getTime();
      });
      // ADDSTREAM
      active_call.on("addstream", (e) => {
        console.log("Add remote stream", e);
        const audio = document.createElement("audio");
      });
      // ENDED
      active_call.on("ended", (e) => {
        console.debug("Call terminated!", e);
        active_call = null;
      });

    } else {
      e.data.session.terminate({status_code: 486});
    }

  });

  ua.on("registered", (e) => {
    console.debug("Registered");
    if(!registered) {
      registered = true;
    }
  })

  ua.start();

  // return { ua, remoteAudio, session };
  return { ua, active_call, call_status, callStart, registered };
};
