# Voice Textify Web Application: Bringing Your Words to Life

Voice Textify is a modern web application designed to enhance user engagement by combining **voice input** and **typewriter-style text animations**. It allows users to speak and have their words transformed into text that animates dynamically, providing an interactive and visually appealing experience.

## Features

### Core Features

- **Voice-to-Text Conversion**:

- Uses the openai/whisper API to convert spoken words into text seamlessly.

- Supports multiple languages based on browser compatibility.

- **Typewriter Text Animation**:

- Displays the transcribed text with a typewriter-style animation.
- **Interactive User Interface**:

- Simple and intuitive design for users to start and stop voice input.

## How It Works

1.  **Start Voice Input**:

- Click the "Record voice" button to begin voice recoding.
- Click the "Stop recording" when you are done recording.
- You can optionally preview the recorded audio using the media player.
- Click the "Start Listening" button to begin voice recognition.
- Click the "Convert to text" button to transcribe your recorded voice to text.

2.  **Typewriter Animation**:

- Once the transcription is complete, the app displays the text using a typewriter animation.

3.  **Stop or Reset**:

- You can click the "Clear recording" button to clear your current recording and transcription.

---

## Tech Stack

- **Frontend**:

- **React**: For building the dynamic user interface.

- **TypeScript**: For type-safe code, ensuring reliability.

- **Tailwind CSS**: For responsive and modern design.

- **APIs**:

- **Web Speech API**: For voice recognition and speech-to-text capabilities.

- **Development Tools**:

- **Vite**: For fast development and build processes.

- **ESLint** and **Prettier**: For clean and consistent code quality.

---

## Installation and Setup

### Prerequisites

- Node.js v22 and npm installed on your system.

- A modern web browser.

- Environment variables:
  - VITE_WHISPER_AI_API_ENDPOINT - This needs to point to the AI transcription API (POST) endpoint which should accept the file as Blob wrapped in FormData.

### Steps

1. Install dependencies:

```bash

npm install

```

2. Start the development server:

```bash

npm run dev

```

3. Open your browser and go to `http://localhost:8080`.

## Usage

1. Start the app in your browser.

2. Click on the "Record voice" button.

3. Speak into your microphone.

4. When you're done speaking, click on the "Stop recording" button.

5. You can optionally preview the recorded audio using the media player.
6. You can optionally clear the recorded audio using "Clear recording" button.
7. You can convert the recorded audio to text using "Convert to text" button.
8. After conversion you will see the text appearing with an type-writer animation.

---

### Styling

All styles are defined using Tailwind CSS. To customize the design, update the utility classes in the components or modify the Tailwind configuration file (`tailwind.config.js`).

---

## Future Improvements

- Add dark mode support for better user experience in low-light environments.

- Integrate text-to-speech to replay the transcribed text.

- Enhance multi-language support for broader accessibility.

- Save or share the animated output for reusability.

---

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements

- Inspired by the idea of creating interactive and accessible web applications.

- Built with modern web technologies and best practices.

Enjoy using Voice Textify! 😊
