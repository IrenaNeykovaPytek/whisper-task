import { useMutation } from "@tanstack/react-query";
import { useFetch } from "./shared/use-fetch";

const UPLOAD_AUDIO_RECORDING_MUTATION_KEY =
  "UPLOAD_AUDIO_RECORDING_MUTATION_KEY";

export const useUploadAudioRecording = () => {
  const fetch = useFetch<{ text: string }>();
  const uploadFile = async (audioBlob: Blob): Promise<string> => {
    const formData = new FormData();
    const fileName = `audio-recording-${Date.now()}.mp3`;
    formData.append("file", audioBlob, fileName);

    const whisperAiApiEndpoint = import.meta.env.VITE_WHISPER_AI_API_ENDPOINT;
    const data = await fetch(whisperAiApiEndpoint, {
      method: "POST",
      body: formData,
    });

    return data.text;
  };
  return useMutation({
    mutationKey: [UPLOAD_AUDIO_RECORDING_MUTATION_KEY],
    mutationFn: uploadFile,
  });
};
