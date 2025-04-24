import type { GoalsData } from "../types/Conference";
import { motion } from "framer-motion";

interface ConferenceGoalsProps {
  data: GoalsData;
}

export default function ConferenceGoals({ data }: ConferenceGoalsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="mb-32 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-green-500 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#40ffaa]">
          {data.title}
        </h2>
        <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto">
          {data.subtitle}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {data.items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-8 backdrop-blur-xl bg-gradient-to-br from-black/60 to-black/40 rounded-2xl border border-[#40ffaa]/20 hover:border-[#40ffaa]/70 shadow-[0_8px_40px_rgba(64,255,170,0.15)] group transition-all duration-500 relative overflow-hidden hover:translate-y-[-8px] hover:shadow-[0_16px_50px_rgba(64,255,170,0.25)]"
          >
            <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#40ffaa] to-[#40ffaa]/70 group-hover:w-full transition-all duration-700"></div>
            {/* <div className="mb-6 flex items-center justify-between">
              <span className="text-xl font-bold text-[#40ffaa]">{(index + 1).toString().padStart(2, "0")}</span>
              <span className="text-[#40ffaa]/0 group-hover:text-[#40ffaa] transition-colors duration-300">
                <FiArrowRight className="transform group-hover:translate-x-1 transition-all" />
              </span>
            </div> */}
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#40ffaa] transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
