import type { VisionMissionData } from "../types/Conference"
import { motion } from "framer-motion"

interface VisionMissionProps {
  data: VisionMissionData
}

export default function VisionMission({ data }: VisionMissionProps) {
  return (
    <div className="mb-32 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Vision */}
        <motion.div 
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-10 rounded-2xl border border-[#40ffaa]/30 bg-gradient-to-br from-[#40ffaa]/10 to-[#40ffaa]/5 
                     shadow-[0_8px_32px_rgba(64,255,170,0.2)] backdrop-blur-lg relative overflow-hidden"
        >
          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-[#40ffaa]/10 blur-3xl z-0"></div>
          <div className="relative z-10">
            <div className="mb-8 flex items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#40ffaa]/20 mr-4">
                <span className="text-lg font-bold text-[#40ffaa]">01</span>
              </div>
              <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#40ffaa]">
                {data.vision.title}
              </h2>
            </div>
            <p className="text-white/90 mb-6 text-lg leading-relaxed">{data.vision.content}</p>
            <p className="text-white/70 italic">{data.vision.additionalContent}</p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div 
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-10 rounded-2xl border border-[#40ffaa]/30 bg-gradient-to-br from-[#40ffaa]/10 to-[#40ffaa]/5 
                     shadow-[0_8px_32px_rgba(64,255,170,0.2)] backdrop-blur-lg relative overflow-hidden"
        >
          <div className="absolute -left-8 -top-8 w-36 h-36 rounded-full bg-[#40ffaa]/10 blur-3xl z-0"></div>
          <div className="relative z-10">
            <div className="mb-8 flex items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#40ffaa]/20 mr-4">
                <span className="text-lg font-bold text-[#40ffaa]">02</span>
              </div>
              <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#40ffaa]">
                {data.mission.title}
              </h2>
            </div>
            <p className="text-white/90 mb-6 text-lg leading-relaxed">{data.mission.content}</p>
            <p className="text-white/70 italic">{data.mission.additionalContent}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
