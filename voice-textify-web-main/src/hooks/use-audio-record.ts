import { useRef, useState } from "react";

export const useAudioRecord = ({ onClear }: { onClear: () => void }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioBlob, setRecordedAudioBlob] = useState<Blob | null>(null);
  const [browserAudioUrl, setBrowserAudioUrl] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Audio recording is not supported in this browser.");
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorderRef.current = new MediaRecorder(stream);

    const chunks: Blob[] = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/mp3" });
      setRecordedAudioBlob(blob);
      setBrowserAudioUrl(URL.createObjectURL(blob));
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const clearRecording = () => {
    onClear();
    setIsRecording(false);
    setRecordedAudioBlob(null);
    setBrowserAudioUrl("");
  };

  return {
    isRecording,
    recordedAudioBlob,
    browserAudioUrl,
    startRecording,
    stopRecording,
    clearRecording,
  };
};
