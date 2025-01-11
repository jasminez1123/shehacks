import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
      />
      <button onClick={capture}>Capture photo</button>
      {imageSrc && (
        <div>
          <h2>Captured Image:</h2>
          <img src={imageSrc} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default Camera;