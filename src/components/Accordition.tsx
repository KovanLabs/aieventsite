"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// Define the FAQ item type
interface FaqItem {
    question: string
    answer: string
}

interface JsonAccordionProps {
    initialFaqs?: FaqItem[]
}

export default function JsonAccordion({ initialFaqs = [] }: JsonAccordionProps) {
    // Default FAQ data if none provided
    const defaultFaqs: FaqItem[] = [
        {
            question: "How can I register for the conference?",
            answer:
                "You can register for KovAI Conference 2025 through our registration page. We offer different ticket types including General Admission, Workshop Pass, and Student Pass. Early bird registration with discounted rates is available until July 31, 2025.",
        },
        {
            question: "What is the refund policy?",
            answer:
                "Refunds are available up to 30 days before the event with a 15% processing fee. Within 30 days of the event, refunds are not available, but tickets can be transferred to another attendee.",
        },
        {
            question: "How can I become a speaker?",
            answer:
                "To become a speaker, submit your proposal through our speaker portal. The call for papers is open until March 15, 2025. Selected speakers will be notified by April 30, 2025.",
        },
        {
            question: "Are there accommodation options near the venue?",
            answer:
                "Yes, we have partnered with several hotels near the venue offering special rates for conference attendees. Details can be found on our accommodation page.",
        },
        {
            question: "How can I sponsor the conference?",
            answer:
                "We offer various sponsorship packages. Please contact our sponsorship team at sponsors@kovaiconf.com for more information.",
        },
    ]

    // Use initialFaqs if provided, otherwise use defaultFaqs
    const [faqs] = useState<FaqItem[]>(initialFaqs.length > 0 ? initialFaqs : defaultFaqs)
    const [openItem, setOpenItem] = useState<string | null>("item-0")

    // Handle accordion item toggle
    const handleToggle = (value: string) => {
        setOpenItem(openItem === value ? null : value)
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                <div className="w-24 h-1 bg-[#40ffaa] mx-auto mb-6"></div>
                <p className="text-neutral-300">Quick answers to common questions</p>
            </div>

            <div className="mb-8 border border-[#40ffaa]/30 rounded-lg overflow-hidden bg-black/40 backdrop-blur-md">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-[#40ffaa]/20 last:border-b-0">
                        <div
                            className={`flex justify-between items-center p-5 cursor-pointer transition-all duration-300 ${
                                openItem === `item-${index}` ? "bg-[#40ffaa]/10" : "bg-transparent"
                            } hover:bg-[#40ffaa]/5`}
                            onClick={() => handleToggle(`item-${index}`)}
                        >
                            <h3 className="font-medium text-white">{faq.question}</h3>
                            <span className="flex-shrink-0 ml-2">
                                {openItem === `item-${index}` ? (
                                    <ChevronUp className="h-5 w-5 text-[#40ffaa]" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-[#40ffaa]" />
                                )}
                            </span>
                        </div>
                        {openItem === `item-${index}` && (
                            <div className="p-5 bg-black/20">
                                <p className="text-neutral-300">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-neutral-300 mb-6">
                    Didn&apos;t find what you&apos;re looking for? Contact us directly and we&apos;ll be happy to help.
                </p>
                <button className="px-6 py-3 border border-[#40ffaa] text-[#40ffaa] rounded-full hover:bg-[#40ffaa]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#40ffaa]/50 focus:ring-offset-2 focus:ring-offset-black">
                    Email Us
                </button>
            </div>
        </div>
    )
}
