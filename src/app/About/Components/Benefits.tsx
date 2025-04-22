import type { BenefitsData } from "../types/Conference"
import { motion } from "framer-motion"
import GradientText from "@/components/GradientText"
import SpotlightCard from "@/components/Card"

// Icons for benefits
const icons = [
  <svg key="1" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
]

interface BenefitsProps {
  data: BenefitsData
}

export default function Benefits({ data }: BenefitsProps) {
  return (
    <div className="mb-24 py-12 relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-green-900/20 to-transparent opacity-30 pointer-events-none" />
      
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <GradientText 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            colors={["#22c55e", "#10b981", "#22c55e"]}
          >
            {data.title}
          </GradientText>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{data.subtitle}</p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {data.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SpotlightCard className="h-full">
              <div className="flex flex-col h-full">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-2xl font-bold bg-clip-text text-white">{item.title}</h3>
                  {icons[index % icons.length]}
                </div>
                <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 w-12 mb-4 rounded-full"></div>
                <p className="text-gray-300">{item.description}</p>
                <div className="mt-4 flex-grow flex items-end">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
