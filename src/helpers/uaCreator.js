import JsSip from 'jssip';
​
export default async function uaCreator(config) {
  let oSipAudio = document.createElement('audio');
  let oSoundAudio = document.createElement('audio');
  oSoundAudio.src = config.sound;
  oSoundAudio.loop = true;
  let socket = new JsSip.WebSocketInterface(config.host);
  socket.via_transport = config.via_transport || 'WS';
  let connectionConfig = {
    sockets: [socket],
    uri: config.uri,
    name: config.name,
    password: config.password,
    realm: config.realm,
    register_expires: config.register_expires,
    session_timers_refresh_method: config.session_timers_refresh_method,
  };
  let callOptions = {
    mediaConstraints: { audio: true, video: false },
    pcConfig: {
      iceServers: [
        {
          urls: ['stun:stun.l.google.com:19302'],
        },
        { ...config.turn },
      ],
    },
  };
  return {
    ua: new JsSip.UA(connectionConfig),
    audio: {
      call: oSipAudio,
      sounds: oSoundAudio,
    },
    callOptions: callOptions,
    config,
  };
}
