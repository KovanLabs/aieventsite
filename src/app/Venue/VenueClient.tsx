"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function VenueClient({ initialData }) {
  console.log("Data received in VenueClient:", initialData);
  const [activeTab, setActiveTab] = useState("venue");
  
  // Ensure we have valid data with proper structure
  const data = initialData || {};
  const venue = data.venue || {};
  const aboutCoimbatore = data.aboutCoimbatore || {};
  const travelInfo = data.travelInfo || {};
  const accommodation = data.accommodation || {};
  const localAttractions = data.localAttractions || {};
  
  // Make sure facilities is always an array, even if it's missing
  const facilities = venue.facilities || [];

  const tabs = [
    { id: "venue", label: "Venue" },
    { id: "aboutCoimbatore", label: "About Coimbatore" },
    { id: "travelInfo", label: "Travel Info" },
    { id: "accommodation", label: "Accommodation" },
    { id: "localAttractions", label: "Attractions" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171923] to-black pb-20">
      {/* Header */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10"></div>
          <img 
            src="https://imgs.search.brave.com/TDA1HT6D_Rrjq-tIIZUg3x-_lppAxZ4z0MLY1CuvWc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFtaWxuYWR1dG91/cmlzbS50bi5nb3Yu/aW4vaW1nL3BhZ2Vz/L2xhcmdlLWRlc2t0/b3AvY29pbWJhdG9y/ZS0xNjU2MDkyNTk1/XzE5ZTlmY2ViZDc3/NGFiMzhkMGE1Lndl/YnA" 
            alt="Coimbatore" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Venue & Travel Information
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Everything you need to know about the KovAI Conference 2025 location
          </motion.p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 mt-5">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base ${
                activeTab === tab.id
                  ? "bg-green-400 text-black font-medium"
                  : "bg-black/40 backdrop-blur-sm text-white/70 hover:text-white/90 border border-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Venue Information */}
        {activeTab === "venue" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#4079ff] mb-6">
                {venue.title || "Conference Venue"}
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {venue.location || "Location TBA"}
                </h3>
                <p className="text-white/80 mb-4">
                  {venue.description || ""}
                </p>
                <p className="text-white/80">
                  {venue.description2 || ""}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Venue Facilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {facilities.map((facility, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3 bg-white/5 rounded-lg p-4"
                      whileHover={{ 
                        backgroundColor: "rgba(64, 255, 170, 0.1)",
                        transition: { duration: 0.2 } 
                      }}
                    >
                      <span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff]"></span>
                      <span className="text-white/90">{facility}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* About Coimbatore */}
        {activeTab === "aboutCoimbatore" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#4079ff] mb-2">
                {aboutCoimbatore.title || "About Coimbatore"}
              </h2>
              
              <h3 className="text-xl text-white/80 italic mb-8">
                {aboutCoimbatore.subtitle || "The Manchester of South India"}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(aboutCoimbatore.highlights || []).map((highlight, index) => (
                  <motion.div 
                    key={index}
                    className="bg-black/30 rounded-xl p-6 border border-white/5"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 30px rgba(64, 255, 170, 0.15)",
                      borderColor: "rgba(64, 255, 170, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xl font-semibold text-[#40ffaa] mb-3">{highlight.title || ""}</h4>
                    <p className="text-white/70">{highlight.description || ""}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Continue with the other tabs, using the same pattern of providing fallbacks */}
        
      </div>
    </div>
  );
}