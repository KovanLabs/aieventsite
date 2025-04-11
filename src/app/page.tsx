"use client";
import { useState, useEffect, useRef } from "react";
import BlurText from "@/components/Blurtext";
import Orb from "../components/Orb";
import GradientText from "@/components/GradientText";
import ScrollFloat from "@/components/ScrollFloat";
import InfiniteScroll from "@/components/InfiniteScroll";
import SpotlightCard from "@/components/Card";
import sponsors from "../../src/Data/Sponsers.json";
import participants from "../../src/Data/Participant.json";
import { motion } from "framer-motion";

const items = [
    { content: "Join us for the largest AI conference in South India" },
    { content: <p>Featuring 20+ world-class speakers from leading tech companies and research institutions</p> },
    { content: "Discover cutting-edge AI innovations transforming industries" },
    { content: <p>Interactive workshops on machine learning, computer vision, and natural language processing</p> },
    { content: "Network with 1000+ AI professionals and researchers" },
    { content: <p>Special startup showcase featuring the most promising AI ventures in India</p> },
    { content: "Learn about ethical AI implementation strategies" },
    { content: <p>Panel discussions on the future of AI in healthcare, finance, and manufacturing</p> },
    { content: "Get early access to new AI tools and frameworks" },
    { content: <p>Hands-on sessions with TensorFlow, PyTorch, and other popular AI libraries</p> },
    { content: "Meet potential investors for your AI startup" },
    { content: <p>Keynote address by Dr. Rajesh Kumar on &apos;The Next Decade of AI Innovation&apos;</p> },
    { content: "Explore career opportunities in artificial intelligence" },
    { content: <p>Closing ceremony with awards for best AI research and applications</p> },
];

function Page() {
  // State for each countdown value
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });
  const sponsorsScrollRef = useRef<HTMLDivElement>(null);
  const participantsScrollRef = useRef<HTMLDivElement>(null);

  // Removed auto scroll useEffect

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

          <ScrollFloat
            animationDuration={100}
            ease="back.inOut(2)"
            scrollStart="center bottom+=35%"
            scrollEnd="bottom bottom-=25%"
            stagger={0.03}
            textClassName="mt-6 md:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-[1250px] px-4 sm:px-6 md:px-10 text-center"
          >
            Imagine a space where the very air crackles with possibility. Where every interaction sparks new insights, and the future of AI unfolds before your eyes. 
          </ScrollFloat>
        </div>

        <ScrollFloat
          animationDuration={100}
          ease="back.inOut(2)"
          scrollStart="center bottom+=35%"
          scrollEnd="bottom bottom-=25%"
          stagger={0.03}
          textClassName="mt-6 md:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-[1250px] px-4 sm:px-6 md:px-10 text-center"
        >
          The TiE Coimbatore&apos;s KOVAI Conference isn&apos;t just another event – it&apos;s an immersive experience designed to ignite your passion, fuel your ambition, and connect you with the pioneers shaping tomorrow.
        </ScrollFloat>
        <div className="w-full my-12 md:my-16">
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
        </div>

        <div className="mt-16 mb-16 w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
            For Partners & Sponsors 
          </h1>
          <div className="w-full scrollbar-hide overflow-hidden">
            <div 
              ref={sponsorsScrollRef}
              className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {sponsors.map((sponsor: any, index: number) => (
                <SpotlightCard 
                  key={index} 
                  className="min-w-[300px] max-w-[350px] h-[250px] flex flex-col justify-between snap-center shrink-0"
                  spotlightColor="rgba(64, 255, 170, 0.2)"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#40ffaa]">
                    {sponsor.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-300">
                    {sponsor.content}
                  </p>
                </SpotlightCard>
              ))}
              {/* Duplicate first few items to create seamless loop */}
              {sponsors.slice(0, 3).map((sponsor: any, index: number) => (
                <SpotlightCard 
                  key={`dup-${index}`} 
                  className="min-w-[300px] max-w-[350px] h-[250px] flex flex-col justify-between snap-center shrink-0"
                  spotlightColor="rgba(64, 255, 170, 0.2)"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#40ffaa]">
                    {sponsor.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-300">
                    {sponsor.content}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          <div className="w-full mt-16 scrollbar-hide overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
              For Participants 
            </h1>
            <div 
              ref={participantsScrollRef}
              className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {participants.map((participant: any, index: number) => (
                <SpotlightCard 
                  key={index} 
                  className="min-w-[300px] max-w-[350px] h-[250px] flex flex-col justify-between snap-center shrink-0"
                  spotlightColor="rgba(64, 255, 170, 0.2)"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#40ffaa]">
                    {participant.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-300">
                    {participant.content}
                  </p>
                </SpotlightCard>
              ))}
              {/* Duplicate first few items to create seamless loop */}
              {participants.slice(0, 3).map((participant: any, index: number) => (
                <SpotlightCard 
                  key={`dup-${index}`} 
                  className="min-w-[300px] max-w-[350px] h-[250px] flex flex-col justify-between snap-center shrink-0"
                  spotlightColor="rgba(64, 255, 170, 0.2)"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#40ffaa]">
                    {participant.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-300">
                    {participant.content}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-16 mb-16 w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-10 gap-y-7">
          <h1 className="font-bold text-5xl">Stay informed. Be Inspired. Be There.</h1>
          <p className="text-lg text-neutral-300">
            Register your interest now to receive exclusive updates, speaker announcements, and early bird opportunities.
          </p>
          
          <div className="flex items-center w-full max-w-[400px] rounded-full overflow-hidden border border-neutral-700 focus-within:ring-2 focus-within:ring-[#40ffaa] bg-neutral-800">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-neutral-400 focus:outline-none" 
            />
            <button className="px-4 py-2 bg-[#40ffaa] text-black font-bold hover:bg-[#38e699] transition-colors rounded-full">
              Notify
            </button>
          </div>
        </div>

        <footer className="text-center py-4 text-neutral-400">
          TiE Coimbatore&apos;s KOVAI Conference | October 2 &amp; 3, 2025
        </footer>

      </div>
    </div>
  );
}

export default Page;
