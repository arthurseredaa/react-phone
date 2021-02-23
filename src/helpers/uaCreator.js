import JsSip from "jssip";

export const uaCreator = (config) => {
  const socket = new JsSip.WebSocketInterface(config.host);
  const configurations = {
    sockets: [socket],
    uri: config.uri,
    password: config.password,
  };

  const remoteAudio = new window.Audio();
  remoteAudio.autoplay = true;
  remoteAudio.addEventListener("canplaythrough", (event) => {
    remoteAudio.play();
  });

  const ua = new JsSip.UA(configurations);

  ua.on("connected", (e) => {
    console.log("Connected!");
  });

  ua.on("disconnected", (e) => {
    console.log("Disconnected!")
    console.log(e)
  });

  let session;

  ua.on("newRTCSession", (data) => {
    session = data.session
  })

  ua.start();

  return { ua, remoteAudio, session };
};
