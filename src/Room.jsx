import React from 'react'
// inbuilt function provide krta hai 

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
const Room = () => {
    // roomid hi likhege jo udhr :roomid likha hai na dusra variable likhege toh chlega nahi useparamenters
    
    
    
    const {roomID}=useParams()

    
    let myMeeting = async (element) => {
        // generate Kit Token
        
     
         const appID = 808318902;
         const serverSecret = "8718d65714bc6006f2859521b7a59469";

         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), " ");
         
         const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy Link',
            url:`https://camconnect-2064e.web.app/room/${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        
      });

    }
  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh'}}
    ></div>
  )
}

export default Room