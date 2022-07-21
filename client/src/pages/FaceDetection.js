import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

import { Container } from "react-bootstrap";

const FaceDetection = () => {
  const model_url =
    "https://cdn.jsdelivr.net/gh/rizwanishaq/facedetection/dist/models/";
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      const model = await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(model_url),
        faceapi.nets.faceLandmark68Net.loadFromUri(model_url),
        faceapi.nets.faceRecognitionNet.loadFromUri(model_url),
        faceapi.nets.faceExpressionNet.loadFromUri(model_url),
      ]);
      setModel(true);
      console.log("Model loaded");
    };
    loadModel();
  }, [setModel]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!model) return;
      predictionFunction();
    }, 100);

    return () => clearInterval(timer);
  }, [model]);

  const drawPrediction = (predictions, ctx) => {};

  const predictionFunction = async () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      canvasRef.current = faceapi.createCanvasFromMedia(
        webcamRef.current.video
      );

      faceapi.matchDimensions(canvasRef.current, {
        width: webcamRef.current.video.videoWidth,
        height: webcamRef.current.video.videoHeight,
      });

      const detections = await faceapi
        .detectAllFaces(
          webcamRef.current.video,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceExpressions();

      const resizedDetections = faceapi.resizeResults(detections, {
        width: webcamRef.current.video.videoWidth,
        height: webcamRef.current.video.videoHeight,
      });

      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
    }
  };

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
