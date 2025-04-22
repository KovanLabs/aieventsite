interface Benefit {
    title: string
    description: string
}

interface WhySponsorProps {
    title: string
    benefits: Benefit[]
}

export default function WhySponsor({ title, benefits }: WhySponsorProps) {
    return (
        <section className="py-12 mt-16 lg:mt-0">
            <div className="lg:pl-12 lg:border-l lg:border-neutral-800">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#4079ff]">{title}</h2>
                <div className="mt-4 border-b border-[#40ffaa]/30 w-32"></div>

                <div className="mt-8 space-y-8">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-neutral-800 hover:shadow-[0_4px_30px_rgba(64,255,170,0.2)] transition-all duration-300"
                        >
                            <h3 className="text-xl font-medium flex items-center text-[#40ffaa]">
                                <span className="text-[#40ffaa] mr-3">•</span>
                                {benefit.title}
                            </h3>
                            <p className="mt-3 text-neutral-300 ml-5">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}