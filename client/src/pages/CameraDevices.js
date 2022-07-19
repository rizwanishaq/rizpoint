import React, { useState, useEffect, useCallback, useRef } from "react";
import Webcam from "react-webcam";
import { Container } from "react-bootstrap";

const CameraDevices = () => {
  const [deviceId, setDeviceId] = useState(null);
  const [devices, setDevices] = useState([]);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const handleDevices = useCallback(
    (mediaDevices) => {
      setDevices(mediaDevices.filter((device) => device.kind === "videoinput"));
    },
    [setDevices]
  );

  useEffect(() => {
    const getUserMedia = () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    };
    getUserMedia();
  }, [handleDevices]);

  const drawImge = () => {
    const video = webcamRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const ctx = canvas.getContext("2d");

      canvas.width = video.video.videoWidth;
      canvas.height = video.video.videoHeight;

      // We want also the canvas to display de image mirrored
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video.video, 0, 0, canvas.width, canvas.height);
      //   ctx.scale(-1, 1);
      //   ctx.translate(-canvas.width, 0);
      //   var faceArea = 300;
      //   var pX = canvas.width / 2 - faceArea / 2;
      //   var pY = canvas.height / 2 - faceArea / 2;

      //   ctx.rect(pX, pY, faceArea, faceArea);
      //   ctx.lineWidth = "6";
      //   ctx.strokeStyle = "red";
      //   ctx.stroke();
      setTimeout(drawImge, 1);
    }
  };
  setTimeout(drawImge, 1);

  return (
    <Container className="mt-2 text-center">
      {devices.map((device, key) => (
        <div key={key}>
          <Webcam
            ref={webcamRef}
            audio={false}
            style={{ width: "0%", height: "0%" }}
            mirrored={true}
            onUserMedia={(stream) => {
              console.log(stream);
            }}
            videoConstraints={{
              deviceId: device.deviceId,
              width: 1280,
              height: 720,
            }}
          />
          <p>{device.label || `Device ${key + 1}`}</p>
        </div>
      ))}
      <canvas ref={canvasRef} />
    </Container>
  );
};

export default CameraDevices;
