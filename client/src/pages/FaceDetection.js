import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { FaceMesh } from "@mediapipe/face_mesh";
import * as Facemesh from "@mediapipe/face_mesh";
import * as cam from "@mediapipe/camera_utils";

import { Container } from "react-bootstrap";

const FaceDetection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const connect = window.drawConnectors;
  let camera = null;

  const drawLandmark = (multiFaceLandmarks, canvasCtx) => {
    for (const landmarks of multiFaceLandmarks) {
      // connect(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION, {
      //   color: "#C0C0C070",
      //   lineWidth: 1,
      // });
      connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYE, {
        color: "#FF3030",
        lineWidth: 1,
      });
      // connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYEBROW, {
      //   color: "#FF3030",
      // });
      connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYE, {
        color: "#30FF30",
        lineWidth: 1,
      });
      // connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYEBROW, {
      //   color: "#30FF30",
      // });
      connect(canvasCtx, landmarks, Facemesh.FACEMESH_FACE_OVAL, {
        color: "#E0E0E0",
        lineWidth: 1,
      });
      connect(canvasCtx, landmarks, Facemesh.FACEMESH_LIPS, {
        color: "#E0E0E0",
        lineWidth: 1,
      });
    }
  };

  const onResults = (results) => {
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    if (results.multiFaceLandmarks)
      drawLandmark(results.multiFaceLandmarks, canvasCtx);

    canvasCtx.restore();
  };

  useEffect(() => {
    const faceMesh = new FaceMesh({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      },
    });
    faceMesh.setOptions({
      maxNumFaces: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
      selfieMode: true,
    });

    faceMesh.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await faceMesh.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  return (
    <Container className="mt-2 text-center">
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
    </Container>
  );
};

export default FaceDetection;
