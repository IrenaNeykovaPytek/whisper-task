import { CircleX, Loader2, Mic, StopCircle, Text } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeWriter } from "@/components/ui/type-writer";
import { useUploadAudioRecording } from "./hooks/use-upload-audio-recording";
import { useAudioRecord } from "./hooks/use-audio-record";

function App() {
  const {
    mutateAsync: uploadAudio,
    data: responseText,
    isPending,
    isSuccess,
    reset,
  } = useUploadAudioRecording();

  const {
    recordedAudioBlob,
    startRecording,
    stopRecording,
    isRecording,
    browserAudioUrl,
    clearRecording,
  } = useAudioRecord({ onClear: reset });

  const submitAudio = async () => {
    if (!recordedAudioBlob) {
      alert("No audio recorded to submit.");
      return;
    }

    await uploadAudio(recordedAudioBlob);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-10 bg-gray-300">
      <div className="my-10 text-center">
        <h1 className="text-2xl font-bold">
          Speak Your Mind, Watch It Turn to Text!
        </h1>
      </div>

      <div className="flex flex-col items-center gap-4">
        {!isRecording ? (
          <Button onClick={startRecording}>
            <Mic className="mr-2" />
            Record Voice
          </Button>
        ) : (
          <Button onClick={stopRecording}>
            <StopCircle className="mr-2" />
            Stop Recording
          </Button>
        )}

        {browserAudioUrl && (
          <div className="flex flex-col items-center gap-4 mt-4">
            <audio controls src={browserAudioUrl} className="w-full" />
            <Button variant="secondary" onClick={clearRecording}>
              <CircleX className="mr-2" />
              Clear recording
            </Button>
            <Button onClick={submitAudio}>
              <Text className="mr-2" />
              Convert to text
            </Button>
          </div>
        )}
      </div>
      {isPending && (
        <div className="flex justify-center items-center h-32">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}
      {!isPending && isSuccess && (
        <div className="p-10">
          <TypeWriter text={responseText} />
        </div>
      )}
    </div>
  );
}

export default App;
