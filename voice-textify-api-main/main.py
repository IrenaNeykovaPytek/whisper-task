import os
import tempfile

import torch
from fastapi import FastAPI, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from whisper import load_audio, load_model

app = FastAPI()

origins_env = os.getenv("CORS_ORIGINS", "http://localhost:3000")
origins = [origin.strip() for origin in origins_env.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

device = "cuda" if torch.cuda.is_available() else "cpu"

model = load_model("base.en", device=device)

ALLOWED_CONTENT_TYPES = {
    "audio/wav",
    "audio/mp3",
    "audio/flac",
}



@app.post("/transcribe")
async def transcribe(file: UploadFile):
    if file.content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(status_code=400, detail="Invalid file type.")

    with tempfile.NamedTemporaryFile(suffix=".tmp") as temp_audio:
        content = await file.read()
        temp_audio.write(content)
        temp_audio.flush()

        audio = load_audio(temp_audio.name)

    result = model.transcribe(
        audio, fp16=(device == "cuda"), language="en"
    )
    return {"text": result["text"]}

