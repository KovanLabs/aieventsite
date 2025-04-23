"use client";
import { useState } from "react";
import Orb from "@/components/Orb";
import BlurText from "@/components/Blurtext";
import JsonAccordion from "@/components/Accordition";



const contactData = {
    sections: [
        {
            title: "Email Us",
            items: [
                {
                    label: "For general inquiries:",
                    value: "info@kovaiconference.com",
                    type: "email"
                },
                {
                    label: "For sponsorship inquiries:",
                    value: "sponsors@kovaiconference.com",
                    type: "email"
                },
                {
                    label: "For speaker inquiries:",
                    value: "speakers@kovaiconference.com",
                    type: "email"
                }
            ]
        },
        {
            title: "Call Us",
            items: [
                {
                    label: "Conference Helpline:",
                    value: "+91 98765 43210",
                    type: "phone"
                },
                {
                    label: "Registration Support:",
                    value: "+91 98765 43211",
                    type: "phone"
                },
                {
                    label: "Office Hours:",
                    value: "Monday to Friday: 9:00 AM - 6:00 PM IST\nSaturday: 9:00 AM - 1:00 PM IST",
                    type: "text"
                }
            ]
        },
        {
            title: "Visit Us",
            items: [
                {
                    label: "KovAI Conference Organizing Office:",
                    value: "123 Tech Park, Avinashi Road\nCoimbatore, Tamil Nadu 641014\nIndia",
                    type: "address"
                },
                {
                    label: "Conference Venue:",
                    value: "To be announced",
                    type: "address"
                }
            ]
        }
    ]
};

function ContactPage() {
    const [hoverState, setHoverState] = useState(false);

    return (
        <div className="min-h-screen relative py-20 px-4 bg-black">      
            <div className="max-w-4xl mt-10 mx-auto z-10 relative">

                <h1  
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-center  mb-12 font-normal"
                >Get In Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {contactData.sections.map((section, sectionIndex) => (
                        <div 
                            key={sectionIndex}
                            className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-[0_4px_30px_rgba(64,255,170,0.15)] group overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:border-2 before:border-[#40ffaa]/20 before:rounded-2xl before:scale-[0.98] before:transition-transform group-hover:before:scale-100 transition-all duration-500"
                            onMouseEnter={() => setHoverState(true)}
                            onMouseLeave={() => setHoverState(false)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#40ffaa10] via-transparent to-[#9c40ff10] opacity-40 group-hover:opacity-60" />
                            
                            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#9c40ff] relative z-10">{section.title}</h2>
                            
                            <div className="space-y-6 relative z-10">
                                {section.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="space-y-2">
                                        <p className="text-white/70 text-sm font-medium">{item.label}</p>
                                        {item.type === "email" ? (
                                            <a 
                                                href={`mailto:${item.value}`} 
                                                className="text-white hover:text-[#40ffaa] transition-colors duration-300 flex items-center"
                                            >
                                                <span className="border-b border-[#40ffaa]/40 hover:border-[#40ffaa] pb-1">{item.value}</span>
                                            </a>
                                        ) : item.type === "phone" ? (
                                            <a 
                                                href={`tel:${item.value.replace(/\s+/g, '')}`} 
                                                className="text-white hover:text-[#40ffaa] transition-colors duration-300 flex items-center"
                                            >
                                                <span className="border-b border-[#40ffaa]/40 hover:border-[#40ffaa] pb-1">{item.value}</span>
                                            </a>
                                        ) : (
                                            <p className="text-white whitespace-pre-line">{item.value}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="absolute -inset-1 bg-[#40ffaa]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                    ))}
                </div>

                <JsonAccordion/>
            </div>
        </div>
    );
}

export default ContactPage;