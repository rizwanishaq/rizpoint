import React from "react";
import { Button, Container } from "react-bootstrap";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { FaMicrophoneAlt, FaMicrophoneSlash } from "react-icons/fa";

const VoiceAssistant = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Container className="mt-2 text-center">
      <p>{listening ? <FaMicrophoneAlt /> : <FaMicrophoneSlash />}</p>
      <Button onClick={SpeechRecognition.startListening} variant="dark">
        Start
      </Button>
      <Button onClick={SpeechRecognition.stopListening} variant="dark">
        Stop
      </Button>
      <Button onClick={resetTranscript} variant="dark">
        Reset
      </Button>
      <p>{transcript}</p>
    </Container>
  );
};

export default VoiceAssistant;
