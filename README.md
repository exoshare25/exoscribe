# ExoShare

ExoShare is an innovative web application that leverages Web Workers to execute machine learning models directly in the browser. Designed to offer a seamless, interactive user experience, ExoShare enables users to capture or upload audio files for real-time processing and interpretation.

# Features

# Audio Recording:
  - Record audio using the browser’s built-in media devices.
  - Start and stop recording with simple, intuitive controls.
  - Duration tracking for recorded audio.

# File Upload:**
  - Upload audio files in supported formats such as `.mp3` and `.wave` for processing.

# Machine Learning in the Browser:
  - Employ Web Workers to run ML models locally, ensuring data privacy and low-latency performance.

# Technologies Used

- **Frontend:** React.js
  - Modern JavaScript library for building user interfaces.
  - Flexible component-based architecture.

- **MediaRecorder API:**
  - Enables audio recording functionality via the browser.

- **Web Workers:**
  - Runs ML models in parallel threads, improving performance and user experience.

- **Blob API:**
  - Handles audio data efficiently, facilitating easy storage and playback.

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone <https://github.com/exoshare25/exoscribe>
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd exoshare
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```
   Open (http://localhost:5173/) in your browser to access the application.

## How It Works

1. **Audio Recording:**
   - When the user clicks "Start Recording," the app accesses the device’s microphone using the `navigator.mediaDevices.getUserMedia` API.
   - The MediaRecorder API streams the audio and stores the chunks in a `Blob` format.

2. **File Upload:**
   - Users can upload `.mp3` or `.wave` files for processing by selecting the file from their device.

3. **Machine Learning Models:**
   - Web Workers execute ML models locally in the browser for tasks like audio transcription or classification.

## User Interface

- A clean and responsive UI built using Tailwind CSS.
- Centralized recording button with a visual microphone indicator.
- Upload option for alternative input methods.
- Branding and slogans that emphasize simplicity and innovation.

## Usage

1. Launch the application and navigate to the homepage.
2. Click "Start Recording" to record audio or use the upload option to select a pre-recorded audio file.
3. Processed results will be displayed or used according to the implemented ML model functionalities.

## Future Enhancements

- Integration of advanced ML models for:
  - Real-time transcription.
  - Language translation.
  - Sentiment and emotion analysis.
- Support for additional audio formats.
- Enhanced error handling and user feedback.

## Contributing

We welcome contributions to ExoShare! If you wish to contribute, please fork the repository and submit a pull request with detailed descriptions of your changes.

## License



## Acknowledgments

- Inspired by the potential of in-browser ML for improved user experiences.
- Thanks to the developers of React.js, MediaRecorder API, and Web Workers for their contributions to open-source tools that power ExoShare.
- Thanks to George Exodus Nayan, Matthias B.E Luogon & other contributors

## Contact

For inquiries, feedback, or collaboration, please contact us at (https://matt.savvy91psinnovates.tech/).

