import SponsorshipPackages from "./components/Sponser-packages"
import CustomOpportunities from "./components/Custom-oportunites"
import WhySponsor from "./components/Why-sponser"
import SponsorForm from "./components/Sponsor-form"
import sponsorsData from '../../Data/Sponsors_m.json';

export default function Home() {
    return (
        <main className="min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 relative">
                {/* Glow effect background */}
                <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#40ffaa10] via-transparent to-transparent opacity-40"></div>
                </div>
                
                {/* <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#40ffaa] to-[#40ffaa]/80 mb-4">
                        Sponsors
                    </h1>
                    <p className="text-lg text-white/90 text-center max-w-3xl mx-auto">
                        Join the pioneers shaping the future of AI at TiE Coimbatore's KOVAI Conference
                    </p>
                </div> */}

                <div className="backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.2)] mb-16">
                    <SponsorshipPackages
                        title={sponsorsData.sponsors.packages.title}
                        subtitle={sponsorsData.sponsors.packages.subtitle}
                        description={sponsorsData.sponsors.packages.description}
                        tiers={sponsorsData.sponsors.packages.tiers}
                    />
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.2)]">
                        <CustomOpportunities
                            title={sponsorsData.sponsors.custom.title}
                            subtitle={sponsorsData.sponsors.custom.subtitle}
                            description={sponsorsData.sponsors.custom.description}
                            options={sponsorsData.sponsors.custom.options}
                            cta={sponsorsData.sponsors.custom.cta}
                        />
                    </div>

                    <div className="backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.2)]">
                        <WhySponsor title={sponsorsData.sponsors.benefits.title} benefits={sponsorsData.sponsors.benefits.items} />
                    </div>
                </div>

                <div className="mt-24 backdrop-blur-xl rounded-2xl p-8 border border-[#40ffaa]/20 shadow-[0_4px_30px_rgba(64,255,170,0.2)]">
                    <SponsorForm />
                </div>
            </div>
        </main>
    )
}