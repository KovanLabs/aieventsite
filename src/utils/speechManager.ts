// Create this new file

// Global speech queue management
let isSpeaking = false;
let speechQueue: string[] = [];

export const speakText = (text: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Add to queue
    speechQueue.push(text);

    // If already speaking, just queue it up
    if (isSpeaking) {
      console.log(`Speech "${text}" queued (${speechQueue.length} in queue)`);
      resolve();
      return;
    }

    // Process queue
    processQueue(resolve, reject);
  });
};

const processQueue = (resolve: () => void, reject: (error: any) => void) => {
  // If queue is empty or already speaking, stop
  if (speechQueue.length === 0 || isSpeaking) {
    resolve();
    return;
  }

  const textToSpeak = speechQueue.shift() as string;
  isSpeaking = true;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  console.log("Starting speech:", textToSpeak);

  // Wait a moment to ensure speech system is ready
  setTimeout(() => {
    try {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      // Configure speech parameters
      utterance.volume = 1.0;
      utterance.rate = 0.9;
      utterance.pitch = 1.0;

      // Add detailed event handlers
      utterance.onstart = () => console.log("Speech started:", textToSpeak);
      utterance.onend = () => {
        console.log("Speech completed:", textToSpeak);
        isSpeaking = false;
        setTimeout(() => processQueue(resolve, reject), 100); // Process next in queue
      };

      utterance.onerror = (e) => {
        console.error("Speech error:", e);
        isSpeaking = false;
        setTimeout(() => processQueue(resolve, reject), 100); // Try next in queue
      };

      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error("Error initiating speech:", error);
      isSpeaking = false;
      reject(error);
      setTimeout(() => processQueue(resolve, reject), 100);
    }
  }, 250);
};

// Chrome/Safari fix for speech synthesis getting suspended
export const initSpeechSynthesisFix = (): (() => void) => {
  // Keep speech synthesis active in Chrome/Safari
  const intervalId = setInterval(() => {
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }
  }, 10000);

  // Initialize with a silent utterance
  const silent = new SpeechSynthesisUtterance("");
  silent.volume = 0;
  window.speechSynthesis.speak(silent);

  // Return cleanup function
  return () => clearInterval(intervalId);
};
