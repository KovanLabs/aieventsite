import type { FaqsData } from "../types/Conference"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqsProps {
  data: FaqsData
}

export default function Faqs({ data }: FaqsProps) {
  return (
    <div className="my-24 px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white">
          {data.title}
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">{data.subtitle}</p>
      </div>

      <div className="max-w-3xl mx-auto rounded-2xl p-5 border border-[#40ffaa]/20 backdrop-blur-sm bg-black/40 shadow-[0_0_15px_rgba(64,255,170,0.2)]">
        <Accordion type="single" collapsible className="w-full">
          {data.items.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-[#40ffaa]/20 last:border-b-0 py-3"
            >
              <AccordionTrigger 
                className="text-left font-medium text-white hover:text-[#40ffaa] transition-colors"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}