import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constant';

const Videopage = () => {
  const { id } = useParams();
  const roomID = id;
  const containerRef = useRef(null);

  useEffect(() => {
    const appID = Number(APP_ID); // 👈 Make sure it's a number
    const serverSecret = SERVER_SECRET;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(), // unique user ID
      "your_name" // ✅ Optionally replace with dynamic user name
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: 'Copy link',
          url: `${window.location.protocol}//${window.location.host}/room/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  }, [roomID]);

  return <div ref={containerRef} />;
};

export default Videopage;
