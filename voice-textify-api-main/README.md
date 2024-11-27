# FastAPI Whisper Transcription API

This project provides an API for audio-to-text transcription using OpenAI's Whisper model. It accepts audio files in various formats, processes them using the Whisper library, and returns the transcribed text.

---

## Features

- Accepts audio files via HTTP POST requests.
- Supports multiple audio formats including `.mp3`, `.wav`, `.flac`, and more.
- Utilizes GPU acceleration (if available) for faster transcription.
- Cross-Origin Resource Sharing (CORS) support for frontend integration.

---

## Run with Docker

- Make sure you have Docker installed on your machine.
- Create `.env` from `.env_sample` and set the environment variables.
```bash
    cp .env_sample .env
```
- Build the Docker image.
```bash
    docker compose build
```
- Run the Docker container.
```bash
    docker compose up
```

---

## Run Locally

### Prerequisites

Before running the project, ensure the following dependencies are installed:

- **Python 3.10**
- **pip** (Python package manager)
- **ffmpeg** (required by Whisper for audio processing)

To install ffmpeg:

```bash
  # macOS
  brew install ffmpeg
```
```bash
  # Ubuntu/Debian
  sudo apt install ffmpeg
```

### Create a virtual environment
```bash
  python3 -m venv venv
```

### Activate the virtual environment
```bash
  source venv/bin/activate
```

### Install Dependencies
```bash
  pip install -r requirements.txt
```

### Set Environment Variables
Create a `.env` file from the `.env_sample` template and set the required environment variables.

```bash
  cp .env_sample .env
```

### Run the API
```bash
  uvicorn app.main:app --reload
```