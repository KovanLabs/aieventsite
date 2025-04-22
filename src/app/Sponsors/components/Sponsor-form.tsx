import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function SponsorForm() {
    return (
        <section className="py-8 bg-black/40 backdrop-blur-xl rounded-2xl shadow-[0_4px_30px_rgba(64,255,170,0.2)] border border-[#40ffaa]/30">
            <div className="px-6 py-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Become a Sponsor</h2>
                <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto">Get in touch with our sponsorship team to be part of this groundbreaking AI conference</p>

                <form className="max-w-2xl mx-auto space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-white/90">Full Name*</Label>
                            <Input 
                                id="fullName" 
                                placeholder="" 
                                className="bg-black/60 border-[#40ffaa]/20 focus:border-[#40ffaa] focus:ring-[#40ffaa]/50 text-white" 
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="companyName" className="text-white/90">Company Name*</Label>
                            <Input 
                                id="companyName" 
                                placeholder="" 
                                className="bg-black/60 border-[#40ffaa]/20 focus:border-[#40ffaa] focus:ring-[#40ffaa]/50 text-white" 
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white/90">Email Address*</Label>
                            <Input 
                                id="email" 
                                type="email" 
                                placeholder="" 
                                className="bg-black/60 border-[#40ffaa]/20 focus:border-[#40ffaa] focus:ring-[#40ffaa]/50 text-white" 
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-white/90">Phone Number*</Label>
                            <Input 
                                id="phone" 
                                placeholder="" 
                                className="bg-black/60 border-[#40ffaa]/20 focus:border-[#40ffaa] focus:ring-[#40ffaa]/50 text-white" 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="interestedIn" className="text-white/90">Interested In*</Label>
                        <Select>
                            <SelectTrigger className="bg-black/60 border-[#40ffaa]/20 focus:border-[#40ffaa] focus:ring-[#40ffaa]/50 text-white">
                                <SelectValue placeholder="Select a sponsorship package" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/80 border-[#40ffaa]/30 text-white">
                                <SelectItem value="platinum" className="focus:bg-[#40ffaa]/10 focus:text-white">Platinum Sponsor</SelectItem>
                                <SelectItem value="gold" className="focus:bg-[#40ffaa]/10 focus:text-white">Gold Sponsor</SelectItem>
                                <SelectItem value="silver" className="focus:bg-[#40ffaa]/10 focus:text-white">Silver Sponsor</SelectItem>
                                <SelectItem value="bronze" className="focus:bg-[#40ffaa]/10 focus:text-white">Bronze Sponsor</SelectItem>
                                <SelectItem value="custom" className="focus:bg-[#40ffaa]/10 focus:text-white">Custom Package</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-white/90">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Please share any specific requirements or questions you have regarding sponsorship."
                            rows={4}
                            className="bg-black/60 border-[#40ffaa]/20 focus:border-[#40ffaa] focus:ring-[#40ffaa]/50 text-white resize-none"
                        />
                    </div>

                    <Button 
                        type="submit" 
                        className="w-full text-base text-black sm:text-lg mt-8 relative bg-gradient-to-r from-[#40ffaa] to-[#00ffff] p-[2px] rounded-full group hover:shadow-[0_0_25px_rgba(64,255,170,0.5)] transition-all duration-300 transform hover:scale-[1.02]"
                    >
                                Submit <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Button>
                </form>
            </div>
        </section>
    )
}
