"use client"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface TimelineItem {
    date: string
    event: string
    description: string
}

interface BecomeSpeakerProps {
    data: {
        title: string
        subtitle: string
        description: string
        benefits: string[]
        timeline: TimelineItem[]
    }
}

export default function BecomeSpeaker({ data }: BecomeSpeakerProps) {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto mt-16">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-2 relative inline-block text-white">
                        {data.title}
                        <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#40ffaa] mt-2"></span>
                    </h2>
                    <p className="text-xl text-neutral-300 mt-4 mb-6">{data.subtitle}</p>

                    <p className="text-neutral-400 mb-8">{data.description}</p>

                    <p className="font-medium mb-4 text-white">Our call for speakers is now open. Selected speakers will receive:</p>

                    <ul className="space-y-3 mb-8">
                        {data.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <span className="bg-[#40ffaa] rounded-full p-1 mr-3 mt-0.5 shadow-[0_0_10px_rgba(64,255,170,0.5)]">
                                    <Check size={16} className="text-black" />
                                </span>
                                <span className="text-neutral-300">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <motion.button 
                        className="relative bg-gradient-to-r from-[#40ffaa] to-[#00ffff] p-[1.5px] rounded-full group"
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
                            Apply to Speak
                        </motion.span>
                    </motion.button>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold mb-6 text-white">Speaker Application Timeline</h3>

                    <div className="space-y-8">
                        {data.timeline.map((item, index) => (
                            <motion.div 
                                key={index} 
                                className="border-l-2 border-[#40ffaa]/30 pl-6 relative"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                            >
                                <div className="absolute w-3 h-3 bg-[#40ffaa] rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(64,255,170,0.5)]"></div>
                                <p className="text-neutral-400">{item.date}</p>
                                <h4 className="text-xl font-bold mt-1 text-[#40ffaa]">{item.event}</h4>
                                <p className="text-neutral-300 mt-1">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
