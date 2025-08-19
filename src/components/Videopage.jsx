import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constant';

const Videopage = () => {
  const { id } = useParams();
  const roomID = id;

  const location = useLocation();
  const userName = location.state?.userName || "Guest"; // 👈 yaha se naam aayega

  let myMeeting = async (element) => {
    const appID = APP_ID;
    const serverSecret = SERVER_SECRET;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      userName   // ✅ ab har user ka alag naam hoga
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy link',
          url:
            window.location.protocol + '//' +
            window.location.host + window.location.pathname +
            '?roomID=' + roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return <div ref={myMeeting}></div>;
};

export default Videopage;
