import React, { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoPage = () => {
  const { id } = useParams();
  const roomID = id;
  const meetingContainer = useRef(null);

  useEffect(() => {
    const myMeeting = async (element) => {
      // generate Kit Token
      const appID = 294684418;
      const serverSecret = '3298b93af629af5b36622e1fd60581fa';
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, 
        serverSecret, 
        roomID, 
        Date.now().toString(),  // Fixed Date.now()
        "vijaykumar"
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // Start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,  // 1-on-1 call mode
        },
      });
    };

    if (meetingContainer.current) {
      myMeeting(meetingContainer.current);
    }
  }, [roomID]);

  return (
    <div ref={meetingContainer}></div>
  );
};

export default VideoPage;
