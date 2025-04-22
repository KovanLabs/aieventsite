"use client";
import { useState, useEffect, useRef } from "react";
import BlurText from "@/components/Blurtext";
import Orb from "../components/Orb";
import GradientText from "@/components/GradientText";
import sponsorsData from '../Data/Sponsors_m.json';
import { motion } from "framer-motion";
import SponsorshipPackages from "./Sponsors/components/Sponser-packages";
import BecomeSpeaker from "./Speakers/Components/Become-speaker";
import speakersData from "../Data/Speaker.json"


function Page() {
  // State for each countdown value
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const sponsorsScrollRef = useRef<HTMLDivElement>(null);
  const participantsScrollRef = useRef<HTMLDivElement>(null);

  // Add this near the top of your component after other state declarations
  const testSpeechDirectly = () => {
    if ("speechSynthesis" in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      setTimeout(() => {
        const msg = new SpeechSynthesisUtterance("Testing orb speech");
        msg.volume = 1.0;
        msg.rate = 1.0;
        msg.pitch = 1.0;
        msg.onstart = () => console.log("Direct test speech started");
        msg.onend = () => console.log("Direct test speech ended");
        window.speechSynthesis.speak(msg);
      }, 100);
    }
  };

  // Update the enableSpeech function
  const enableSpeech = () => {
    // Only run if speech isn't already enabled
    if (!speechEnabled) {
      setSpeechEnabled(true);
      
      // Test speech synthesis with audible feedback
      if ("speechSynthesis" in window) {
        // Cancel any ongoing speech first
        window.speechSynthesis.cancel();
        
        // Wait a moment before speaking to ensure clean state
        setTimeout(() => {
          const test = new SpeechSynthesisUtterance("Speech enabled");
          test.volume = 1.0;
          test.rate = 1.0;
          
          // Add event listeners to track speech progress
          test.onstart = () => console.log("Test speech started");
          test.onend = () => console.log("Test speech ended");
          test.onerror = (e) => console.error("Test speech error:", e);
          
          window.speechSynthesis.speak(test);
        }, 100);
      } else {
        console.warn("Speech synthesis not available in this browser");
      }
    }
  };

  useEffect(() => {
    const targetDate = new Date("2025-10-02T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen overflow-y-auto px-4 bg-black">
    
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          welcomeMessage="Hello! Welcome to the AI Conference 2025" 
          speechEnabled={speechEnabled}
        />

          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={1}
            showBorder={false}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-normal p-1 leading-loose  overflow-visible"
          >
            Unleash the Future. Together.
          </GradientText>

        <p className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-[1068px] text-lg md:text-xl lg:text-2xl font-sans font-normal text-center mt-4 md:mt-6">
          TiE Coimbatore&apos;s KOVAI Conference – a groundbreaking convergence of minds, innovation, and the transformative power of Artificial Intelligence.
        </p>

        <div className="mt-8 md:mt-16 flex flex-col items-center justify-center py-2 w-full">
          <BlurText
            text="The Future is Calling. Are You Ready?"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] p-1 font-normal"
          />

          {!speechEnabled ? (
            <div className="text-center text-white/70 mt-2 animate-pulse">
              <p className="text-sm md:text-base flex items-center justify-center gap-1">
                <span className="inline-block w-2 h-2 bg-[#40ffaa] rounded-full"></span>
                Hover over the orb to interact
              </p>
            </div>
          ) : (
            <div className="h-6"></div> // Empty spacer when speech is enabled
          )}

          {/* Countdown Box UI */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8 md:mt-12 max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl w-full md:w-64 h-40 md:h-64 flex flex-col items-center justify-center shadow-[0_4px_30px_rgba(64,255,170,0.2)] group overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:border-2 before:border-[#40ffaa]/30 before:rounded-2xl before:scale-[0.98] before:transition-transform group-hover:before:scale-100 transition-all duration-500"
            >
              <motion.div 
                animate={{ 
                  background: ["linear-gradient(to right, #40ffaa10, transparent, #4079ff10)", 
                        "linear-gradient(to right, #4079ff10, transparent, #40ffaa10)"] 
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute -inset-1 bg-[#40ffaa]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <motion.div 
                key={timeLeft.days}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#40ffaa] to-[#40ffaa]/80 group-hover:scale-110 transition-transform duration-300"
              >
                {timeLeft.days}
              </motion.div>
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="mt-3 text-lg md:text-xl text-white/90 font-medium tracking-wide"
              >
                Days
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl w-full md:w-64 h-40 md:h-64 flex flex-col items-center justify-center shadow-[0_4px_30px_rgba(64,255,170,0.2)] group overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:border-2 before:border-[#40ffaa]/30 before:rounded-2xl before:scale-[0.98] before:transition-transform group-hover:before:scale-100 transition-all duration-500"
            >
              <motion.div 
                animate={{ 
                  background: ["linear-gradient(to right, #40ffaa10, transparent, #4079ff10)", 
                        "linear-gradient(to right, #4079ff10, transparent, #40ffaa10)"] 
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute -inset-1 bg-[#40ffaa]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <motion.div 
                key={timeLeft.hours}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#40ffaa] to-[#40ffaa]/80 group-hover:scale-110 transition-transform duration-300"
              >
                {timeLeft.hours}
              </motion.div>
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
                className="mt-3 text-lg md:text-xl text-white/90 font-medium tracking-wide"
              >
                Hours
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl w-full md:w-64 h-40 md:h-64 flex flex-col items-center justify-center shadow-[0_4px_30px_rgba(64,255,170,0.2)] group overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:border-2 before:border-[#40ffaa]/30 before:rounded-2xl before:scale-[0.98] before:transition-transform group-hover:before:scale-100 transition-all duration-500"
            >
              <motion.div 
                animate={{ 
                  background: ["linear-gradient(to right, #40ffaa10, transparent, #4079ff10)", 
                        "linear-gradient(to right, #4079ff10, transparent, #40ffaa10)"] 
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute -inset-1 bg-[#40ffaa]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <motion.div 
                key={timeLeft.minutes}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#40ffaa] to-[#40ffaa]/80 group-hover:scale-110 transition-transform duration-300"
              >
                {timeLeft.minutes}
              </motion.div>
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
                className="mt-3 text-lg md:text-xl text-white/90 font-medium tracking-wide"
              >
                Minutes
              </motion.div>
            </motion.div>
          </div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-white text-base sm:text-lg md:text-xl mt-6 md:mt-10 relative bg-gradient-to-r from-[#40ffaa] to-[#00ffff] p-[1.5px] rounded-full group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-[#40ffaa] to-[#00ffff] rounded-full opacity-0 group-hover:opacity-30 transition-opacity"
              animate={{
                boxShadow: ["0 0 0 rgba(64,255,170,0)", "0 0 20px rgba(64,255,170,0.5)", "0 0 0 rgba(64,255,170,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span 
              className="relative bg-black block rounded-full px-8 py-3 transition-all duration-300 group-hover:text-[#40ffaa] group-hover:shadow-[0_0_15px_rgba(64,255,170,0.3)] font-medium"
              whileHover={{ letterSpacing: "0.5px" }}
            >
              Notify me
            </motion.span>
          </motion.button>


        </div>


        {/* <div className="w-full my-12 md:my-16">
          <div className="flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-w-full overflow-hidden">  
            <div className="w-full flex justify-center">
              <div className="mx-auto">
                <InfiniteScroll
                  items={items}
                  isTilted={true}
                  tiltDirection="left"
                  autoplay={true}
                  autoplaySpeed={0.1}
                  autoplayDirection="down"
                  pauseOnHover={true}
                />
              </div>
            </div>
          </div>
        </div> */}
                   <SponsorshipPackages
                        title={sponsorsData.sponsors.packages.title}
                        subtitle={sponsorsData.sponsors.packages.subtitle}
                        description={sponsorsData.sponsors.packages.description}
                        tiers={sponsorsData.sponsors.packages.tiers}
                    />

<BecomeSpeaker data={speakersData.speakers.becomeSpeaker} />



     


        {/* Speech test button - remove in production
        {process.env.NODE_ENV !== "production" && (
          <button 
            onClick={testSpeechDirectly}
            className="fixed bottom-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg z-50"
          >
            Test Speech
          </button>
        )} */}

      </div>
    </div>
  );
}

export default Page;
