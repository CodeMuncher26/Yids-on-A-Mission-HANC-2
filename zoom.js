ZoomMtg.setZoomJSLib('https://source.zoom.us/2.18.0/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

async function startZoom() {
  const meetingNumber = 'YOUR_MEETING_NUMBER';  // e.g., 123456789
  const userName = 'YOUR_NAME';
  const userEmail = 'YOUR_EMAIL';
  const passWord = 'YOUR_MEETING_PASSWORD';
  const sdkKey = 'YOUR_SDK_KEY';
  const sdkSecret = 'YOUR_SDK_SECRET';

  const signature = generateSignature(sdkKey, sdkSecret, meetingNumber, 0);

  ZoomMtg.init({
    leaveUrl: 'https://chavrutatogo.com',
    isSupportAV: true,
    success: () => {
      ZoomMtg.join({
        signature,
        meetingNumber,
        userName,
        apiKey: sdkKey,
        userEmail,
        passWord,
        success: () => {
          console.log('Joined Zoom successfully');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  });
}

function generateSignature(sdkKey, sdkSecret, meetingNumber, role) {
  const timestamp = new Date().getTime() - 30000;
  const msg = `${sdkKey}${meetingNumber}${timestamp}${role}`;
  const hash = CryptoJS.HmacSHA256(msg, sdkSecret);
  const signature = `${sdkKey}.${meetingNumber}.${timestamp}.${role}.${hash.toString(CryptoJS.enc.Base64)}`;
  return signature;
}
