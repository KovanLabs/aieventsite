"use client"
import type { AboutConferenceData } from "../types/Conference"
import VisionMission from "./Vision-mission"
import ConferenceGoals from "./Conference-goals"
import Benefits from "./Benefits"
import Faqs from "./Faqs"
import { motion } from "framer-motion"

interface AboutConferenceProps {
  data: AboutConferenceData
}

export default function AboutConference({ data }: AboutConferenceProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      {/* Header Section */}
      <div className="mb-24 text-center max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#40ffaa] to-[#40ffaa]/80"
        >
          {data.header.title}
        </motion.h1>
        
        <div className="w-24 h-0.5 bg-[#40ffaa]/50 mx-auto mb-8"></div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-300 mb-6 text-lg"
        >
          {data.header.subtitle}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-neutral-200 mb-4"
        >
          {data.header.description}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-neutral-200"
        >
          {data.header.additionalDescription}
        </motion.p>
      </div>

      {/* Vision & Mission */}
      <div className="backdrop-blur-xl bg-black/40 rounded-2xl p-8 mb-16 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
        <VisionMission data={data.visionMission} />
      </div>

      {/* Conference Goals */}
      <div className="backdrop-blur-xl bg-black/40 rounded-2xl p-8 mb-16 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
        <ConferenceGoals data={data.goals} />
      </div>

      {/* Benefits */}
      <div className="backdrop-blur-xl bg-black/40 rounded-2xl p-8 mb-16 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
        <Benefits data={data.benefits} />
      </div>

      {/* Committee
      <div className="backdrop-blur-xl bg-black/40 rounded-2xl p-8 mb-16 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
        <Committee data={data.committee} />
      </div> */}

      {/* FAQs */}
      <div className="backdrop-blur-xl bg-black/40 rounded-2xl p-8 shadow-[0_4px_30px_rgba(64,255,170,0.1)]">
        <Faqs data={data.faqs} />
      </div>
    </div>
  )
}
