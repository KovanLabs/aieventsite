import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Tier {
    name: string
    price: string
    benefits: string[]
}

interface SponsorshipPackagesProps {
    title: string
    subtitle: string
    description: string
    tiers: Tier[]
}

export default function SponsorshipPackages({ title, subtitle, description, tiers }: SponsorshipPackagesProps) {
    return (
        <section className="py-12 md:py-16">
            <div className="text-center mb-12 md:mb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">{title}</h1>
                <p className="mt-3 text-lg md:text-xl text-white/80">{subtitle}</p>
                <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-white/70">{description}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {tiers.map((tier) => (
                    <div 
                        key={tier.name} 
                        className="flex flex-col rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(64,255,170,0.2)] group border border-[#40ffaa]/30 transition-all duration-500"
                    >
                        <div className="p-5 bg-black/60 border-b border-[#40ffaa]/20">
                            <h3 className="text-lg font-semibold text-center text-white">{tier.name}</h3>
                            <p className="mt-2 text-center font-medium text-[#40ffaa]">{tier.price}</p>
                        </div>
                        <div className="flex-1 p-5">
                            <ul className="space-y-3">
                                {tier.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="h-5 w-5 text-[#40ffaa] flex-shrink-0 mr-2" />
                                        <span className="text-sm text-white/90">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-5 border-t border-[#40ffaa]/20">
                            <Button 
                                className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-bold relative overflow-hidden hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 group"
                            >
                                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    {`Become a ${tier.name} Sponsor`}
                                </span>
                                <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 group-hover:scale-90 rounded-full transition-all duration-500 ease-out transform origin-center"></span>
                                <span className="absolute -inset-px bg-gradient-to-r from-[#8b5cf6]/60 to-[#a78bfa]/60 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
