import React, { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

const FaceDetection = () => {
  const MODEL_URL =
    "https://cdn.jsdelivr.net/gh/rizwanishaq/facedetection/dist/models/";

  const [start, setStart] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const videoEl = useRef(undefined);
  const canvas_ref = useRef(undefined);

  useEffect(() => {
    const loadModel = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
      setLoaded(true);
    };
    // loadModel();
  }, []);

  useEffect(() => {
    if (!videoEl) {
      return;
    }
    if (start) {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((stream) => {
          videoEl.current.srcObject = stream;
          videoEl.current.play();
        });
    }
  }, [videoEl, start]);

  return (
    <>
      <video ref={videoEl} />
      <canvas ref={canvas_ref} />
    </>
  );
};

export default FaceDetection;
